var express = require('express');
var app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello gamba</h1>")
})

app.listen(8080,() => console.log('Server rodando...'))