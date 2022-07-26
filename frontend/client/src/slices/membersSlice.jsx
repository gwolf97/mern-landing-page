import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = { 
    count: 0,
    loading: false,
    error: ""
 }

export const getTotalMembers = createAsyncThunk("/", async () => {
    const res = await axios.get(`/`).then(data => data.json()) 
    console.log(res.json)
    return res.json()
})

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTotalMembers.pending, (state) => {
      state.count = 0;
        state.loading = "loading";
    });
    builder.addCase(
       getTotalMembers.fulfilled, (state, { payload }) => {
          state.count = payload;
          state.loading = "loaded";
    });
    builder.addCase(
      getTotalMembers.rejected,(state, action) => {
          state.loading = "error";
          state.error = action.error.message;
    });
 }
})



export const totalMembers = (state) => state.members.count
export default membersSlice.reducer