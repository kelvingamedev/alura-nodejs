var http = require('http');
var server = http.createServer(function(req, res){
	var response = `<html>
				<body>
					<h1>Listando os produtos</h1>
				</body>
			</html>`;
	res.end(response);
});
server.listen(3000);
console.log("O servidor ta rodando");
