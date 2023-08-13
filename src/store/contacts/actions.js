import { createAsyncThunk} from '@reduxjs/toolkit';
import { deleteContact } from 'API/Delete';
import { getContacts } from 'API/Fetch';
import { updateContacts } from 'API/Update';


export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContact(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateContactsThunk = createAsyncThunk(
  'contacts/updateContacts',
  async (data, { rejectWithValue }) => {
    try {
      return await updateContacts(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
