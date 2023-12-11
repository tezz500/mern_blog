// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "../helper/axios";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: [],
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.value = action.payload;
      state.error = null; // Reset error on successful fetch
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});


// Action Creators
export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('users');
    dispatch(setUsers(response.data.data));
  } catch (error) {
    dispatch(setError(error || 'An error occurred while fetching users.'));
  }
};

// Reducer
export const { setUsers, setError } = userSlice.actions;

// Selectors
export const selectUsers = (state) => state.user.value;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
