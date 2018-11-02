const express= require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},(accessToken,refreshToken,profile)=>{
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
}));

app.get('/auth/google',
    passport.authenticate('google',{
     scope:['profile','email']
}));

app.get('/auth/google/callback',passport.authenticate('google'));

app.get('/',(req,res) =>{
    res.send({hi:'gotohell'});
});


app.listen(PORT);

