const express = require("express");
const {connectDB} = require('./db.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));

connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
});