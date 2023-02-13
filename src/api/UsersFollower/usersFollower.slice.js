import { createSlice } from "@reduxjs/toolkit";
import { usersFollowerThunk } from "./usersFollower.thunk";

export const usersFollowerSlice = createSlice({
    name: "usersFollower",
    initialState: {
        usersFollower: {},
    },
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(usersFollowerThunk.fulfilled, (state, action) => {
            state.usersFollower = action.payload;
        });
    },
});

export const usersFollowerReducer = usersFollowerSlice.reducer;