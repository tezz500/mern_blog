const ErrorHandller = require('../../vendor/Error/ErrorHandller');
const CatchAsyncError = require('../../Middleware/CatchAsyncError');
const Chat = require('../../Models/Chat');
const Message = require('../../Models/Message');
const User = require('../../Models/User');

const ChatController ={
    getUsers:CatchAsyncError(async(req, res, next)=>{
        const users =await User.find({});
        res.status(200).json({
            success:true,
            message:"User List",
            data:users,
        });
    }),
    sendMessage:CatchAsyncError(async(req, res, next)=>{
        console.log(req.body);
        const sender_id = req.body.sender_id;
        const receiver_id = req.body.receiver_id;
        let chat = await Chat.findOne({sender:sender_id, receiver:receiver_id});
        if(!chat){
            chat = await Chat.findOne({receiver:sender_id, sender:receiver_id});
            if(!chat){
                chat = new Chat({
                    sender:sender_id,
                    receiver:receiver_id,
                });
                await chat.save();
            }
        }
        const message =new Message({
            chat:chat._id,
            owner:sender_id,
            message:req.body.message,
            is_new:true,
        })
        await message.save();
        res.status(200).json({
            success:true,
            message:"Successfully Sent",
            data:message,
        });
    }),
    getMessage:CatchAsyncError(async(req, res, next)=>{
        const chat_id = req.query.chat_id;
        let chat = await Chat.findById(chat_id);
        if(!chat){
            chat =new Chat({
                sender:sender_id,
                receiver:receiver_id,
            });
            await chat.save();
        }
        const messages =await Message.find({chat:chat._id}).sort({'createdAt': 1});
        res.status(201).json({
            success:true,
            message:"Message List",
            data:messages,
        });
    }),
    startChat:CatchAsyncError(async(req, res, next)=>{
        console.log(req.query);
        const sender_id = req.query.sender_id;
        const receiver_id = req.query.receiver_id;
        let chat = await Chat.findOne({sender:sender_id, receiver:receiver_id});
        if(!chat){
            chat = await Chat.findOne({receiver:sender_id, sender:receiver_id});
            if(!chat){
                chat = new Chat({
                    sender:sender_id,
                    receiver:receiver_id,
                });
                await chat.save();
            }
        }
        const messages =await Message.find({chat:chat._id}).sort({'createdAt': -1});
        console.log(messages);
        const data = {
            chat:chat,
            messages:messages,
        };
        res.status(201).json({
            success:true,
            message:"Message List",
            data:data,
        });
    }),
}

module.exports = ChatController;