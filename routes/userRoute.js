const express = require("express");
const { CreateUser } = require("../controller/userControllar");
const router = express.Router();
router.post("/createUser", CreateUser);
module.exports = router;
