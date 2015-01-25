/**
 * Created by haranath.gorantla on 12/16/2014.
 */

//node debug node-inspector --hidden='["node_modules"]'
    // The run the node --debug filename.js
var express = require('express');
var app = express();



// handling 404 errors
app.use(function(err, req, res, next) {
    console.log("error status---->>>",err.status)
    if(err.status !== 404) {
      next();
    }
    res.send("Not a valid request");
});

app.get('/', function (req, res) {
    res.send('Error Handling working fine');
});

app.get('/login', function (req, res) {
    for(var i=0 ; i <=10 ; i++){
        console.log(i)
        if(i==10){
            res.send('login page');
        }
    }
});

app.get('/logout', function (req, res) {
    res.send('logout page');
});
app.listen(8000);