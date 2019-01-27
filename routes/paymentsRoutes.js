const keys = require('../config/keys');
const passport  = require('passport');
const stripe = require('stripe')(keys.stripePrivateKey);
const requireLogin= require('../middleswares/requireLogin');
module.exports = app =>{


    app.post('/api/stripe', requireLogin, async(req,res)=>{   
       const charge=  await stripe.charges.create({
            amount:5000,
            currency:'usd',
            description:'This is test charging 5 dollers for 5 credits',
            source:req.body.id
        });
        ////User model saved at login by passport
        req.user.credits += 5;
        const user=await req.user.save();
        res.send(user);
    });

}