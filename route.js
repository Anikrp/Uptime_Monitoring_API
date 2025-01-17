/*

    Ttitle : Routes
    Description: Application routes 
    Author: Anik Roy Pranto
    
*/
//dependencies

const {sampleHandler} = require('./handlers/routehandler/sampleHandler');
const routes = {
    sample: sampleHandler, 
};

module.exports = routes;