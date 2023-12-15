const mongoose = require('mongoose');
const {Schema} = mongoose;

const chatSchema = new Schema({
    sender:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true, 'Please Provide the sender'],
    },
    receiver:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true, 'Please Provide the receiver'],
    },
},{
    timestamps: true
})



module.exports = mongoose.model('Chat', chatSchema);
