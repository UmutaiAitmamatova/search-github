import { createAsyncThunk } from "@reduxjs/toolkit";
import {userApi} from '../../api/user'
export const userInfoThunk = createAsyncThunk('userThunk', async () => {
    try {
        return await userApi.getUser()
    } catch (error) {
        console.log(error)
    }
})