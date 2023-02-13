import { createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";

export const usersReposThunk = createAsyncThunk(
    "usersReposThunk",
    async (username) => {
        const response = await https.get(`/users/${username}/repos`);
        if (!response.status) {
            throw new Error("Server error");
        }
        return response.data;
    }
);
