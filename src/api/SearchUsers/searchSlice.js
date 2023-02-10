import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";

export const searchGitHubUser = createAsyncThunk(
    "searchGitHubUser",
    async (username) => {
        const response = await https.get(`/search/users?q=${username}`);
        return response.data;
    }
);

const slice = createSlice({
    name: "searchGitHubUser",
    initialState: {
        userData: null,
        loading: false,
    },
    reducers: {
        reset: (state) => {
            state.userData = null;
            state.error = null;
        },
    },
    extraReducers: {
        [searchGitHubUser.pending]: (state) => {
            state.loading = true;
        },
        [searchGitHubUser.fulfilled]: (state, action) => {
            state.userData = action.payload;
            state.loading = false;
        },
    },
});

export const { reset } = slice.actions;

export const selectUserData = (state) => state.searchGitHubUser.userData;
export const selectLoading = (state) => state.searchGitHubUser.loading;

export default slice.reducer;