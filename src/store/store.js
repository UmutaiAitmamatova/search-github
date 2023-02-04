import { configureStore } from '@reduxjs/toolkit';
import {userInfoReducer, userPeposReducer} from '../api/UserInfo/user.slice'

export const store = configureStore({ 
    reducer: {
        userInfo: userInfoReducer,
        userRepos: userPeposReducer,
    } 
})

export default store;