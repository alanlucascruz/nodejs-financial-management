const mongoose = require("mongoose");

const types = mongoose.Schema.Types;

const Transaction = new mongoose.Schema({
  date_transaction: {
    type: Date,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  type_transaction: {
    type: String,
    required: true,
  },
  category: {
    type: types.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Category", Category);
