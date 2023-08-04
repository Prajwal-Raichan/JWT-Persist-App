const connection = require("../database/MySqlDB");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password are required.");
  }

  // Check for duplicate usernames in the database
  const countRowsQuery = `SELECT * FROM users WHERE username ='${username}'`;

  connection.query(countRowsQuery, async (err, rows) => {
    if (err) {
      console.log("Error querying database:", err);
      return res.status(500).send("Internal Server Error");
    }
    const count = rows.length;
    if (count === 1) {
      return res.sendStatus(409);
    } else {
      try {
        // Encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);

        // Create and store the new user
        const registerQuery = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";
        connection.query( registerQuery, [username, hashedPwd, role],  (err, result) => 
        {
            if (err) {
              console.log("Error creating new user:", err);
              return res.status(500).json({ message: "Failed to create a new user." });
            }
            console.log("User Added Successfully");
            console.log(result);
            return res.status(201).json({ success: `New user ${username} created!` });
          }
        );
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    }
  });
};

module.exports = { handleNewUser };
