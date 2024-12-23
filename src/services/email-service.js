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

const subscribeEvents = async (payload)=>{
    let service = payload.service;
    let data = payload.data;
    switch(service)
    {
        case 'CREATE_TICKET':
            await createNotification(data);
            break;
        case 'SEND_BASIC_MAIL':
            await sendBasicEmail(data);
            break;
        default:
            console.log("No valid event received");
            break;
    }
}


const createNotification = async(data)=>
{
    try {
        const ticket = await repo.create(data);
        return ticket;
    } catch (error) {
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
    updateTicket,
    subscribeEvents
}