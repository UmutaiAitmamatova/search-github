import { createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";
export const userInfoThunk = createAsyncThunk("userThunk", async () => {
  const response = await https.get(
    `/users/UmutaiAitmamatova`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});

