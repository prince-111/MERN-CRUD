const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Create user
router.post('/createuser', userController.createUser);

// Read all users
router.get("/readalluser", userController.readAllUsers);


module.exports = router;