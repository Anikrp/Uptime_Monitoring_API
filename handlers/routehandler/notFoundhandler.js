/*

    Ttitle : NotFound Handler
    Description: 404 Not Found Handler 
    Author: Anik Roy Pranto
    
*/

//module scaffolding


const handler ={};

handler.notFoundHandler = (requestProperties,callback)=>{
    callback(400,{
        message:'Your requesrted URL was not found',

    });

    //Your code goes here
};

module.exports = handler;

