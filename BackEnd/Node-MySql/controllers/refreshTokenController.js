const connection = require("../database/MySqlDB");
const jwt = require("jsonwebtoken");


const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  console.log("Checking for cookie in Browser?: ", req.cookies.jwtRefToken);
  console.log('');

  if (!cookies?.jwtRefToken) return res.sendStatus(401);

  const refreshToken = cookies.jwtRefToken;

  // Find username with the help of the refresh token in the database
  const findUserQuery = `SELECT username, role FROM users WHERE refreshtoken = '${refreshToken}'`;
  connection.query(findUserQuery, (err, rows) => {
    if (err) {
      console.log("Error querying database:", err);
      return res.status(500).send("Internal Server Error");
    }
    if (rows.length === 0) {
      return res.sendStatus(403); // Forbidden
    }

    const username = rows[0].username;

    const userRole=rows[0].role;

    if (!username) return res.sendStatus(403); //Forbidden


    // evaluate jwt
    jwt.verify(
      refreshToken,
      'refreshSecretKey',
      (err, decoded) => {
        if (err || username !== decoded.username) return res.sendStatus(403); //Forbidden
        const accessToken = jwt.sign(
          { username: username },
          'accessSecretKey', //"secretKey"
          {
            expiresIn: "3s",
          }
        );
        res.send({ accessToken, roles: [userRole] });
        console.log("AccessToken Regenarated Successfully "+accessToken);
        console.log('');
      }
    );
  });
};

module.exports = { handleRefreshToken };
