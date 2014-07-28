var Connection = require('../models/Connection');
var mongoose = require('mongoose');

var ConnectionsController = module.exports = {};

ConnectionsController.createConnection = function(req, res) {
	var connection = new Connection({
		_connector_id: mongoose.Types.ObjectId(req.user._id),
		_connectee_id: mongoose.Types.ObjectId(req.body._connectee_id)
	});

	connection.save(function(err) {
		err ? res.json(err) : res.json(connection);
	});
}

ConnectionsController.getConnections = function(req, res) {
	var limit = req.query.multiplier,
		skip  = req.query.page * limit;

	Connection.find({})
		.select('connector connectee')
		.exec(function(err, connections) {
			res.json(connections);
		});
}

ConnectionsController.getConnection = function(req, res) {

}