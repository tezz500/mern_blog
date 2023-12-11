import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from "../../store/counterSlice";
import {selectUsers, selectError, getUsers} from '../../store/userSlice';
import { useEffect } from "react";

const ReduxComponent = ()=>{
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const errors = useSelector(selectError);
    const count = useSelector((state)=>{
        return state.counter.value
    });
    
    useEffect(()=>{
        // dispatch(getUsers());
        // console.log(users);
        console.log("dddsdf ");
    }, []);

    return(
        <div className="container">
            <h5>Welcome to the redux tutorials</h5>
            <button className="btn btn-sm btn-danger" onClick={()=>dispatch(decrement())}>
                <i className="fa fa-minus"></i>
            </button>
            <span className="m-5">{ "This is count "+ count }</span>
            <button className="btn btn-sm btn-primary"  onClick={()=>dispatch(increment())}>
                <i className="fa fa-plus"></i>
            </button>
        </div>
    )
}

export default ReduxComponent;