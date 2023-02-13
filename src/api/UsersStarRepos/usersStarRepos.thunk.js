import { createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";

export const usersStarReposThunk = createAsyncThunk("usersStarReposThunk", async (username) => {
    const response = await https.get(
        `/users/${username}/starred`
    );
    if (!response.status) {
        throw new Error("Server error");
    }
    return response.data;
});