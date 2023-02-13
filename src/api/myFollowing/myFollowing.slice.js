import { createSlice } from "@reduxjs/toolkit";
import { myFollowingThunk } from "./myFollowing.thunk";

export const myFollowingSlice = createSlice({
    name: "myFollowing",
    initialState: {
        myFollowing: {},
    },
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(myFollowingThunk.fulfilled, (state, action) => {
            state.myFollowing = action.payload;
        });
    },
});

export const myFollowingReducer = myFollowingSlice.reducer;