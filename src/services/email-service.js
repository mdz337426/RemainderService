const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');
const repo = new TicketRepository();


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

const fetchPendingEmails = async (timestamp) => {
    try {
     
        const response = await repo.get({status :'PENDING'});
        return response;
        
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}


const createNotification = async(data)=>
{
    try {
        const ticket = await repo.create(data);
        return ticket;
    } catch (error) {
        console.log(error);
        throw error;     
    }

}

const updateTicket = async(ticketId, data)=>
{
    try {
        
        await repo.update(ticketId, data);

    } catch (error) {
        console.log(error);
        throw error;         
    }

}



module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}