const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: [true, "Please enter a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: [true, "email already exists"],
  },
  password: {
    type: String,
    minLength: [4, "password must be at least 4 characters"],
    required: [true, "Please enter your password"],
    select: false,
  },
  phoneNumber: {
    type: Number,
    required: [true, "Please enter a valid phone number"],
  },
  role: {
    type: String,
    default: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});
UserSchema.pre("save", async function () {
  if (!this.isModified) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", UserSchema);
