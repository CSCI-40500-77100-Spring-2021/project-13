// REQUIRED DEPENDENCIES
const express = require('express');
const cors = require('cors');

// App + PORT + Database URL
const app = express();
const PORT = process.env.PORT || 4005;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require('./routes/data-routes.js');
app.use(apiRoutes);

// Listen to the server
app.listen(PORT, () => console.log(`Listening...http://localhost:${PORT}`));
