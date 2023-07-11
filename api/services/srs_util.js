const DbConnect = require('../database/db_util');

// Get all of a country's leaders
const getAllCountryLeadersService = (country) => {
    return DbConnect.getAllCountryLeaders(country);
};

module.exports={getAllCountryLeadersService}