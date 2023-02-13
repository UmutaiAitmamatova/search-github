import { createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";

export const myFollowersThunk = createAsyncThunk("myFollowersThunk", async (username) => {
    const response = await https.get(
        `/users/UmutaiAitmamatova/followers`
    );
    if (!response.status) {
        throw new Error("Server error");
    }
    return response.data;
});