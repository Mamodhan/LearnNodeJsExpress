'use strict';

var response = require('./res');
var connection = require('./conn');

exports.produk = function(req, res) {
	connection.query('SELECT * FROM produk', function (error, rows, fields){
		if (error) {
			console.log(error)
		}else{
			response.ok(rows, res)
		}
	});
};

exports.index = function(req, res){
	response.ok("Hello from the Node JS Restful side!", res)
};

exports.loginUser = function(req, res){

	var no_hp = req.body.no_hp;
	var password = req.body.password;

	connection.query('SELECT * FROM mitra WHERE no_hp = ? AND password = ?', [no_hp, password], function(error, rows, fields){
		if (error) {
			console.log(error)
		}else{
			response.ok("Berhasil Login!", res)
		}
	});
};