const productBacklogModel = require("../models/productBacklogModel");

exports.productBacklogIndex = async (req, res, next) => {
  try {
    const productBacklog = await productBacklogModel.getAll();
    res.json({ dt: productBacklog });
  } catch (err) {
    next(err);
  }
}

exports.productBacklogCreate = async (req, res, next) => {
  try {
    const data = req.body;
    const productBacklog = await productBacklogModel.create(data);
    res.json({ dt: productBacklog });
  } catch (err) {
    next(err);
  }
}
