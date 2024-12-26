const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

const authService = {

    register : async (userName,email, password) => {
        try {
          // Kiểm tra xem người dùng đã tồn tại chưa
          const userExists = await User.findOne({ email });
          if (userExists) {
            throw new Error('Email đã tồn tại');
          }
      
          // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
          const hashedPassword = await bcrypt.hash(password, 10);
      
          // Tạo người dùng mới
          const newUser = new User({
            userName,
            email,
            password: hashedPassword
          });
      
          // Lưu người dùng vào cơ sở dữ liệu
          await newUser.save();
      
          // Trả về người dùng đã tạo (không trả mật khẩu)
          return newUser;
        } catch (error) {
          throw new Error(error.message);
        }
    },
  // Đăng nhập
  login: async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid email or password");
    }



    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    // Tạo JWT token
    const token = jwt.sign({ id: user._id, email: user.email , userName: user.userName }, SECRET_KEY, {
      expiresIn: "1h",
    });

    return {user, token };
  },

  isEmailUser : async (email) => {
    return await User.findOne({ email });

  },

  // Xác minh token
  verifyToken: (token) => {
    try {
      return jwt.verify(token, SECRET_KEY);
    } catch (err) {
      throw new Error("Invalid or expired token");
    }
  },
};

module.exports = authService;
