const express = require("express");
const connectDB = require("./config/dbConn");
const userRoutes = require("./routes/userRoutes")

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", function (req, res) {
    res.send("Hello World");
});

connectDB();

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
