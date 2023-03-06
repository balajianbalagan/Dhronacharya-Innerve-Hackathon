const { body, header, param, query } = require("express-validator");

const typedefs = require("../typedefs");

/**
 * Admin check middleware validator function
 * @param {typedefs.Req} req 
 * @param {typedefs.Res} res 
 * @param {typedefs.Next} next 
 */
const adminQueryCheck = async (req, res, next) => {
	await query("user")
		.notEmpty()
		.withMessage("user not defined in query parameters")
		.run(req);
	await query("access")
		.notEmpty()
		.withMessage("access not defined in query parameters")
		.run(req);

	next();
}

module.exports = {
	adminQueryCheck,
}

