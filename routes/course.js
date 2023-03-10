const router = require("express").Router();
const { getcourses } = require("../controllers/course");


router.get(
    '/',
    getcourses
);

module.exports = router;