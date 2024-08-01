import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  role: null,
  error: null,
  loading: false,
  role: localStorage.getItem('role') || null,
  token: localStorage.getItem('token') || null,
};

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3000/api/auth/login', credentials);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('role', response.data.role);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.token = null;
      localStorage.removeItem('role');
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
