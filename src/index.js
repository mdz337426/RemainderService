const bodyParser = require('body-parser');
const express = require('express');
const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');
const cron = require('node-cron');
const sender = require('./config/emailConfig');
const setupJobs = require('./utils/job');
const ticketController = require('./controllers/ticket-controller')
const emailSerice = require('./services/email-service')
const app  = express();

const setUpAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.post('/api/v1/tickets', ticketController.create); 
    app.listen(PORT, ()=>{
        console.log("server started at port", PORT);
    setupJobs();  
    }); 
}


setUpAndStartServer();