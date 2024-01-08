const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConn");
const userRoutes = require("./routes/userRoutes")

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// app.get("/", function (req, res) {
//     res.send("Hello World");
// });

connectDB();

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
