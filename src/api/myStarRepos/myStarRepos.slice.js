import { createSlice } from "@reduxjs/toolkit";
import { myStarReposThunk } from "./myStarRepos.thunk";

export const myStarReposSlice = createSlice({
    name: "myStarRepos",
    initialState: {
        myStarRepos: {},
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(myStarReposThunk.fulfilled, (state, action) => {
            state.myStarRepos = action.payload;
        });
    },
});

export const myStarReposReducer = myStarReposSlice.reducer;