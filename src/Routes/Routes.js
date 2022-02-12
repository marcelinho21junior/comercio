import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../Page/Home/Home'
import Dashboard from '../Page/Dashboard/Dashoard'

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/dashboard' exact element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}