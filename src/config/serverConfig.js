const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    PORT:process.env.PORT,
    EMAIL : process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    EXCHANGE_NAME : process.env.EXCHANGE_NAME,
    REMAINDER_BINDING_KEY:process.env.REMAINDER_BINDING_KEY,
    MESSAGE_BROKER_URL : process.env.MESSAGE_BROKER_URL,
    QUEUE : process.env.QUEUE
}