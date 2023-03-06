const { body, header, param, query } = require("express-validator");

const typedefs = require("../typedefs");

/**
 * Login validator
 * 
 * @param {typedefs.Req} req 
 * @param {typedefs.Res} res 
 * @param {typedefs.Next} next 
 */
const loginValidator = async (req, res, next) => {
	await body("username")
		.notEmpty()
		.withMessage("username not defined in body")
		.run(req);
	await body("password")
		.notEmpty()
		.withMessage("password not defined in body")
		.run(req);

	next();
}

/**
 * Register validator
 * 
 * @param {typedefs.Req} req 
 * @param {typedefs.Res} res 
 * @param {typedefs.Next} next 
 */
const registerValidator = async (req, res, next) => {
	await body("email")
		.notEmpty()
		.withMessage("Email is required!")
		.trim()
		.isEmail()
		.normalizeEmail()
		.withMessage("Invalid Email")
		.run(req);
	await body("username")
		.notEmpty()
		.withMessage("username not defined in body")
		.run(req);
	await body("password")
		.notEmpty()
		.withMessage("password not defined in body")
		.run(req);

	next();
}

module.exports = {
	loginValidator,
	registerValidator,
}

