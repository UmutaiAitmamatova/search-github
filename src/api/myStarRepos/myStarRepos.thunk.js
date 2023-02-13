import { createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";

export const myStarReposThunk = createAsyncThunk("myStarReposThunk", async () => {
    const response = await https.get(
        `/users/UmutaiAitmamatova/starred`
    );
    if (!response.status) {
        throw new Error("Server error");
    }
    return response.data;
});