import { createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";

export const myFollowingThunk = createAsyncThunk("myFollowingThunk", async (username) => {
    const response = await https.get(
        `/users/UmutaiAitmamatova/following`
    );
    if (!response.status) {
        throw new Error("Server error");
    }
    return response.data;
});