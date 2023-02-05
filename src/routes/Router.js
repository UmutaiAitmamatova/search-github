import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { getUserReposThunk } from '../api/UserInfo/user.thunk'
import StarRepos from '../components/common/StarRepository'
import Repositories from '../components/Repositories'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Home from '../pages/home'
import User from '../pages/user'

function Router() {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getUserReposThunk());
    // }, [dispatch]);
    
    return (
        <>
            <Header/>

            <Routes>
                <Route path='/*' element={<Home />} >
                    <Route path="repos" element={<Repositories/>} />
                    <Route path="star" element={<StarRepos />} />
                    <Route path="following" element={<p>following</p>} />
                    <Route path="follower" element={<p>follower</p>} />
                </Route>
                <Route path='user' element={<User />} />
            </Routes>

            <Footer/>
        </>
    )
}

export default Router