// app.js
'use strict';
let app = require('./config/express')();
app.listen(3000, function(){
	console.log("servidor rodando");
});