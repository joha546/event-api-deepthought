const express = require("express");
const {connectDB} = require('./db.js');
const dotenv = require('dotenv');
const eventRoutes = require("./routes/event.routes.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/v3/app/events', eventRoutes);

connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
});