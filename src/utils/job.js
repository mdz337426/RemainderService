const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/emailConfig');

const setupJobs = ()=>{
    cron.schedule('*/1 * * * *',async ()=>{
        console.log('job is running');
        const response = await emailService.fetchPendingEmails();
         response.forEach((ticket) => {
            console.log(ticket.id);
          sender.sendMail({
            to: ticket.recepientEmail,
            subject : ticket.subject,
            text : ticket.content
          }, async (err, data)=>{
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log(data);
                   await emailService.updateTicket(ticket.id, {status:'SUCCESS'});
                }
          });
        
        });

    });
 
}

module.exports = setupJobs;