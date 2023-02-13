import { createSlice } from "@reduxjs/toolkit";
import { usersReposThunk } from "./usersRepos.thunk";

export const usersReposSlice = createSlice({
    name: "usersRepos",
    initialState: {
        usersRepos: {},
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(usersReposThunk.fulfilled, (state, action) => {
            state.usersRepos = action.payload;
        });
    },
});

export const usersPeposReducer = usersReposSlice.reducer;