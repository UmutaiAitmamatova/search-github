import { createSlice } from "@reduxjs/toolkit";
import { usersStarReposThunk } from "./usersStarRepos.thunk";

export const usersStarReposSlice = createSlice({
    name: "usersStarRepos",
    initialState: {
        usersStarRepos: {},
    },
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(usersStarReposThunk.fulfilled, (state, action) => {
            state.usersStarRepos = action.payload;
        });
    },
});

export const usersStarReposReducer = usersStarReposSlice.reducer;