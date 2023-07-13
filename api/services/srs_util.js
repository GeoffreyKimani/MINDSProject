const DbConnect = require('../database/db_util');

// Get all of a country's leaders
const getAllCountryLeadersService = () => {
    return DbConnect.getAllCountryLeaders("kenya");
};

module.exports = {
    getAllCountryLeadersService
  };