/*

    Ttitle : Handel Request and Response
    Description: Handelling Request and Response 
    Author: Anik Roy Pranto
    
*/

//dependicies 
const {StringDecoder} = require('string_decoder'); 
const url = require('url');
//module scaffolding

const handler = {};

handler.handleReqRes =  (req,res) =>{

    //reqhandelling 
    //get the url and parse it
    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname;
    const trimmedpath= path.replace(/\/$/,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const decoder = new StringDecoder('utf-8');

    let realData = '';

    req.on('data',(buffer)=>{
        realData += decoder.write(buffer);


    });
    req.on('end',()=>{
        realData += decoder.end();
        console.log(realData);
        res.end("Hello Wordl Hi this is anik hi bro");
    });


  
    

};

module.exports = handler;