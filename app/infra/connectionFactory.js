'use strict';
let mysql = require('mysql');
function connectionFactory(){
    return mysql.createConnection({
        host: `localhost`,
        user: `kelvin`,
        password: `password`,
        database: `casadocodigo_nodejs`
    });
}
module.exports = function () {
    return connectionFactory;
}