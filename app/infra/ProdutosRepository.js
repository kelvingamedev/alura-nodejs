// ProdutosRepository.js
'use strict';
function ProdutosRepository(connection){
    this._connection = connection;
}
ProdutosRepository.prototype.get = function(callback){
    return this._connection.query(`select * from produtos`, callback);
}
ProdutosRepository.prototype.set = function(produto, callback){
    this._connection.query(`INSERT INTO produtos SET ?`, produto, callback)
}

module.exports = function(){
   return ProdutosRepository;
}