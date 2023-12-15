const mongoose = require('mongoose');
const {Schema} = mongoose;

const messageSchema = new Schema({
    chat:{
        type:Schema.Types.ObjectId,
        ref:'Chat',
        required:[true, 'Please Provide the sender'],
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true, 'Please Provide the owner'],
    },
    is_new:{
        type:Boolean,
        required:[true, 'Please Provide the receiver'],
        default:true,
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Message', messageSchema);