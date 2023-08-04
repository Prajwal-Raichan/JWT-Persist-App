const connection = require("../database/MySqlDB");

/*
const clearCookie = (res, cookieName) => {
    res.cookie(cookieName, "", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
  };
  */

  const clearCookie = (res, cookieName) => {
    res.clearCookie(cookieName, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
  };
  
  const handleLogout = async (req, res) => {
  
    const cookies = req.cookies;
    //console.log("jwtRefToken cookie:",req.cookies.jwtRefToken);
  
    if (!cookies?.jwtRefToken) {
      clearCookie(res, "jwtRefToken");  
      return res.sendStatus(204); // No content
    }
  
    const refreshToken = cookies.jwtRefToken;
  
    // Find username with the help of the refresh token in the database
    const findUserQuery = `SELECT username FROM users WHERE refreshtoken = '${refreshToken}'`;
    connection.query(findUserQuery, (err, rows) => {
      if (err) {
        console.log("Error querying database:", err);
        return res.status(500).send("Internal Server Error");
      }
      // Is refreshToken in db?
      if (rows.length === 0) {
        clearCookie(res, "jwtRefToken");
        return res.sendStatus(204);
      }
  
      // Delete refreshToken in db
      const updateRefreshTokenQuery = `UPDATE users SET refreshtoken ='' WHERE refreshtoken = '${refreshToken}'`;
      connection.query(updateRefreshTokenQuery, (err, result) => {
        if (err) {
          console.log("Error deleting refresh token:", err);
          return res.status(500).send("Internal Server Error");
        }
  
        console.log("Refresh token deleted:", result);
        clearCookie(res, "jwtRefToken");
        res.sendStatus(204);
      });
    });
  };
  
  module.exports = { handleLogout };
  