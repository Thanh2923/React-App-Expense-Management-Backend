const expenseTrackingService = require('../services/expenseTrackingService');

 const expenseTrackingController = {
    // Lấy tất cả chi phí
    getAllExpenseTracking: async (req, res) => {
      try {
        // Lấy email, page, và limit từ query params, với giá trị mặc định
        const { email = "thanhnv29203@gmail.com", page, limit } = req.query;
    
        // Kiểm tra nếu không có email
        if (!email) {
          return res.status(400).json({ message: "Email is required" });
        }
    
        // Chuyển đổi page và limit sang số nguyên nếu chúng tồn tại
        const pageNumber = page ? parseInt(page, 10) : undefined;
        const limitNumber = limit ? parseInt(limit, 10) : undefined;
    
        // Gọi service với các tham số
        const expenses = await expenseTrackingService.getAllExpenseTracking(email, pageNumber, limitNumber);
    
        // Trả về phản hồi JSON
        res.status(200).json(expenses);
      } catch (error) {
        console.error("Error fetching expense tracking:", error.message);
        res.status(500).json({ message: "Error fetching expense tracking", error: error.message });
      }
    },
    
  
  // Thêm một chi phí
createExpenseTracking : async (req, res) => {
    try {
      const dataExpense = req.body;
      const data = await expenseTrackingService.createExpenseTracking(dataExpense);  // Gọi service
      res.status(201).json({ message: 'creating expense tracking success',data});
    } catch (error) {
      res.status(500).json({ message: 'Error creating expense tracking', error: error.message });
    }
  },
  
  // Cập nhật một chi phí
   updateExpenseTracking : async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const data = await expenseTrackingService.updateExpenseTracking(id, updatedData);  // Gọi service
  
      if (!data) {
        return res.status(404).json({ message: 'Expense not found' });
      }
  
      res.status(200).json({ message: ' updating expense tracking success',data});
    } catch (error) {
      res.status(500).json({ message: 'Error updating expense tracking', error: error.message });
    }
  },
  
  // Xóa một chi phí
   deleteExpenseTracking : async (req, res) => {
    try {
      const { id } = req.params;
      const data = await expenseTrackingService.deleteExpenseTracking(id);  // Gọi service
  
      if (!data) {
        return res.status(404).json({ message: 'Expense not found' });
      }
  
      res.status(200).json({ message: 'Expense deleted successfully',data });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting expense tracking', error: error.message });
    }
  },
 }

module.exports = expenseTrackingController
