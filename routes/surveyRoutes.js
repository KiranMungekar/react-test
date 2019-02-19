const mongooee= require('mongoose');
const requireLogin= require('../middleswares/requireLogin');
const requireCredits= require('../middleswares/requireCredits');
const mailer= require('../services/mailer');
const Survey =mongooee.model('surveys');
const template = require('../services/emailTemplates/surveyTemplate');
module.exports= app =>{ 
    
    app.post('/api/surveys/webhook', (req,res)=>{
        console.log(req);
        res.send('Thank You for voting!');
    });


    app.get('/api/surveys/thanks',(req,res)=>{
        res.send('Thanks for voting');
    });
    app.post('/api/surveys', requireLogin, requireCredits, async (req,res)=>{
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
       try{
        const mail= new mailer(survey, template(survey));
        console.log(template(survey));
        await mail.send();
        await survey.save();
        req.user.credits -=1;
        const user=await req.user.save();
        return res.send(user);
        
       }catch(err){
           console.log(err);
            res.status(422).send(err);
       }
    });
};