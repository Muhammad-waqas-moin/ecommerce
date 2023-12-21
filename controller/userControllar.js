const User = require("../model/userModel");
const catchAysnError = require("../middleware/catchAsynError");
exports.CreateUser = catchAysnError(async (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  const userMail = await User.findOne({ email });
  if (userMail) {
    return next(new ErrorHandler("User Already Exists", 400));
  }

  const user = await User.create({
    name: "waqas",
    email: "engineerwaqas189@gmail.com",
    password: "21344",
    phoneNumber: 3177046786,
    role: "user",
  });
  res.status(201).json({
    status: "success",
    data: {
      data: user,
    },
  });
});
