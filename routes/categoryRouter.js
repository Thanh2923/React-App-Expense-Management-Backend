const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Tạo mới category
router.post("/", categoryController.createCategory);

// Lấy danh sách categories
router.get("/", categoryController.getAllCategoryByEmail);

// Xóa category theo ID
router.delete("/:id", categoryController.deleteCategory);

// Cập nhật category theo ID
router.put("/:id", categoryController.updateCategory);

module.exports = router;
