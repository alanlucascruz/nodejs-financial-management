const Category = require("../models/Category");

const index = async (req, res) => {
  try {
    const { user_id: userId, filter } = req.params;

    const data = await Category.find({
      user: userId,
      name: new RegExp(filter, "i"),
    }).sort("name");

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao listar as categorias.", error });
  }
};

const show = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ message: "Erro ao", error });
  }
};

const store = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ message: "Erro ao", error });
  }
};

const update = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ message: "Erro ao", error });
  }
};

const destroy = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ message: "Erro ao", error });
  }
};

module.exports = { index, show, store, update, destroy };
