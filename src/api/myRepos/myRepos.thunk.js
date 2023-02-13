import { createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";

export const myReposThunk = createAsyncThunk("myReposThunk", async () => {
    const response = await https.get(
        `/users/UmutaiAitmamatova/repos`
    );
    if (!response.status) {
        throw new Error("Server error");
    }
    return response.data;
});