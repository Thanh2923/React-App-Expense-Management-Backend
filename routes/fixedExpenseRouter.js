const express = require("express");
const router = express.Router();
const fixedExpenseController = require("../controllers/fixedExpenseController");

// Tạo mới category
router.post("/", fixedExpenseController.createFixedExpense);

// Lấy danh sách categories
router.get("/", fixedExpenseController.getAllFixedExpenses);

// Xóa category theo ID
router.delete("/:id", fixedExpenseController.deleteFixedExpense);

// Cập nhật category theo ID
router.put("/:id", fixedExpenseController.updateFixedExpense);


module.exports = router;
