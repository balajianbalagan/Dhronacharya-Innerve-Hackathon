const typedefs = require("../typedefs");
const logger = require("../utils/logger")(module);

/**
 * Middleware to validate admin access
 * @param {typedefs.Req} req 
 * @param {typedefs.Res} res 
 * @param {typedefs.Next} next 
 */
const adminQueryCreds = async (req, res, next) => {
	try {
		if (req.query.user === process.env.ADMIN_USER && req.query.access === process.env.ADMIN_PASSWD)
			next();
		else
			return res.status(401).send("Intruder alert. IP address: " + req.headers['x-real-ip'] || req.ip);// we do a bit of trolling here
	} catch (error) {
		logger.error("adminQueryCreds", { error });
		return res.status(500).send({ message: "Server Error. Try again." });
	}
}

module.exports = {
	adminQueryCreds,
}