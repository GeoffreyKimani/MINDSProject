const ServiceConnect = require("../services/srs_util")

// Get all countries through the service connector
const getAllCountryLeadersController = (req, res) => {
    const country = req.params.country; // Retrieve the country parameter from the request URL
    const thisLeaders = ServiceConnect.getAllCountryLeadersService(country)
    console.log("data: ", thisLeaders)
    res.send({status: "OK", code:200, data:thisLeaders});
};

module.exports = getAllCountryLeadersController;