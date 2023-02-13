import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchReducer from "../api/SearchUsers/searchSlice";
import searchUserInfoReducer from "../api/SearchUsers/userInfoSlice";
import { userInfoReducer} from '../api/UserInfo/user.slice';
import { usersStarReposReducer } from "../api/UsersStarRepos/usersStarRepos.slice";
import { usersFollowerReducer } from "../api/UsersFollower/usersFollower.slice";
import { usersFollowingReducer } from "../api/UsersFollowing/usersFollowing.slice";
import { myFollowerReducer } from "../api/myFollowers/myFollowers.slice";
import { myFollowingReducer } from "../api/myFollowing/myFollowing.slice";
import { myPeposReducer } from "../api/myRepos/myRepos.slice";
import { myStarReposReducer } from "../api/myStarRepos/myStarRepos.slice";
import { usersPeposReducer } from "../api/UsersRepos/usersRepos.slice";

export const store = configureStore({ 
    reducer: {
        userInfo: userInfoReducer,
        myRepos: myPeposReducer,
        myFollowing: myFollowingReducer,
        myFollowers: myFollowerReducer,
        myStarRepos: myStarReposReducer,
        searchGitHubUser: searchReducer,
        searchUserInfo: searchUserInfoReducer,
        usersRepos: usersPeposReducer,
        usersStarRepos: usersStarReposReducer,
        usersFollower: usersFollowerReducer,
        usersFollowing: usersFollowingReducer,

    },
    middleware: [...getDefaultMiddleware()],
})

export default store;