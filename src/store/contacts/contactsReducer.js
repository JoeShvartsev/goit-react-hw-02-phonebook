import { createSlice } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState:{
    contacts: []
  },
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts=payload 
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContact } = contactsSlice.actions;

// export const contactsReducer = (state = initialState,{type,payload})=>{
//   switch (type){
//     case 'createContact':
//     return {...state,contacts:payload}
//     default: return state
// }}

// export const contactsReducer=createReducer(initialState,{
//   [createContact](state,{payload}){
//     return {...state,contacts:payload}
//   }})
