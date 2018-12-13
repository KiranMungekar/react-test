const express= require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const models = require('./models/user');
require('./services/passportService');

mongoose.connect(keys.mongoDevURI,{ useNewUrlParser: true });

const app = express();

//Set cookies
app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey],
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  require('./routes/oAuthRoutes')(app);
const PORT = process.env.PORT || 5000;

app.get('/',(req,res) =>{
    res.send({hi:'gotohell'});
});


app.listen(PORT);

