import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://6482253c29fa1c5c5032a3ce.mockapi.io";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAllContacts",
    async (_, thunkAPI) => { 
        try {
            const response = await axios.get("/contacts");              
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact", 
    async (contact, thunkAPI) => {
       try {
            const response = await axios.post('/contacts', contact);            
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", 
    async (id, thunkAPI) => {
       try {
            const response = await axios.delete(`/contacts/${id}`);            
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

