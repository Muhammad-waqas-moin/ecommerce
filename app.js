const express = require("express");
const app = express();

//USer Routes
const user = require("./routes/userRoute");
app.use("/api/v1", user);
module.exports = app;
