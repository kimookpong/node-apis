const userModel = require("../models/userModel");

exports.userIndex = async (req, res, next) => {
  try {
    const users = await userModel.getAll();
    res.json({ dt: users });
  } catch (err) {
    next(err);
  }
};

exports.userFind = async (req, res, next) => {
  try {
    const users = await userModel.getFind(req);
    res.json({ dt: users });
  } catch (err) {
    next(err);
  }
};


exports.userDetele = async (req, res, next) => {
  try {
    await userModel.delete(req);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

