const express = require("express");

const UserController = require("../controller/users");

const router = express.Router();

//create
router.post("/", UserController.createNewUser);

//read
router.get("/", UserController.getAllUsers);

//update
router.patch("/:idUser", UserController.updateUser);

//delete
router.delete("/:idUser", UserController.deleteUser);

module.exports = router;
