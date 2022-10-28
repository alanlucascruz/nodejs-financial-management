const Transaction = require("../models/Transaction");

const index = async (req, res) => {
  try {
    const { user_id: userId } = req.params;

    const data = await Transaction.find({ user: userId }).sort(
      "-date_transaction"
    );

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao listar as transações.", error });
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

const findByDate = async (req, res) => {
  try {
    const { user_id, initial_date, final_date } = req.params;

    const data = await Transaction.where("user_id", user_id)
      .where("date_transaction")
      .gte(initial_date)
      .lte(final_date)
      .sort("-date_transaction")
      .exec();

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao buscar as transações.", error });
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
    const { id } = req.params;

    const data = req.body;

    await Transaction.findByIdAndUpdate(id, data);

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar a transação.", error });
  }
};

const destroy = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);

    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: "Erro ao excluir a transação.", error });
  }
};

module.exports = { index, show, findByDate, store, update, destroy };
