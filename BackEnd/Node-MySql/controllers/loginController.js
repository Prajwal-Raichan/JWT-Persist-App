const bcrypt = require("bcrypt");
const connection = require("../database/MySqlDB");
const jwt = require("jsonwebtoken");


const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password are required.");
  }


  // Check for usernames in the database
  const countRowsQuery = `SELECT * FROM users WHERE username ='${username}'`;
  connection.query(countRowsQuery, async (err, rows) => {
    if (err) {
      console.log("Error querying database:", err);
      return res.status(500).send("Internal Server Error");
    }
    const count = rows.length;
    if (count === 0) {
      return res.sendStatus(401); // Unauthorized
    } else if (count === 1) {
      const match = await bcrypt.compare(password, rows[0].PASSWORD); // Evaluate password
      if (match) {
        // Create JWTs
        console.log("Password Macthed, User is Authorized");
        const accessToken = jwt.sign(
          { username: username },
          'accessSecretKey', //"secretKey"
          {
            expiresIn: "5s",
          }
        );
        const refreshToken = jwt.sign(
          { username: username },
          "refreshSecretKey", //"secretKey"
          {
            expiresIn: "2m",
          }
        );

        // Update the refresh_token field in the database for the user
        const updateRefreshTokenQuery = `UPDATE users SET refreshtoken = '${refreshToken}' WHERE username = '${username}'`;
        connection.query(updateRefreshTokenQuery, (err, result) => {
          if (err) {
            console.log("Error updating refresh token:", err);
            return res.status(500).send("Internal Server Error");
          }
          console.log("Refresh Token Inserted Into The Database.");

          // Creates Secure Cookie with refresh token
          res.cookie("jwtRefToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
           //maxAge: 24 * 60 * 60 * 1000,           //24 * 60 * 60 * 1000: [1-Hour]                        //24 * 60 * 60 * 1000: [1-Day]
          });
          //Code to Console Log the cookie here
          //console.log("jwtRefToken cookie:", req.cookies.jwtRefToken);


          // Get the user role from the database
          const userRoleQuery = `SELECT role FROM users WHERE username = '${username}'`;
          connection.query(userRoleQuery, (err, result) => {
            if (err) {
              console.log("Error retrieving user role:", err);
              return res.status(500).send("Internal Server Error");
            }
            const userRole = result[0].role;

            // Send access token and user role to the frontend
            res.send({ accessToken, roles: [userRole] });
          });
        }); 
      } else {
        res.sendStatus(401); //Unauthorized
      }
    }
  });
};

module.exports = { handleLogin };