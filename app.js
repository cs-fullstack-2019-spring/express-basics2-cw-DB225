const express = require('express');
const app = express();
var index = require('./index');

app.use('/member', index);

//define the home page route
app.get('/', (request, response) =>{
   response.send("Welcome to the member page");
});

app.listen(8002, ()=>{
   console.log("There we go")
});