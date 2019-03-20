const express = require('express');
const router = express.Router();
var memberModule = require('./memberModule');
var payments = require('./payments');

router.get('/signin', (request, response) =>{
    response.send(memberModule.signin());
});

//This operation return the name and the number to call
router.get('/:numb/:name', (request, response) =>{
    response.send(`Thanks ${request.params.name}! We will contact you shortly at ${request.params.numb}`);
});

//This operation return the number we put as value
router.get('/getBalance', (request,response) =>{
    response.send(payments.getBalance(12));
});

//This operation return 0
router.get('/payBalance', (request,response) =>{
    response.send(payments.payBalance());
});

//POST request for getBalance
router.post('/getBalance',(request, response) =>{
    response.send("getBalance has a post");
});

//POST request for chargeBalance
router.post('/chargeBalance',(request, response) =>{
    response.send("chargeBalance has a post");
});


module.exports = router;