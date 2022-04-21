const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static('/src'));

// default Heroku PORT
app.listen(process.env.PORT || 3000);