const jwt = require('jsonwebtoken')
const { Op } = require("sequelize");
const courses = require('../models/courses');
/**
 * Export Inventory table
 * 
 * @param {typedefs.Req} req Express request object
 * @param {typedefs.Res} res Express response object
 */

const getcourses = async (req, res) => {
	try {
		const logs = await courses.findAll({ order: [['updatedAt', 'DESC']] });
		return res.status(200).send({ message: logs });
	} catch (error) {
		logger.error("getCourses", { error });
		return res.status(500).send({ message: "Server Error. Try again." });
	}
}

module.exports = {
    getcourses
}