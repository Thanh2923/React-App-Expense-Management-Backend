const express = require("express");
const router = express.Router();
const auth = require('./authRouter');
const category = require('./categoryRouter');
const fixedExpense = require('./fixedExpenseRouter');
const expenseTracking = require('./expenseTrackingRouter');
const budgetSettings = require('./budgetSettingsRouter');
const total = require('./totalRouter')
router.use('/auth', auth);
router.use('/category', category);
router.use('/fixedExpense', fixedExpense);
router.use('/expenseTracking', expenseTracking);
router.use('/budgetSettings', budgetSettings);
router.use('/budgetSettings', budgetSettings);
router.use('/total', total);

module.exports = router;
