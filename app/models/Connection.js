var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	_connector_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	_connectee_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Connection', schema);
