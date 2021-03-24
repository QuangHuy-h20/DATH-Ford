const app = require('express')()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(PORT, ()=>{
    console.log(`App up at port ${PORT}`)
})