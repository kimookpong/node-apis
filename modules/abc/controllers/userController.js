const userModel = require("../models/userModel");

exports.Index = async (req, res, next) => {
  try {
    res.json("test2");
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.getAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};
