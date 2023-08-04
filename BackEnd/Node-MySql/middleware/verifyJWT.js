const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer")) 
  { 
    console.log("Reached Bearer JWT since there was no Bearer");
    console.log('');
    return res.sendStatus(401);
  }
  const token = authHeader.split(" ")[1];
  //console.log("Surpassed Bearer JWT "+token);
  
  jwt.verify(token, "accessSecretKey", (err, decoded) => {
    if (err) return res.sendStatus(403); //invalid token
    req.username = decoded.username;
    //console.log("Username in req:"+decoded.username);
    //console.log("decoded Username:"+decoded.username);
    next();
  });
};

module.exports = verifyJWT;
