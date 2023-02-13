import { createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";

export const usersFollowerThunk = createAsyncThunk("usersFollowerThunk", async (username) => {
    const response = await https.get(
        `/users/${username}/followers`
    );
    if (!response.status) {
        throw new Error("Server error");
    }
    return response.data;
});