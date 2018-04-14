// routes/produtos.js
'use strict';
module.exports = function (app) {
    app.get(`/produtos`, function (req, res) {
        let connection = new app.infra.connectionFactory();
        let produtosRepository = new app.infra.ProdutosRepository(connection);
        produtosRepository.get(function (error, results) {
            res.render('produtos/lista', { lista: results });
        });
        connection.end();
    });
    app.get(`/produtos/form`, function(req, res){
        res.render(`produtos/form`);
    });
    app.post(`/produtos`, function(req, res){
        var produto = req.body;
        console.log(produto);
        var connection = new app.infra.connectionFactory();
        let produtosRepository = new app.infra.ProdutosRepository(connection);
        produtosRepository.set(produto, function(error, results){
            if(error){
                alert(error);
                return;
            }
            res.redirect('/produtos');
        }); 
    });
}