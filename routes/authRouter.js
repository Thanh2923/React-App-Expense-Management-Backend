const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/register", authController.register);

// Route đăng nhập
router.post("/login", authController.login);

// Route bảo vệ (chỉ cho phép người dùng có token hợp lệ mới truy cập)
router.get("/protected", authController.protectedRoute);

module.exports = router;
