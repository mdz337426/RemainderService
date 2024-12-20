const { createNotification } = require("../services/email-service")

const create = async (req, res)=>{
    try {
        const ticket = await createNotification(req.body);
        return res.status(201).json({
            success:'true',
            data : ticket,
            err : {},
            message : 'successfully registered an email reminder'
        });
    } catch (error) {
        return res.status(500).json({
            success:'false',
            data : req.body,
            err : error,
            message : 'not able to register email reminder'
        });
    }

}


module.exports = {
    create
}