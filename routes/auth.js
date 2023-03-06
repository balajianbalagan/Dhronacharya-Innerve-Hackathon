const router = require("express").Router();
const { login } = require("../controllers/auth/login");
const { register } = require("../controllers/auth/register");
const { validate } = require("../validators");
const { registerValidator, loginValidator } = require("../validators/authValidator");


router.post(
	'/login',
	loginValidator,
	validate,
	login
);

router.post(
	"/add-user",
	registerValidator,
	validate,
	register
);

module.exports = router;