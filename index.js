const express= require('express');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const models = require('./models/user');
require('./services/passportService');
require('./routes/oAuthRoutes')(app);

mongoose.connect(keys.mongoDevURI);

//Set cookies
app.use(cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey]
    })
);
//Initialize app
app.use(passport.initialize());

//Use sessions and cookies for authentication
app.use(passport.session());
const PORT = process.env.PORT || 5000;

app.get('/',(req,res) =>{
    res.send({hi:'gotohell'});
});


app.listen(PORT);

