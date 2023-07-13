const db = require('./data.json');

const getAllCountryLeaders = async (country) => {
    const response = await fetch('https://raw.githubusercontent.com/GeoffreyKimani/MINDSProject/main/api/database/data.json');
    const data = await response.json();
    return db[country];
} 

module.exports = {getAllCountryLeaders}