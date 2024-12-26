const mongoose = require('mongoose');

// Định nghĩa schema cho FixedExpense
const fixedExpenseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      ref: 'User', // Tham chiếu tới bảng User
    },
  },
  { timestamps: true }
);

// Tạo model từ schema
const FixedExpense = mongoose.model('FixedExpense', fixedExpenseSchema);

module.exports = FixedExpense;
