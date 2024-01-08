const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Create user
router.post("/createuser", userController.createUser);

// Read all users
router.get("/readalluser", userController.readAllUsers);

// Read user by ID
router.get("/read/:id", userController.readUserById);

// Update user
router.put("/updateuser/:id", userController.updateUser);

// Delete user
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
