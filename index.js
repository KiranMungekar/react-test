const express= require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const models = require('./models/user');
require('./services/passportService');
require('./routes/oAuthRoutes')(app);


mongoose.connect(keys.mongoDevURI);
const PORT = process.env.PORT || 5000;

app.get('/',(req,res) =>{
    res.send({hi:'gotohell'});
});


app.listen(PORT);

