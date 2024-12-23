const bodyParser = require('body-parser');
const express = require('express');
const { PORT, REMAINDER_BINDING_KEY } = require('./config/serverConfig');
const setupJobs = require('./utils/job');
const ticketController = require('./controllers/ticket-controller');
const emailService = require('./services/email-service');
const app  = express();
const {createChannel, subscribeMessage} = require('./utils/messageQueue')
const setUpAndStartServer = async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.post('/api/v1/tickets', ticketController.create); 
    
    const channel = await createChannel();

    await subscribeMessage(channel, emailService, REMAINDER_BINDING_KEY);

    app.listen(PORT, ()=>{
        console.log("server started at port", PORT);
        setupJobs();
    }); 
}


setUpAndStartServer();