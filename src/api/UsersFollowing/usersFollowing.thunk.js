import { createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";

export const usersFollowingThunk = createAsyncThunk("usersFollowingThunk", async (username) => {
    const response = await https.get(
        `/users/${username}/following`
    );
    if (!response.status) {
        throw new Error("Server error");
    }
    return response.data;
});