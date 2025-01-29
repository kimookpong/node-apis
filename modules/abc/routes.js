const express = require("express");
const userController = require("./controllers/userController");

const router = express.Router();

// Routes
router.get("/", userController.userIndex);
router.get("/user", userController.userIndex);
router.get("/user/:id", userController.userFind);
router.delete("/user/:id", userController.userDetele);

module.exports = router;
