import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = axios.create({
  baseURL: `https://api.github.com`,
});
//  /users/${username}
//   /users/${username}/repos 
export const userInfoThunk = createAsyncThunk("userThunk", async () => {
  const response = await baseURL.get(
    `/users/UmutaiAitmamatova`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});




export const getUserReposThunk = createAsyncThunk("getUserReposThunk", async () => {
  const response = await baseURL.get(
    `/users/UmutaiAitmamatova/repos`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});
