const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('Bye Bye');
});

app.listen(9999, ()=>{
    console.log('Listening on port 9999');
});