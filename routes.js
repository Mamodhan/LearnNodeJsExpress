'use strict'

module.exports = function(app){
	var list = require('./controller');

	app.route('/')
		.get(list.index)

	app.route('/produk')
		.get(list.produk)

	app.route('/login')
		.get(list.login)
};