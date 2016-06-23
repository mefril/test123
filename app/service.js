const fs = require('fs');
const dao = require('./dao');

module.exports = {
    getData: (reqParams)=>{
        return dao.getData();
    }
};