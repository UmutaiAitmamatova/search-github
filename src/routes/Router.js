import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StarRepos from '../components/common/StarRepository'
import Followers from '../components/Followers'
import Following from '../components/Following'
import Overview from '../components/Overview'
import Repositories from '../components/Repositories'
import UsersFollower from '../components/UsersFollower'
import UsersFollowing from '../components/UsersFollowing'
import UsersRepositories from '../components/UsersRepositories'
import UsersStarRepositories from '../components/UsersStarRepositories'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Home from '../pages/home'
import User from '../pages/user'

function Router() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} >
                    <Route path="/" element={<Overview/>} />
                    <Route path="repos" element={<Repositories/>} />
                    <Route path="star" element={<StarRepos />} />
                    <Route path="following" element={<p><Following/></p>} />
                    <Route path="follower" element={<p><Followers/></p>} />
                </Route>
                <Route path='user/*' element={<User />}>
                    <Route path=":username/" element={<Overview />} />
                    <Route path=":username/usersRepos" element={<UsersRepositories />} />
                    <Route path=":username/usersStar" element={<UsersStarRepositories/>} />
                    <Route path=":username/usersFollowing" element={<p><UsersFollowing/></p>} />
                    <Route path=":username/usersFollower" element={<p><UsersFollower/></p>} />
                </Route>
            </Routes>

            <Footer/>
        </>
    )
}

export default Router