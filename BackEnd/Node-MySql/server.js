const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const credentials = require("./middleware/credentials");
const connection = require("./database/MySqlDB");
const verifyJWT = require("./middleware/verifyJWT");
let mysql = require('mysql')




// Handle options credentials check - before CORS!
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

//middleware for cookies
app.use(cookieParser());

// built-in middleware for json
app.use(express.json());

app.use(bodyParser.json());



//Routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));




app.use(verifyJWT);
app.use("/fetchUsers", require("./routes/api/Users"));
app.use("/getDoctorsManifest", require("./routes/api/Doctors"));
app.use("/insertDoctor", require("./routes/api/Doctors"))
app.use("/updateDoctor",require('./routes/api/Doctors') )
app.use("/deleteDoctor",require('./routes/api/Doctors'))

// Start the server
app.listen(4300, () => {
  if (connection) 
  console.log("Connected to MySQLDB");
  console.log("Server is running on port 4300");
  console.log('');
});


