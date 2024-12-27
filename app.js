require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const index = require('./routes/index');

const app = express();
app.use(express.json());
const PORT_FE = process.env.PORT_FE;
app.use(cors({ origin: `http://localhost:${PORT_FE}` }));
app.use(morgan('dev'));
// Middleware

// API Routes
app.use('/api', index);
// Connect to MongoDB
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log('Error connecting to MongoDB:', err));
