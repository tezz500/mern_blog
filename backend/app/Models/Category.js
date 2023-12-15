const mongoose = require('mongoose');
const { Schema } = mongoose;
const categorySchema =new Schema({
    title:{
        type:String,
        required:['true', 'Pleser Enter The Title'],
    },
    slug:{
        type:String,
        required:[false, ''],
        unique:[true, "Slug Coould not be duplicate"],
    },
    order:{
        type:Number,
        required:[false, ''],
        default:0,
    },
    childs:[{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:[false, ''],
    }],
    parent:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:[false, ''],
    }
});




module.exports = mongoose.model("Category", categorySchema);
