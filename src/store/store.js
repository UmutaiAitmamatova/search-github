import { configureStore } from '@reduxjs/toolkit';
import {myFollowersReducer, myFollowingReducer, userInfoReducer, userPeposReducer} from '../api/UserInfo/user.slice'

export const store = configureStore({ 
    reducer: {
        userInfo: userInfoReducer,
        userRepos: userPeposReducer,
        myFollowing: myFollowingReducer,
        myFollowers: myFollowersReducer,
    } 
})

export default store;