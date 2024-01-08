const express = require("express");
const connectDB = require("./config/dbConn");

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", function (req, res) {
    res.send("Hello World");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
