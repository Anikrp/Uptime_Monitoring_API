/*

    Ttitle : Sample Handler
    Description: Sample Handler 
    Author: Anik Roy Pranto
    
*/

//module scaffolding


const handler ={};

handler.sampleHandler = (requestProperties,callback)=>{
    console.log(requestProperties);
    callback(200,{
        message:'This is a sample url',

    });
    //Your code goes here
};

module.exports = handler;

