import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import StarRepos from '../components/common/StarRepository'
import Followers from '../components/Followers'
import Following from '../components/Following'
import Repositories from '../components/Repositories'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Home from '../pages/home'
import User from '../pages/user'

function Router() {
    const { userRepos } = useSelector((state) => state.userRepos);
    const { usersRepos } = useSelector((state) => state.usersRepos);
    // console.log('usersRepos', usersRepos);
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/*' element={<Home />} >
                <Route path="repos" element={<Repositories userRepos={userRepos}/>} />
                    <Route path="star" element={<StarRepos />} />
                    <Route path="following" element={<p><Following/></p>} />
                    <Route path="follower" element={<p><Followers/></p>} />
                </Route>
                <Route path='user/*' element={<User />}>
                    <Route path=":username/repos" element={<Repositories users usersRepos={usersRepos}/>} />
                    <Route path=":username/star" element={<StarRepos />} />
                    <Route path=":username/following" element={<p><Following/></p>} />
                    <Route path=":username/follower" element={<p><Followers/></p>} />
                </Route>
            </Routes>

            <Footer/>
        </>
    )
}

export default Router