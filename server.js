const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./config/db')
const path = require('path')

connectDB();


const PORT = 3000;
app.use(express.static('public'))
app.use(express.json())
//init server
function initServer() {
    app.listen(PORT, function check(error){
        if(error) console.log("Error has occured");
        console.log(`Server is started on port ${PORT}`);
    });
}
initServer()

//Template engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')



//Routes
app.use('/api/files', require('./routes/files'))
app.use('/files',require('./routes/show'))
app.use('/files/download', require('./routes/download'))
// app.use('/api/files/send', require('./routes/files/send'))