// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import https from "../https";

// export const searchGitHubUserRepos = createAsyncThunk(
//     "repositories",
//     async (username) => {
//         const response = await https.get(`/users/${username}/repos`);
//         return response.data;
//     }
// );

// const repositoriesSlice = createSlice({
//     name: "repositories",
//     initialState: {
//         userRepos: null,
//         loading: false,
//     },
//     reducers: {
//         reset: (state) => {
//             state.userRepos = null;
//         },
//     },
//     extraReducers: {
//         [searchGitHubUserRepos.pending]: (state) => {
//             state.loading = true;
//         },
//         [searchGitHubUserRepos.fulfilled]: (state, action) => {
//             state.userRepos = action.payload;
//             state.loading = false;
//         },
//     },
// });


// export const { resetRepos } = repositoriesSlice.actions;
// export const selectUserRepos = (state) => state.searchGitHubUserRepos.userRepos;
// export const selectReposLoading = (state) => state.searchGitHubUserRepos.loading;
// export default repositoriesSlice.reducer;