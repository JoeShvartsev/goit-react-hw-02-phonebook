import { createAsyncThunk } from "@reduxjs/toolkit";
import { logOut } from "API/logOut";
import { refresh } from "API/refresh";
import { signIn } from "API/signIn";
import { signUp } from "API/signUp";

export const signUpUserThunk = createAsyncThunk('user/signUp',
async (body, { rejectWithValue }) => {
  try {
    const data = await signUp(body);
    return data
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const signInUserThunk = createAsyncThunk('user/signIn',
async (body, { rejectWithValue }) => {
  try {
    const data = await signIn(body);
    return data
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const logOutUserThunk = createAsyncThunk('user/logOut',
async (token, { rejectWithValue }) => {
  try {
    const data = await logOut(token);
    return data
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const refreshUserThunk = createAsyncThunk('user/refresh',
async (_, { rejectWithValue }) => {
  try {
    const data = await refresh();
    console.log(data)
    return data
  } catch (error) {
    return rejectWithValue(error.message);
  }
})