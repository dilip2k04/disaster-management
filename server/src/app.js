const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const error = require('./middleware/error.middleware');

const app = express();

/* ✅ ONLY THIS — nothing else */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://disaster-management-1-gwmm.onrender.com"
  ],
  credentials: true
}));


app.use(express.json());

app.use('/api', routes);

app.use(error);

module.exports = app;
