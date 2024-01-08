const express = require("express");
const app = express();
/* The line `const cors = require("cors");` is importing the `cors` module in JavaScript. */
const cors = require("cors");
const connectDB = require("./config/dbConn");
const userRoutes = require("./routes/userRoutes");

const PORT = 8000;
app.use(cors());
app.use(express.json());

connectDB();

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`server ise running on ...${PORT}`);
});
