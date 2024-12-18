const express = require('express');

const app  = express();

const setUpAndStartServer = ()=>{
    app.listen(3000, ()=>{
        console.log("server started at port", 3000 );
    })
}


setUpAndStartServer();