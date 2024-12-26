const ExpenseTracking = require('../models/expenseTrackingModel');

const expenseTrackingServices = {
  getAllExpenseTracking: async (email, page, limit) => {
    try {
      // Nếu không có page và limit, trả về toàn bộ dữ liệu
      if (!page || !limit) {
        const allExpenses = await ExpenseTracking.find({ email }).exec();
        return {
          data: allExpenses, // Dữ liệu đầy đủ
          currentPage: null, // Không có khái niệm trang
          totalPages: 1, // Chỉ có 1 "trang" chứa tất cả
          totalItems: allExpenses.length, // Tổng số tài liệu
        };
      }
  
      // Nếu có page và limit, áp dụng phân trang
      const skip = (page - 1) * limit; // Tính số lượng tài liệu cần bỏ qua
      const expenses = await ExpenseTracking.find({ email })
        .skip(skip) // Bỏ qua `skip` tài liệu
        .limit(limit) // Giới hạn số lượng tài liệu trả về
        .exec(); // Thực thi truy vấn
  
      const totalItems = await ExpenseTracking.countDocuments({ email }); // Tổng số tài liệu
  
      return {
        data: expenses, // Dữ liệu phân trang
        currentPage: page, // Trang hiện tại
        totalPages: Math.ceil(totalItems / limit), // Tổng số trang
        totalItems, // Tổng số tài liệu
      };
    } catch (error) {
      throw new Error("Error fetching expense tracking");
    }
  },
  
  
      // Thêm một chi phí mới
       createExpenseTracking : async (data) => {
        try {
            console.log(data)
            const NewExpenseTracking = new ExpenseTracking(data);
            return await NewExpenseTracking.save();
        } catch (error) {
          throw new Error('Error creating expense tracking');
        }
      },
      // Cập nhật một chi phí
       updateExpenseTracking : async (id, data) => {
        try {
          return await ExpenseTracking.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
          throw new Error('Error updating expense tracking');
        }
      },
      // Xóa một chi phí
       deleteExpenseTracking : async (id) => {
        try {
          return await ExpenseTracking.findByIdAndDelete(id);
        } catch (error) {
          throw new Error('Error deleting expense tracking');
        }
      }
}
module.exports = expenseTrackingServices