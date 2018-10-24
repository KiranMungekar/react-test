const express= require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const PORT = process.env.PORT || 5000;

passport.use(new GoogleStrategy());

app.get('/',(req,res) =>{
    res.send({hi:'gotohell'});
});


app.listen(PORT);

