const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/user");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  const { name, email, password } = req.body;
  let existsingUser;
  try {
    existsingUser = await User.findOne({ email });
  } catch (err) {
    const error = HttpError("Signing up failed, Please try agian later.", 500);
    return next(error);
  }
  if (existsingUser) {
    const error = new HttpError(
      "User exists already, please login instead.",
      422
    );
    return next(error);
  }
  const createdUser = new User({
    name,
    email,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lonelyplanet.com%2Fisrael-and-the-palestinian-territories%2Fjerusalem%2Fattractions%2Fwestern-wall%2Fa%2Fpoi-sig%2F1443221%2F361047&psig=AOvVaw2glBHwx0KqtdwpF23afVLu&ust=1609254884087000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjOut_78O0CFQAAAAAdAAAAABAD",
    password,
    places: [],
  });
  try {
    await createdPlace.save();
  } catch (err) {
    const error = new HttpError("Signing up failed,please try agian.", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existsingUser;
  try {
    existsingUser = await User.findOne({ email });
  } catch (err) {
    const error = HttpError("Logging in failed, Please try agian later.", 500);
    return next(error);
  }

  if (!existsingUser || existsingUser.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in",
      401
    );
    return next(error);
  }

  res.json({ message: "Logged in!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
