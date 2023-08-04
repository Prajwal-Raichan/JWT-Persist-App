const connection = require("../database/MySqlDB");

const getAllUsers = async (req, res) => {
  const getUsersQuery = "SELECT username,role FROM users";
  connection.query(getUsersQuery, (err, rows) => {
    if (err) {
      console.log("Error querying database:", err);
      return res.status(500).send("Internal Server Error");
    }

    if (rows.length === 0) {
      return res.status(204).send("No users found");
    }
    res.send(rows);
  });
};

module.exports = {
  getAllUsers
 
};
