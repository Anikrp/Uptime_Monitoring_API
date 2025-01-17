/*

    Ttitle : Handel Request and Response
    Description: Handelling Request and Response 
    Author: Anik Roy Pranto
    
*/

//dependicies 

const url = require('url');
const {StringDecoder} = require('string_decoder'); 
const routes = require('../route');

const {notFoundHandler} = require('../handlers/routehandler/notFoundhandler');


//module scaffolding

const handler = {};

handler.handleReqRes =  (req,res) =>{

    //reqhandelling 
    //get the url and parse it
    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname;
    const trimmedpath= path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {

        parsedUrl,
        path,
        trimmedpath,
        method,
        queryStringObject,
        headersObject,

    };


    const decoder = new StringDecoder('utf-8');
    let realData = '';


    const chosenHandler = routes[trimmedpath] ? routes[trimmedpath]: notFoundHandler;


   

    req.on('data',(buffer)=>{
        realData += decoder.write(buffer);
        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof(statusCode) === 'number' ? statusCode :500;
    
            payload = typeof(payload) === 'object' ? payload: {};
    
            const payloadString = JSON.stringify(payload);
    
            //finally return the response
    
            res.writeHead(statusCode);
            res.end(payloadString);
        });


    });
    req.on('end',()=>{
        realData += decoder.end();
        console.log(realData);
        res.end("Hello Wordl Hi this is anik hi bro");
    });


  
    

};

module.exports = handler;