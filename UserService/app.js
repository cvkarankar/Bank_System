const express = require('express');
//require('dotenv').config();
//const {Router}=require('express');
require('./database/connection');
//const bodyparser = require('body-parser');
const userControllers = require('./Controllers/userControllers');
//const yaml = require('yamljs');
const swagger = require('./Controllers/swagger');
const cookieParser = require('cookie-parser');
const debug = require('winston');
const app = express();
//const router = Router();

  
// app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));
const port=7000;



// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

//port-setting
app.listen(port, debug.info(`user service is running on port ${port}...`));

// routes
app.use(userControllers);
app.use(swagger);

module.exports=app;