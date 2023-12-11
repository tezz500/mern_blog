import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        }
    },
    selectors:{
        getCount:(state)=>{
            return state.value;
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
export const { getCount }= counterSlice.selectors;
export default counterSlice.reducer;