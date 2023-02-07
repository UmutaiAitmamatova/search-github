import { createSlice } from "@reduxjs/toolkit";
import { getFollowersThunk, getFollowingThunk, getUserReposThunk, userInfoThunk } from "./user.thunk";

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


export const myFollowingSlice = createSlice({
  name: "myFollowing",
  initialState: {
    myFollowing: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getFollowingThunk.fulfilled, (state, action) => {
      state.myFollowing = action.payload;
    });
  },
});

export const myFollowersSlice = createSlice({
  name: "myFollowers",
  initialState: {
    myFollowers: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getFollowersThunk.fulfilled, (state, action) => {
      state.myFollowers = action.payload;
    });
  },
});

export const userInfoReducer = userInfoSlice.reducer;
export const myFollowingReducer = myFollowingSlice.reducer;
export const myFollowersReducer = myFollowersSlice.reducer;
export const userPeposReducer = userReposSlice.reducer;
