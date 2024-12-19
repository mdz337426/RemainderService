const sender = require('../config/emailConfig');


const sendBasicEmail = async(mailFrom , mailTo, mailSubject, mailBody)=>{
   try {
    const response = await sender.sendMail({
        from : mailFrom,
        to:mailTo,
        subject : mailSubject,
        text :mailBody
    });
    return response;
   } catch (error) {
    console.log("something went worng in service layer");
    throw error;
    
   }
}



module.exports = {
    sendBasicEmail
}