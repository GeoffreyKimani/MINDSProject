const db = require('./data.json');

const getAllCountryLeaders = (country) => {
    return db[country];
} 

module.exports = {getAllCountryLeaders}