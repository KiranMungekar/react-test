const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId : String,
    display_name: String,
    
});

mongoose.model('user',userSchema);

