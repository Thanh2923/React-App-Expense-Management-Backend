const FixedExpense = require('../models/fixedExpenseModel');
const ExpenseTracking = require('../models/expenseTrackingModel');
const  BudgetSettings = require('../models/budgetSettingsModel');

const totalService = {
    getTotalAmountByEmail: async (email) => {
        try {
          const result = await FixedExpense.aggregate([
            { $match: { email } }, // Lọc theo email
            { $group: { _id: "$email", totalAmount: { $sum: "$amount" } } } // Tính tổng amount
          ]);

          const result2 = await ExpenseTracking.aggregate([
            { $match: { email } }, // Lọc theo email
            { $group: { _id: "$email", totalAmount: { $sum: "$amountInt" } } } // Tính tổng amount
          ]);

          const result3 = await BudgetSettings.aggregate([
            { $match: { email } }, // Lọc theo email
            { $group: { _id: "$email", totalAmount: { $sum: "$amount" } } } // Tính tổng amount
          ]);
          
          if (result.length > 0 && result2.length > 0 && result3.length > 0) {
            return {
                totalFixedExpense:result[0].totalAmount,
                totalExpenseTracking:result2[0].totalAmount,
                totalBudgetSettings:result3[0].totalAmount,
                total:result[0].totalAmount + result3[0].totalAmount

            } 
          } else {
            return 0; // Nếu không có dữ liệu, trả về 0
          }
        } catch (error) {
          throw new Error('Error calculating total amount by email');
        }
      },
}

module.exports = totalService