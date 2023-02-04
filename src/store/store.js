import { configureStore } from '@reduxjs/toolkit';
import {userInfoReducer} from './UserInfo/user.slice.js'

export const store = configureStore({ 
    reducer: {
        userInfo: userInfoReducer,
    } 
})

export default store;