const express = require("express");
const userController = require("./controllers/userController");
const router = express.Router();

router.get("/user", userController.userIndex);
router.get("/user/:id", userController.userFind); // or put method

router.post("/user", userController.userIndex);
router.patch("/user/:id", userController.userFind);
router.delete("/user/:id", userController.userFind);


module.exports = router;
