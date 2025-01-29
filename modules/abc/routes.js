const express = require("express");
const userController = require("./controllers/userController");

const router = express.Router();

// Routes
router.get("/", userController.Index);
router.get("/user", userController.getAllUsers);
router.get("/find/:id", userController.getFind);

module.exports = router;
