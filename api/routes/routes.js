const express = require("express");
const router = express.Router();
const getAllCountryLeadersController = require("../controllers/ctrl_utils")

router.get("/", function(req, res) {
  res.status(200).send("Welcome to our restful API");
});

router.get("/country", getAllCountryLeadersController)
  
module.exports = router;