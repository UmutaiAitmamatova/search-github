import { createSlice } from "@reduxjs/toolkit";
import { getUserReposThunk, userInfoThunk } from "./user.thunk";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfoo: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(userInfoThunk.fulfilled, (state, action) => {
      state.userInfoo = action.payload;
    });
  },
});



export const userReposSlice = createSlice({
  name: "userRepos",
  userId: "",
  initialState: {
    userRepos: {},
  },
  extraReducers(builder) {
    builder.addCase(getUserReposThunk.fulfilled, (state, action) => {
      state.userRepos = action.payload;
    });
  },
});

export const userInfoReducer = userInfoSlice.reducer;
export const userPeposReducer = userReposSlice.reducer;
