import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {myFollowersReducer, myFollowingReducer, myStarReposReducer, userInfoReducer, userPeposReducer} from '../api/UserInfo/user.slice';
import searchReducer from "../api/SearchUsers/searchSlice";
import userReposReducer from "../api/SearchUsers/searchUserReposSlice";

export const store = configureStore({ 
    reducer: {
        userInfo: userInfoReducer,
        userRepos: userPeposReducer,
        myFollowing: myFollowingReducer,
        myFollowers: myFollowersReducer,
        myStarRepos: myStarReposReducer,
        searchGitHubUser: searchReducer,

    },
    middleware: [...getDefaultMiddleware()],
})

export default store;