const express= require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const models = require('./models/user');

require('./services/passportService');

mongoose.connect(keys.mongoDevURI,{ useNewUrlParser: true });

const app = express();


app.use(bodyParser.json());
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
  require('./routes/paymentsRoutes')(app);


  if(process.env.NODE_ENV == 'production'){
    //Express will serve main.js and main.css
      app.use(express.static('client/build'));

    //Express will serve up index.html if does not find specified route
      const path =require('path');

      app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));

      });

  }
const PORT = process.env.PORT || 5000;

app.get('/',(req,res) =>{
    res.send({hi:'gotohell'});
});


app.listen(PORT);