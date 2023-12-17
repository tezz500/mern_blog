
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:5000');
const UserComponent = (props)=>{
    const [online, setOnline] = useState(false);
    useEffect(()=>{
        console.log('listining on ', `online-${props.user._id}`);
        socket.on(`online-${props.user._id}`, (data) => {
            console.log(data);
            setOnline(true);
        });
    }, [online]);
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