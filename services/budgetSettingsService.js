const  BudgetSettings = require('../models/budgetSettingsModel');

 const budgetSettingsServices = {
    // Lấy tất cả budget settings
 getAllBudgetSettings : async (email) => {
    try {
      return await BudgetSettings.find({email});  // Truy vấn tất cả BudgetSettings
    } catch (error) {
      throw new Error('Error fetching budget settings');
    }
  },
  
  // Thêm một budget setting
   createBudgetSetting : async (data) => {
    try {
      const newBudgetSetting = new BudgetSettings(data);
      await newBudgetSetting.save();
      return newBudgetSetting;
    } catch (error) {
      throw new Error('Error creating budget setting');
    }
  },
  
  // Cập nhật một budget setting
   updateBudgetSetting : async (id, data) => {
    try {
      return await BudgetSettings.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw new Error('Error updating budget setting');
    }
  },
  
  // Xóa một budget setting
   deleteBudgetSetting : async (id) => {
    try {
      return await BudgetSettings.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Error deleting budget setting');
    }
  },
  
 }

 module.exports = budgetSettingsServices