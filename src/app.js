const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings 
app.set('port', 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});