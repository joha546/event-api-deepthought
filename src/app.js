const express = require("express");
const {connectDB} = require('./db.js');
const dotenv = require('dotenv');
const swaggerUi  = require("swagger-ui-express");
const eventRoutes = require("./routes/event.routes.js");
const { swaggerSpec } = require('./swagger.js');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/v3/app/events', eventRoutes);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
});