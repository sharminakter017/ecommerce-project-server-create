const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const url = require('url');
const colors = require('colors');

//init express
const app = express();

//environment variables
const PORT = process.env.SERVER_PORT || 4000 ;

//static 
app.use('/public', express.static('public'));




//routing

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public/index.html'))
});

app.get('/cart',(req,res) => {
    res.sendFile(path.join(__dirname,'public/cart.html'))
});

app.get('/blog',(req,res) => {
    res.sendFile(path.join(__dirname,'public/blog.html'))
});

app.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname,'public/dashboard.html'))
});


app.listen(PORT,(req,res) => {
    console.log('server is ready');
})