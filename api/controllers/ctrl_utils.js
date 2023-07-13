const ServiceConnect = require("../services/srs_util")

// Get all countries through the service connector
const getAllCountryLeadersController = (req, res) => {
    const thisLeaders = ServiceConnect.getAllCountryLeadersService()
    console.log("data: ", thisLeaders)
    res.send({status: "OK", code:200, data:thisLeaders});
};

module.exports = getAllCountryLeadersController