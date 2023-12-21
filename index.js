// const dotenv = require("dotenv").config({ path: "./config/.env" });
const connectDatabase = require("./config/db");
const app = require("./app");

process.on("uncaughtException", (e) => {
  console.log("shutting down server due to erroe :", e.message);
  process.exit(1);
});

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/.env" });
}
//connect database
connectDatabase();

//connect server
const server = app.listen(process.env.PORT, () =>
  console.log("server connected ")
);

// run when server not connected
process.on("unhandledRejection", (error) => {
  console.log("shutting down server due to error:", error.message);
  server.close(() => {
    process.exit(1); // ram ko khali karna
  });
});
