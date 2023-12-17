import { createSlice } from "@reduxjs/toolkit";
import axios from "../helper/axios";

export const messageSlice = new createSlice({
    initialState:{
        value: [],
        error: null,
    },
    reducers:{
        sendMessage: async()=>{

        },
        getMessage:async()=>{

        },
    }
});


export default messageSlice.redu