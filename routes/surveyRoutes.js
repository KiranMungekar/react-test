const mongooee= require('mongoose');
const requireLogin= require('../middleswares/requireLogin');
const requireCredits= require('../middleswares/requireCredits');
const mailer= require('../services/mailer');
const Survey =mongooee.model('surveys');
const template = require('../services/emailTemplates/surveyTemplate');
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

        // Send Emails!
        const mail= new mailer(survey, template(template));
            mail.send();
    });
};