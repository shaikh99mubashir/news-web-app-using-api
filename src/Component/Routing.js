import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Apifile from './Apifile'
import Showcard from './Showcard'

const Routing = () => {
  return (
    <div>    
        <Routes>
            <Route path='/' element={<Apifile/>}/>
            <Route path='showcard' element={<Showcard/>}/>
        </Routes>

    </div>
  )
}

export default Routing