const sprintModel = require("../models/sprintModel");

exports.sprintIndex = async (req, res, next) => {
  try {
    const sprints = await sprintModel.getAll();
    res.json({ dt: sprints });
  } catch (err) {
    next(err);
  }
}

exports.sprintCreate = async (req, res, next) => { 
  try {
    res.json({ dt: req.body });
  } catch (err) {
    next(err);
  }
}
