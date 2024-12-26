const mongoose = require("mongoose");

// Định nghĩa schema cho BudgetSettings
const budgetSettingsSchema = new mongoose.Schema(
  {
    category: {
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
    },
  },
  { timestamps: true }
);

// Tạo model từ schema
const BudgetSettings = mongoose.model("BudgetSettings", budgetSettingsSchema);

module.exports = BudgetSettings;
