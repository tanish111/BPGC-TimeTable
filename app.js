const {course} = require("./data.js");
const express = require("express");
const app = express()
const path = require('path');
app.set('view engine','ejs');
app.use("/style",express.static(__dirname + "/style"));
app.set('views',path.join(__dirname,'/views'))
app.get('/',(req,res) => {
    res.render('index')
})
app.get('/test',(req,res) => {
    const courses = ['MATHS F111','CHEM F111','BIO F111'] 
    res.render('test',{courses:courses})
})
app.get('/:branch',(req,res) => {

    const { branch } = req.params;
    const time_1 = [0,5,10,15]
    res.render('course-selection',{branch:branch,courses:course,time_1:time_1})
})
app.listen(process.env.PORT || 3000,() => {
    console.log("LISTENING ON PORT 3000")
})
