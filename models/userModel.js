const mongoose = require("mongoose");

// Định nghĩa schema cho User
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Tạo model từ schema
const User = mongoose.model("User", userSchema);

module.exports = User;
