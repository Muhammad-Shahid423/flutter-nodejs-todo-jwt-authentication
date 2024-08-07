const router = require("express").Router();
const UserController = require("../contoller/user.controller");
// const { UserService } = require("../services/user.services");

router.post("/createUser", UserController.createUser);
router.post("/login", UserController.login);

module.exports = router;