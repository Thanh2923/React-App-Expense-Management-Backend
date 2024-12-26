const express = require("express");
const router = express.Router();
const expenseTrackingRouter = require("../controllers/expenseTrackingController");

// Tạo mới category
router.post("/", expenseTrackingRouter.createExpenseTracking);

// Lấy danh sách categories
router.get("/", expenseTrackingRouter.getAllExpenseTracking);

// Xóa category theo ID
router.delete("/:id", expenseTrackingRouter.deleteExpenseTracking);

// Cập nhật category theo ID
router.put("/:id", expenseTrackingRouter.updateExpenseTracking);

module.exports = router;
