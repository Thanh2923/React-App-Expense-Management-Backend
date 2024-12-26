    const mongoose = require('mongoose');

    // Định nghĩa schema cho ExpenseTracking
    const expenseTrackingSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        required: true,
        },
        amountInt: {
        type: Number,
        required: true,
        },
        date: {
        type: String,
        required: true,
        },
        description: {
        type: String,
        required: true,
        },
        category: {
        type: String,
        required: true,
        ref: 'Category',
        },
        email: {
        type: String,
        required: true,
        ref: 'User', // Tham chiếu tới bảng User
        },
    },
    { timestamps: true }
    );

    // Tạo model từ schema
    const ExpenseTracking = mongoose.model('ExpenseTracking', expenseTrackingSchema);

    module.exports = ExpenseTracking;
