import { createAsyncThunk } from "@reduxjs/toolkit";
import https from "../https";
//  /users/${username}
//   /users/${username}/repos 
export const userInfoThunk = createAsyncThunk("userThunk", async () => {
  const response = await https.get(
    `/users/UmutaiAitmamatova`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});

export const getUserReposThunk = createAsyncThunk("ReposThunk", async () => {
  const response = await https.get(
    `/users/UmutaiAitmamatova/repos`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});


export const getFollowingThunk = createAsyncThunk("FollowingThunk", async () => {
  const response = await https.get(
    `/users/UmutaiAitmamatova/following`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});

export const getFollowersThunk = createAsyncThunk("FollowersThunk", async () => {
  const response = await https.get(
    `/users/UmutaiAitmamatova/followers`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});

export const getMyStarReposThunk = createAsyncThunk("myStarReposThunk", async () => {
  const response = await https.get(
    `/users/UmutaiAitmamatova/starred`
  );
  if (!response.status) {
    throw new Error("Server error");
  }
  return response.data;
});
