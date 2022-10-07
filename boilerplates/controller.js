const typedefs = require("../typedefs");
const logger = require("../utils/logger")(module);

/**
 * @param {typedefs.Req} req
 * @param {typedefs.Res} res
 */
const __controller_func = async (req, res) => {
	try {

	} catch (error) {
		logger.error("Error", { error });
		return res.status(500).send({ message: "Server Error. Try again." });
	}
}

module.exports = {
	__controller_func
};