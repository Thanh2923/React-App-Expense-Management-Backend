const Category = require("../models/categoryModel");
const User = require("../models/userModel");

const categoryService = {
  // Tạo mới Category
  createCategory: async (name, email) => {
    // Kiểm tra xem email có tồn tại trong bảng User không
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    // Tạo category mới
    const category = new Category({ name, email });
    return await category.save();
  },

  // Lấy tất cả Categories
  getAllCategoryByEmail: async (email) => {
    return await Category.find({ email });  // Trả về một danh mục duy nhất
},

  // Xóa Category theo ID
  deleteCategory: async (id) => {
    return await Category.findByIdAndDelete(id);
   
  },

  // Cập nhật Category
  updateCategory: async (id, name) => {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name:name },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      throw new Error("Category not found");
    }

    return updatedCategory;
  },
};

module.exports = categoryService;
