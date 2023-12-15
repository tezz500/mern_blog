const mongoose = require('mongoose');
const MenuTypeEnum = require('../Enum/MenuTypeEnum');
const menuSchema =new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Please Enter Title'],
    },
    slug:{
        type:String,
        required:[false, '']
    },
    order:{
        type:Number,
        required:[false, ''],
        default:0,
    },
    parent_id:{
        type:String,
        required:['false', ''],
        default:0,
    },
    url:{
        type:String,
        required:[false, ''],
        default:'',
    },
    target:{
        type:String,
        required:[false, ''],
        default:'',
    },
    menu_type:{
        type:String,
        required:[false, ''],
        default:MenuTypeEnum.PAGE
    }
});

module.exports = mongoose.model('Menu', menuSchema);