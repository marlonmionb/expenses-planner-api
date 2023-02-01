const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}));

app.post('/', (req, res, next) => {
    console.log(req.body.email);
    next()
})


app.listen(3000);