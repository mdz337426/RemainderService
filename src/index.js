const bodyParser = require('body-parser');
const express = require('express');
const { PORT } = require('./config/serverConfig');
const { senedBasicEmail } = require('./services/email-service');

const app  = express();

const setUpAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT, ()=>{
        console.log("server started at port", PORT);

     sendBasicEmail( "zeeshan@admin.com", "mdz31157@gmail.com",'This is a testing email', "Hey, how are you, I no" );
    }); 
}


setUpAndStartServer();