const FixedExpense = require('../models/fixedExpenseModel');

const  fixedExpenseServices = {
// Lấy tất cả FixedExpenses
 getAllFixedExpenses : async (email) => {
    try {
      return await FixedExpense.find({email});  // Truy vấn tất cả FixedExpense
    } catch (error) {
      throw new Error('Error fetching fixed expenses');
    }
  },
  
  // Thêm một FixedExpense
 createFixedExpense : async (data) => {
    try {
      const newFixedExpense = new FixedExpense(data);
      await newFixedExpense.save();
      return newFixedExpense;
    } catch (error) {
      throw new Error('Error creating fixed expense');
    }
  },
  
  // Cập nhật một FixedExpense
   updateFixedExpense : async (id, data) => {
    try {
      return await FixedExpense.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error('Error updating fixed expense');
    }
  },
  
  // Xóa một FixedExpense
  deleteFixedExpense : async (id) => {
    try {
      return await FixedExpense.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Error deleting fixed expense');
    }
  },

  
}

module.exports = fixedExpenseServices
