import { selectUsers, selectError, getUsers } from '../../store/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { encryptData, userInfo } from '../../helper/helper';
import axios from '../../helper/axios';
import io from 'socket.io-client';
const socket = io('http://localhost:5000');
import UserComponent from './UserComponent' ;


const ChatComponent = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const errors = useSelector(selectError);
    const [user, setUser] = useState({});
    const [owner, setOwner] = useState({});
    const [chat, setChat] = useState({});
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const messageBox = document.getElementById('messageBox');
    
    const scrollToBottom = () => {
        if (messageBox) {
            messageBox.scrollTop = messageBox.scrollHeight;
        }
    };
    useLayoutEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        dispatch(getUsers());
        const owner = userInfo();
        setOwner(owner);
    }, [setOwner, userInfo()._id]);

    useEffect(()=>{
        const allUserIds = users.map(item=>item._id);
        socket.emit('online', { owner:owner, listener:allUserIds });
        // socket.on(`check-online`, (data) => {
        //     console.log("Actual Listening On ");
        //     console.log(data);
        // });

    }, [users]);

    const getMessage = async () => {
        await axios.get('get-messages', {
            params: {
                chat_id: chat._id,
            },
        })
            .then((response) => {
                setMessages(response.data.data);
            })
            .catch((error) => {

            })
            .finally(() => {

            });
    }
    const startChat = async (user) => {
        setUser(user);
        await axios.get('chat', {
            params: {
                sender_id: owner._id,
                receiver_id: user._id,
            },
        })
            .then((response) => {
                setChat(response.data.data.chat);
                setMessages(response.data.data.messages);
            })
            .catch((error) => {

            })
            .finally(() => {

            });
    }
    const sendMessage = async (e) => {
        await axios.post('chat', {
            sender_id: owner._id,
            receiver_id: user._id,
            message: message,
        })
            .then((response) => {
                getMessage();
                setMessage('');
            })
            .catch((error) => {

            })
            .finally(() => {

            });
    }

    return (
        <div className="mr-5 ml-5 chat-section">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                        <ul className='list-group'>
                            {
                                users.length > 0 &&
                                users.map((user, index) => {
                                    return user._id !== owner._id ? (
                                        <li className='list-group-item user-list' key={index + encryptData(user.name)}>
                                          <button
                                            onClick={(e) => startChat(user)}
                                            style={{
                                              display: "block",
                                              width: "100%",
                                              border: "none",
                                              outline: "none"
                                            }}
                                          >
                                            <UserComponent user={user} />
                                          </button>
                                        </li>
                                      ) : null;
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="order-chat-section">
                                    <div className="order-chat-header">
                                        <div className="order-store-detail">
                                            <div className="order-store-img bg-dark-shop">
                                                {/* <img src="https://image.flaticon.com/icons/svg/3135/3135715.svg" alt="" /> */}
                                            </div>
                                            <div className="order-store-text-head">
                                                <h3>{user.name ?? "User Not Selected"}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-chat-content chat-scrollbar" id='messageBox'>

                                    {
                                        messages.length > 0 &&
                                        messages.map((item, index) => {
                                            return (
                                                <div className={`order-chat-list-sec mt-3 ${owner._id === item.owner ? 'left-chat' : 'right-chat'}`} key={index+encryptData(item._id)}>
                                                    <div className="order-chat-area">
                                                        {item.message}
                                                        <div className="msg-time">{ item.createdAt }</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                    <div className="order-chat-footer">
                                        <div className="order-chat-enter-area">
                                            <input type="text" name="message" className="form-control" placeholder="Type Here" aria-label="Message" aria-describedby="basic-addon2" onChange={(e) => setMessage(e.target.value)} onKeyUp={(e) => setMessage(e.target.value)} value={message} />
                                            <div className="chat-actions-button">
                                            {
                                                (!chat || Object.keys(chat).length <= 0) ?
                                                    <button className="input-group-text" id="basic-addon2" disabled>Send</button>
                                                    :
                                                    <button className="input-group-text" id="basic-addon2" onClick={(e) => sendMessage(e)}>Send</button>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatComponent;