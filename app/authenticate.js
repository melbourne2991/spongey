var authenticate = function(req, res, next) {
	console.log('no user');
	req.user ? next() : res.status(403).json();
}

module.exports = authenticate;