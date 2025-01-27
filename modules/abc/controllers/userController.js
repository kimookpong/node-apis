const userModel = require("../models/userModel");

exports.Index = async (req, res, next) => {
  try {
    res.json({ res: "test2" });
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userModel.getAll();
    res.json({ dt: users });
  } catch (err) {
    next(err);
  }
};

exports.getFind = async (req, res, next) => {
  try {
    const users = await userModel.getFind(req);
    res.json({ dt: users });
  } catch (err) {
    next(err);
  }
};
