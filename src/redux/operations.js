import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64b7b8c321b9aa6eb078e60a.mockapi.io';

export const fetchTasks = createAsyncThunk('contacts/', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const { name, phone } = contact;
    try {
      const response = await axios.post('/contacts', {
        name,
        phone,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteTask',
  async (contatsId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contatsId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
