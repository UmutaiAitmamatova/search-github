import { createSlice } from "@reduxjs/toolkit";
import { myReposThunk } from "./myRepos.thunk";

export const myReposSlice = createSlice({
    name: "myRepos",
    userId: "",
    initialState: {
        myRepos: {},
    },
    extraReducers(builder) {
        builder.addCase(myReposThunk.fulfilled, (state, action) => {
            state.myRepos = action.payload;
        });
    },
});
export const myPeposReducer = myReposSlice.reducer;