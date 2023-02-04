import { createSlice } from "@reduxjs/toolkit";
import { userInfoThunk } from "./user.thunk";

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: '',
    reducers:{
        
    },
    extraReducers(builder) {
        builder.addCase(userInfoThunk.fulfilled, (state, action) => {
            state = action.payload
        })
    }
})

export const userInfoReducer = userInfoSlice.reducer;
