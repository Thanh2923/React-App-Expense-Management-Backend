const fixedExpenseService = require('../services/fixedExpenseService');
const fixedExpenseController  = {
    getAllFixedExpenses : async (req, res) => {
        try {
            const {email="thanhnv29203@gmail.com" } = req.query;
 
          const data = await fixedExpenseService.getAllFixedExpenses(email);  // Gọi service
          res.status(200).json(data);
        } catch (error) {
          res.status(500).json({ message: 'Error fetching fixed expenses', error: error.message });
        }
      },
      

      // Thêm một FixedExpense
    createFixedExpense : async (req, res) => {
        try {
          const { name, amount, email } = req.body;
          const data = await fixedExpenseService.createFixedExpense({ name, amount, email });  // Gọi service
          res.status(201).json({message: 'Create fixed costs successfully',data});
        } catch (error) {
          res.status(500).json({ message: 'Error creating fixed expense', error: error.message });
        }
      },
      
      // Cập nhật một FixedExpense
     updateFixedExpense : async (req, res) => {
        try {
          const { id } = req.params;
          const updatedData = req.body;
          const data = await fixedExpenseService.updateFixedExpense(id, updatedData);  // Gọi service
      
          if (!data) {
            return res.status(404).json({ message: 'Fixed expense not found' });
          }
      
          res.status(200).json({ message: 'Updating fixed expense successfully', data });
        } catch (error) {
          res.status(500).json({ message: 'Error updating fixed expense', error: error.message });
        }
      },
      // Xóa một FixedExpense
     deleteFixedExpense : async (req, res) => {
        try {
          const { id } = req.params;
          const data = await fixedExpenseService.deleteFixedExpense(id);  // Gọi service
      
          if (!data) {
            return res.status(404).json({ message: 'Fixed expense not found' });
          }
      
          res.status(200).json({ message: 'Fixed expense deleted successfully' ,data});
        } catch (error) {
          res.status(500).json({ message: 'Error deleting fixed expense', error: error.message });
        }
      },
}


module.exports = fixedExpenseController