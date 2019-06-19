/**
 * sudo npm install express
 * sudo npm install body-parser
 * sudo npm install jsonwebtoken
 * sudo npm install express-jwt
 */
const express = require("express");
const bodyParser = require("body-parser"); 
const expressjwt = require("express-jwt");
const app = express();

/**
 * Values are inside: jwt-nodejs/.env
 * sudo npm install dotenv
 * more details for dotenv: https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
 */
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.API_PORT || 8888;

/**
 * Require body-parser for 'req.body'
 */
app.use(bodyParser.json());   

/**
 * Paste your previous key from provide-token.js in this case "myToken"
 */
const jwtCheck = expressjwt({    
    secret: "myToken"
});

/**
 * Protected routes accessable with jwt access token
 */
app.get("/asset/secret", jwtCheck ,(req, res) => {
    res.status(200).send("You are authorized user.");
});

/**
 * Listen to http://localhost:[port]
 */
app.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}.`);
});