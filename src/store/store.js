import { configureStore } from '@reduxjs/toolkit';
import {myFollowersReducer, myFollowingReducer, myStarReposReducer, userInfoReducer, userPeposReducer} from '../api/UserInfo/user.slice'

export const store = configureStore({ 
    reducer: {
        userInfo: userInfoReducer,
        userRepos: userPeposReducer,
        myFollowing: myFollowingReducer,
        myFollowers: myFollowersReducer,
        myStarRepos: myStarReposReducer,
    } 
})

export default store;