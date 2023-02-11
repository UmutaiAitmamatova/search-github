import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";

export const searchUserInfo = createAsyncThunk(
    "searchUserInfo",
    async (username) => {
        const response = await https.get(`/users/${username}`);
        return response.data;
    }
);
// /users/${username}
const userInfoSlice = createSlice({
    name: "searchUserInfo",
    initialState: {
        usersInfo: null,
        loading: false,
    },
    extraReducers: {
        [searchUserInfo.pending]: (state) => {
            state.loading = true;
        },
        [searchUserInfo.fulfilled]: (state, action) => {
            state.usersInfo = action.payload;
            state.loading = false;
        },
    },
});

export const { reset } = userInfoSlice.actions;

export const selectUserInfo = (state) => state.searchUserInfo.usersInfo;
export const selectLoading = (state) => state.searchUserInfo.loading;

export default userInfoSlice.reducer;