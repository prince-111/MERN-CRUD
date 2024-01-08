const mongoose = require("mongoose");

const connectDB = async() => {
  try {
   await mongoose.connect("mongodb://127.0.0.1:27017/MERN-CRUD");
    console.log("DB Connection Successfully");
  } catch {
    console.log("DB is connection failed");
  }
};

module.exports = connectDB;
