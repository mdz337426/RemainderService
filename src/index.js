const bodyParser = require('body-parser');
const express = require('express');
const { PORT } = require('./config/serverConfig');
const { senedBasicEmail } = require('./services/email-service');
const cron = require('node-cron');

const app  = express();

const setUpAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT, ()=>{
        console.log("server started at port", PORT);

        cron.schedule('*/10 * * * *', ()=>{
            console.log('running a task every two minutes');
        })

    }); 
}


setUpAndStartServer();