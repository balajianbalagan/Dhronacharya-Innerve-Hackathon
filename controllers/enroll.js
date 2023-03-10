const jwt = require('jsonwebtoken')
const { Op } = require("sequelize");
const courses = require('../models/courses');
const enrollments = require('../models').Enrollments;
/**
 * Export Inventory table
 * 
 * @param {typedefs.Req} req Express request object
 * @param {typedefs.Res} res Express response object
 */

const getenrollments = async (req, res) => {
	try {
        const authHeader = req.headers["access-token"];
        const token = authHeader;

		const enrolled = await courses.findAll({ where: {
            [Op.and]: [
                { cid: req.body.cid },
                { stid: req.body.uid },
            ]
        } });

        if(enrolled){
		return res.status(200).send({ message: "Course enrolled!" });
        }else{
            return res.status(403).send({message: "Course not enrolled!"});
        }
	} catch (error) {
		logger.error("getCourses", { error });
		return res.status(500).send({ message: "Server Error. Try again." });
	}
}

const postenrollments = async (req, res) => {
	try {
    const authHeader = req.headers["access-token"];
    const token = authHeader;

const enrolled = await courses.findAll({ where: {
        [Op.and]: [
            { cid: req.body.cid },
            { stid: req.body.uid },
        ]
    } });
    try{
      if(enrolled){
        return res.status(403).send({ message: "Course alread enrolled!" });
            }else{
              await enrollments.create({
                cid: req.body.cid,
            cname: req.body.cname,
            stid: req.body.stid,
            stname: req.body.stname,
            score: 0
            })
                return res.status(200).send({message: "enrolled successfully!"});
            }
    }catch(err){
      return res.status(403).send({ message: "Error enrolling!" });
    }
    


} catch (error) {
logger.error("getCourses", { error });
return res.status(500).send({ message: "Server Error. Try again." });
}
}

module.exports = {
    getenrollments,
    postenrollments
}