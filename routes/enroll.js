const router = require("express").Router();
const { postenrollments,getenrollments } = require("../controllers/enroll");


router.get(
    '/',
    getenrollments
);

router.post(
    '/',
    postenrollments
)

module.exports = router;