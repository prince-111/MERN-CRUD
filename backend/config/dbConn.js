const mongoose = require("mongoose");

const connectDB = async() => {
  try {
   await mongoose.connect("mongodb://localhost:27017/MERN-CRUD");
    console.log("DB Connection Successfully");
  } catch {
    console.log("DB is connection failed");
  }
};

module.exports = connectDB;
