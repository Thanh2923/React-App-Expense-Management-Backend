const express = require("express");
const router = express.Router();
const totalController = require("../controllers/totalController");


// Lấy danh sách categories
router.get("/", totalController.getTotalAmountByEmail);



module.exports = router;
