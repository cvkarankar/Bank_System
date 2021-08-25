const gateway=require('fast-gateway')
// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
const express = require('express');
const app = express();

const port=9001;

// const options ={
//     definition:{
//         openapi:'3.0.0',
//         info:{
//             title:'Node Js Api Project For Api Gateway',
//             version:'1.0.0'
//         },
//         servers:[
//             {
//                 api:'http://localhost:9001/'
//             }
//         ]
//     },
//     apis:['./Controllers/userControllers']
// }

// const swaggerSpec = swaggerJSDoc(options);
// app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

const server=gateway({
    routes:[
        {
            prefix:'/user',
            target:'http://localhost:7000',
            hooks:{ }
        },
        {
            prefix:'/loan',
            target:'http://localhost:7010',
            hooks:{ }
        }
    ]
})

// server.get('/mytesting',(req,res)=>{
//     res.send('it is gateway.....')
// })

server.start(port).then(server=>{
    console.log('api-gateway is running on 9001')
})



//const port=7000;
module.exports=server;