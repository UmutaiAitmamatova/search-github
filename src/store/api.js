import { createSlice } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios';

const baseURL = axios.create({
    baseURL: "https://api.github.com",
});

const getUserInfo = (username) => {
    return baseURL.get(`/users/${username}`)
        .then(res => res.data)
        .catch((ex) => {
            console.log(ex)
        })
}

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: { value: getUserInfo },
    reducers: {
        addCompnay: (state, action) => { },
    },
    extraReducers:{
        
    }
});

export const userReducer = userInfoSlice.reducer;

// const getCompanies = baseURL.get(
//     `users/${username}`
// ).then((response) => {
//     console.log(response.data)
//     return response.data;
// }).catch((ex) => {
//     console.log(ex)
// })