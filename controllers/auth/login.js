const jwt = require('jsonwebtoken')
const users = require("../../models").User;
const { Op } = require("sequelize");
/**
 * Export Inventory table
 * 
 * @param {typedefs.Req} req Express request object
 * @param {typedefs.Res} res Express response object
 */

const login = async (req, res) => {
	try {
		data = await users.findOne({
            where: {
                [Op.and]: [
                    { username: req.body.username },
                    { password: req.body.password },
                ]
            }
        });

		if(data){
            const accessToken = jwt.sign({
                username: data.username,
                email: data.email
            }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "14d"
            });
            return res.status(200).send({message:"success",data:{
                username:data.username,
                email:data.email,
                date:Date.now().toString(),
                id:data.id.toString(),
                token:accessToken.toString()
            }})
        }else{
            return res.status(400).send({ message: "SUser not found." });
        }
	
	} catch (error) {
        console.log(error);
		return res.status(500).send({ message: "Server Error. Try again." });
	}
}

module.exports = {
    login
}