const User = require("./../model/userModel");
const catchAsync = require("./../utils/catchAsync");
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN, // set to 90d for 90 days
  });
};

const createSendToken = (user, statusCode, res) => {
  let token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };

  const user = await User.create(userData);

  createSendToken(user, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  //1) Get email and password from request body
  const { email, password } = req.body;
  //2) Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Invalid email or password", 404));
  }
  //3) Check if user exists and password is correct
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }
  //4) If everything ok, send token to client
  createSendToken(user, 200, res);
});
