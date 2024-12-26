const mongoose = require("mongoose");

// Định nghĩa schema cho Category
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      ref: "User", // Khóa ngoại tham chiếu tới bảng User
    },
  },
  { timestamps: true }
);

// Tạo model từ schema
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
