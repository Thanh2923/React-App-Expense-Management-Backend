const express = require("express");
const router = express.Router();
const budgetSettings = require("../controllers/budgetSettingsController");

// Tạo mới category
router.post("/", budgetSettings.createBudgetSetting);

// Lấy danh sách categories
router.get("/", budgetSettings.getAllBudgetSettings);

// Xóa category theo ID
router.delete("/:id", budgetSettings.deleteBudgetSetting);

// Cập nhật category theo ID
router.put("/:id", budgetSettings.updateBudgetSetting);

module.exports = router;
