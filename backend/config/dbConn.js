const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MERN-CRUD", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log("DB connection successful");
  } catch (error) {
    console.error("DB connection failed:", error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;
