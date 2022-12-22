const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const moment=require('moment')
const mongoose = require('mongoose')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connecting nodejs app with mongoDb
mongoose.connect("mongodb+srv://karthikramadugu:Karthiksai1@karthikcluster.b2ikjot.mongodb.net/test", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))
app.use(
        function(req,res,next){
            console.log(moment().format('DD-mm-yyyy hh:mm:ss'),req.socket.remoteAddress,req.path)
            next()
        }
    )
app.use('/', route);
app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
