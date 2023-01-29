import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../layout/Header'
import Home from '../pages/home'
import User from '../pages/user'

function Router() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='user' element={<User />} />
            </Routes>
        </>
    )
}

export default Router