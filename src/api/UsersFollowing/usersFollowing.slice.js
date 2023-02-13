import { createSlice } from "@reduxjs/toolkit";
import { usersFollowingThunk } from "./usersFollowing.thunk";

export const usersFollowingSlice = createSlice({
    name: "usersFollowing",
    initialState: {
        usersFollowing: {},
    },
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(usersFollowingThunk.fulfilled, (state, action) => {
            state.usersFollowing = action.payload;
        });
    },
});

export const usersFollowingReducer = usersFollowingSlice.reducer;