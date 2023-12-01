const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const db = require("./models");

const dotenv = require('dotenv').config();
const port = process.env.PORT || 4000;
const { errorHandler } = require('../mern_crud/middleware/errorMiddleware')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', require('./routes/userRoutes'));
// app.use(errorHandler);

db.sequelize.sync().then((req) => {
    app.listen(port, () => {
        console.log(`Server Started on port ${port}`);
    })
});
