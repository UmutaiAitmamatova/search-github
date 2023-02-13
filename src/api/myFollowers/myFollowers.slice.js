import { createSlice } from "@reduxjs/toolkit";
import { myFollowersThunk } from "./myFollowers.thunk";

export const myFollowersSlice = createSlice({
    name: "myFollowers",
    initialState: {
        myFollowers: {},
    },
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(myFollowersThunk.fulfilled, (state, action) => {
            state.myFollowers = action.payload;
        });
    },
});

export const myFollowerReducer = myFollowersSlice.reducer;