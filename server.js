const express = require('express');
const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();
const port = process.env.PORT || 4000;
const { errorHandler } = require('../mern_crud/middleware/errorMiddleware')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', require('./routes/userRoutes'));
// app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
})

// const express = require('express');
// const bodyParser = require('body-parser'); // Correct import

// const dotenv = require('dotenv').config();
// const port = process.env.PORT || 4000;

// const app = express();
// app.use(bodyParser.json()); // Correct usage
// app.use(bodyParser.urlencoded({ extended: true })); // Correct usage

// app.use('/api/users', require('./routes/userRoutes'));

// app.listen(port, () => {
//     console.log(`Server Started on port ${port}`);
// });