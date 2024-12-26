const categoryService = require("../services/categoryService");
const authService = require("../services/authService");

const categoryController = {
  // Tạo Category mới
  createCategory: async (req, res) => {
    try {
      const { name, email } = req.body;

      // Kiểm tra xem email có tồn tại trong bảng User không
      const user = await authService.isEmailUser(email)
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const category = await categoryService.createCategory(name,email)

      res.status(201).json({ message: "Category created successfully", category });
    } catch (error) {
      res.status(500).json({ message: "Error creating category", error });
    }
  },

  // Lấy tất cả Categories
  getAllCategoryByEmail: async (req, res) => {
    try {
      const { email="thanhnv29203@gmail.com" } = req.query;
      console.log(email)
      const user = await authService.isEmailUser(email)
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const categories = await categoryService.getAllCategoryByEmail(email) 
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching categories", error });
    }
  },

  // Xóa Category
  deleteCategory: async (req, res) => {
    try {
       const { id } = req.params;
      const category = await categoryService.deleteCategory(id)
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      res.status(200).json({ message: "Category deleted successfully",category });
    } catch (error) {
      res.status(500).json({ message: "Error deleting category", error });
    }
  },

  // Cập nhật Category
  updateCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body ;
      const updatedCategory = await categoryService.updateCategory(id,name)

      if (!updatedCategory) {
        return res.status(404).json({ message: "Category not found" });
      }

      res.status(200).json({ message: "Category updated successfully", updatedCategory });
    } catch (error) {
      res.status(500).json({ message: "Error updating category", error });
    }
  },
};

module.exports = categoryController;
