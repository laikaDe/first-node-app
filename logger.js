//Remote login service 
var url = 'http://mylogger.io/app';

function log(message) {
    //Send an Http Request 
    console.log(message);
}

//This allows other modules to access the values of the variable and function
module.exports.log = log;


//The external name can be changed here 
//BEFORE
// module.exports.url = url;
//AFTER
// module.exports.endPoint = log;
//Implementation detail is something like the url that doesn't need to be 
//available to other modules 