const totalService = require('../services/totalService')



const totalController = {
    getTotalAmountByEmail : async (req, res) => {
        try {
            const {email="thanhnv29203@gmail.com"} = req.query;
          const data = await totalService.getTotalAmountByEmail(email);  // Gọi service
          res.status(200).json(data);
        } catch (error) {
          res.status(500).json({ message: 'Error fetching fixed expenses', error: error.message });
        }
      },
      
}

module.exports = totalController