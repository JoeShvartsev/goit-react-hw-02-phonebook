import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'API/Instance';
import { logOut } from 'API/logOut';
// import { refresh } from 'API/refresh';
import { signIn } from 'API/signIn';
import { signUp } from 'API/signUp';
// import axios from 'axios';

export const signUpUserThunk = createAsyncThunk(
  'user/signUp',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signUp(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInUserThunk = createAsyncThunk(
  'user/signIn',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUserThunk = createAsyncThunk(
  'user/logOut',
  async (token, { rejectWithValue }) => {
    try {
      const data = await logOut(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const refreshUserThunk = createAsyncThunk(
//   'user/refresh',
//   async (_, { rejectWithValue }) => {
//     const token = JSON.parse(localStorage.getItem('token'));
    
//     if (!token) {
//       return 
//     }
//     else{try {
//       const data = await refresh(token);
//       console.log(data);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }}
    
//   }
// );
export const refreshUserThunk = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      
      const res = await instance.get('users/current',{
        headers: {
          Authorization: `Bearer ${persistedToken}`,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
