 const budgetSettingsService = require('../services/budgetSettingsService')

  const budgetSettingsController = {
    // Lấy tất cả budget settings
 getAllBudgetSettings :  async (req, res) => {
    try {
      const { email="thanhnv29203@gmail.com" } = req.query;
      const budgetSettings = await budgetSettingsService.getAllBudgetSettings(email);
      res.status(200).json(budgetSettings);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching budget settings', error: error.message });
    }
  },
  
  // Thêm một budget setting
   createBudgetSetting  : async (req, res) => {
    try {
      const { category, amount, email } = req.body;
      const data = await budgetSettingsService.createBudgetSetting({ category, amount, email });
      res.status(201).json({ message: ' creating budget setting success',data});
    } catch (error) {
      res.status(500).json({ message: 'Error creating budget setting', error: error.message });
    }
  },
  
  // Cập nhật một budget setting
   updateBudgetSetting  : async (req, res) => {
    try {
      const { id } = req.params;
      const { category, amount, email } = req.body;
      const data = await budgetSettingsService.updateBudgetSetting(id, { category, amount, email });
      res.status(200).json({ message: 'Error updating budget setting', data});
    } catch (error) {
      res.status(500).json({ message: 'Error updating budget setting', error: error.message });
    }
  },
  
  // Xóa một budget setting
   deleteBudgetSetting  : async (req, res) => {
    try {
      const { id } = req.params;
      const data = await budgetSettingsService.deleteBudgetSetting(id);
      res.status(200).json({ message: 'Budget setting deleted',data });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting budget setting', error: error.message });
    }
  },
  
  }

  module.exports = budgetSettingsController