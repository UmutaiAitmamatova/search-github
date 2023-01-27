import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import User from '../pages/user'

function Router() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='user' element={<User />} />
            </Routes>
        </>
    )
}

export default Router