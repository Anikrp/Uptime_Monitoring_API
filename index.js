/*

    Ttitle : Uptime Monitoring Application
    Description: A RESTFul API to monitor up or down time of user defined links 
    Author: Anik Roy Pranto
    
*/

//depedencies
const http = require('http');

const {handleReqRes} = require('./helpers/handleReqRes');


//app object - module scaffolding

const app = {};

//configuration

app.config= {
    port : 3000
};


//create server 

app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`Server is running on port ${app.config.port}`);
    });


};


//handel  Request Response

app.handleReqRes = handleReqRes;

//start server
app.createServer();


