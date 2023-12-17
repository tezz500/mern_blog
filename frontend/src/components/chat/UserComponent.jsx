
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:5000');
const UserComponent = (props)=>{
    const [online, setOnline] = useState(false);
    useEffect(()=>{
        console.log(props.user);
        console.log(props.user._id);
        socket.on(`check-online`, (data) => {
            console.log("Actual Listening On ");
            console.log(data);
        });
    },[online, props.user._id]);
    return(
        <div>
            {props.user.name}
            {
                online && (
                    <span>Online</span>
                ) 
            }
        </div>
    );
}

export default UserComponent;