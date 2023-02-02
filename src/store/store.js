import { configureStore } from '@reduxjs/toolkit';
import userReducer from '.'

export const store = configureStore({ 
    reducer: {
        userInfo: userReducer,
    } 
})

export default store;