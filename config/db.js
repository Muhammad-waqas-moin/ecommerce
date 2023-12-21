const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.BD_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected"))
    .catch(() => console.log("error database not connected"));
};
module.exports = connectDatabase;
