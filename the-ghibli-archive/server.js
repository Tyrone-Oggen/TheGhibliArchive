const express = require("express");
require("dotenv").config();
const jwt = require("express-jwt");
const jwkRsa = require("jwks-rsa");

const jwtCheck = jwt({
  secret: jwkRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwkRequestsPerMinute: 5,
    jwksUri: `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/.well-known/jwks.json`
  }),

  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

  algorithms: ["RS256"]
});

const app = express();

app.get("/public", function(req, res) {
  res.json({
    message: "Hello from public API"
  });
});

app.get("/private", jwtCheck, function(req, res) {
  res.json({
    message: "Hello from private API"
  });
});

app.listen(3001);
console.log("API server listening on " + process.env.REACT_APP_AUTH0_AUDIENCE);
