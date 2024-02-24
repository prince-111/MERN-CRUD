const User = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

// Create user
exports.createUser = async (req, res) => {
  try {
    const bodyData = req.body;

    // Generate a unique identifier for userId
    const userId = uuidv4();

    // Create a new user with the generated userId
    const user = new User({ ...bodyData, userId });

    // const user = new User(bodyData);

    // Save the user to the database
    const userData = await user.save();
    res.send(userData);
  } catch (error) {
    res.send(error);
  }
};

// Read all users
exports.readAllUsers = async (req, res) => {
  try {
    const userData = await User.find({});
    res.send(userData);
  } catch (error) {
    res.send(error);
  }
};

// Read user by ID
exports.readUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

// Update user
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};
