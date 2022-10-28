const Transaction = require("../models/Transaction");

const index = async (req, res) => {
  try {
    const { user_id: userId, filter } = req.params;

    const data = await Transaction.find({
      user: userId,
      // name: new RegExp(filter, "i"),
    }).sort("-date_transaction");

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao listar as categorias.", error });
  }
};

const show = async (req, res) => {
  try {
    const data = await Transaction.findById(req.params.id);

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao pesquisar a transação.", error });
  }
};

const store = async (req, res) => {
  try {
    const data = await Transaction.create(req.body);

    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao cadastrar a transação.", error });
  }
};

const update = async (req, res) => {
  try {
    // const { id } = req.params;
    // const data = req.body;
    // await Category.findByIdAndUpdate(id, data);
    // res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar a transação.", error });
  }
};

const destroy = async (req, res) => {
  try {
    // await Category.findByIdAndDelete(req.params.id);
    // res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: "Erro ao excluir a transação.", error });
  }
};

module.exports = { index, show, store, update, destroy };
