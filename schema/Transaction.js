const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String },
  sold: { type: Boolean, reuired: true },
  dateOfSale: { type: Date, required: true },
});

// Test Schema
// const testTransaction = new mongoose.Schema({
//   transactionId: { type: String, required: true },
//   amount: { type: Number, required: true },
//   productName: { type: String, required: true },
// });

const Transaction = mongoose.model("Transaction", transactionSchema);
// const Transaction = mongoose.model("Transaction", testTransaction);

module.exports = Transaction;
