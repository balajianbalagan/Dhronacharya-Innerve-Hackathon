const typedefs = require("../../typedefs");
const logger = require("../../utils/logger")(module);

/** @type {typedefs.Model} */
const Users = require("../../models").User;

/**
 * Admin-validated route to add a new user
 * 
 * @param {typedefs.Req} req Express request object
 * @param {typedefs.Res} res Express response object
 */
const register = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const user = await Users.findOne({
			where: {
				username: username
			}
		});

		if (user) {
			return res.status(409).send({
				message: "Username already in use."
			});
		}

		await Users.create({
			username: username,
			email: email,
			password: password,
		});

		return res.status(201).send({
			message: "User created successfully.",
		});
	} catch (error) {
		logger.error("register", { error });
		return res.status(500).send({ message: "Server Error. Try again." });
	}
}

module.exports = {
	register
};