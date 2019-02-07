const mongooee= require('mongoose');
const requireLogin= require('../middleswares/requireLogin');
const requireCredits= require('../middleswares/requireCredits');

const Survey =mongooee.model('surveys');

module.exports= app =>{   
    app.post('/api/surveys', requireLogin, requireCredits, (req,res)=>{
      const{title, subject, body, recipients} = req.body;
        const survey= new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim()})),
            _user: req.user.id,
            dateSend: Date.now()
        });
    });
};