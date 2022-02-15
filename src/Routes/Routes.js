import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../Page/Home/Home'
import Dashboard from '../Page/Dashboard/Dashoard'
import Seach from '../Page/search/search'

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/search' element={<Seach/>}/>
            </Routes>
        </BrowserRouter>
    )
}