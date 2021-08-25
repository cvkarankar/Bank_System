const express = require('express');
require('./database/connection');
const loanControllers = require('./controllers/loanControllers');
const cookieParser = require('cookie-parser');
const app = express();
const swagger = require('./controllers/swagger');
const debug = require('winston');

// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
const port=7010;


// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

//port-setting
app.listen(port, debug.info(`loan service is running on port ${port}...`));

// routes
app.use(loanControllers);
app.use(swagger);

module.exports=app;



//const port=7000;

// const options ={

//     definition:{
//         openapi:'3.0.0',
//         info:{
//             title:'Node Js Api Project For LoanService',
//             version:'1.0.0'
//         },
//         servers:[
//             {
//                 url:'http://localhost:7010/'
//             }
//         ]
//     },
//     apis:['./controllers/loanControllers']
// }

// const swaggerSpec = swaggerJSDoc(options);
// app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));