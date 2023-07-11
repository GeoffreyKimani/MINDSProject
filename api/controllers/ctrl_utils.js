const ServiceConnect = require('../services/srs_util');

// Get all countries through the service connector
const getAllCountryLeadersController = (country) => {
    const thisLeaders = ServiceConnect.getAllCountryLeadersService(country);
    res.send({status: "OK", code:200, data:thisLeaders});
};

module.exports = {getAllCountryLeadersController};