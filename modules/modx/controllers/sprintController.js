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
    const data = req.body;
    const result = await sprintModel.create(data);
    res.json({ dt: result });
  } catch (err) {
    next(err);
  }
}

exports.sprintFind = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await sprintModel.find(id);
    res.json({ dt: result });
  } catch (err) {
    next(err);
  }
}

exports.sprintUpdate = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await sprintModel.update(id, data);
    res.json({ dt: result });
  } catch (err) {
    next(err);
  }
}


exports.sprintDelete = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await sprintModel.remove(id);
    res.json({ dt: result });
  } catch (err) {
    next(err);
  }
}
