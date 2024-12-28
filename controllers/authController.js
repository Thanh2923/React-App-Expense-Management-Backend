const authService = require("../services/authService");

const authController = {
    register : async (req, res) => {
        const {userName, email, password } = req.body;
        
        try {
          const finalPassword = password || ''; 
          const newUser = await authService.register(userName,email, finalPassword);
          res.status(200).json({ message: 'Đăng ký thành công', user: newUser });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      },
  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    try {
      const { user,token } = await authService.login(email, password);
      return res.status(200).json({ user,token });
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  },

  // Route bảo vệ cần xác thực người dùng qua JWT
  protectedRoute: (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token is required" });
    }

    try {
      const decoded = authService.verifyToken(token);
      return res.status(200).json({ message: "Access granted", user: decoded });
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  },
};

module.exports = authController;
