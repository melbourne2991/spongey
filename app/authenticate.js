var authenticate = function(req, res, next) {
	req.user ? next() : res.status(403).json();
}

module.exports = authenticate;