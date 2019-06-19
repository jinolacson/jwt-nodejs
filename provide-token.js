/**
 * sudo npm install express
 * sudo npm install body-parser
 * sudo npm install jsonwebtoken
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

/**
 * Require body-parser for 'req.body'
 */
app.use(bodyParser.json());

/**
 * You can change this to any port number
 */
const PORT = 8888;

app.post("/login", (req, res) => {
  
  /**
   * Dummy users account
   */
  const users = [
    {id: 1, username: "jino", password: "jino123"},
    {id: 2, username: "aodhan", password: "aodhan123"}
  ];

  /**
   * Check valid credentials in users collection
   */
  const user = users.find((u) => {
    return u.username === req.body.username && u.password === req.body.password;
  });

  /**
   * Return 404 page for invalid credentials
   */
  if (!req.body.username || !req.body.password) {
    res.status(400).send("Error. You have entered incorect username and password");
    return;
  }

  /**
   * Generate "myToken" jwt token that expires for 1 hour
   */
  const token = jwt.sign({
    sub: user.id,
    username: user.username
  }, "myToken", {expiresIn: "1 hours"});

  /**
   * Provide newly created jwt token for "myToken"
   */
  res.status(200).send({
    access_token: token,
    username : user.username,
    password: user.password,
    time_created:  (new Date()).toLocaleTimeString()
  });

})

/**
 * Return 404 for any routes
 */
app.get("*", (req, res) => {
  res.sendStatus(404);
});

/**
 * Listen to http://localhost:8888
 */
app.listen(PORT, () => {     
  console.log(`Server is running on port ${PORT}.`); 
});


