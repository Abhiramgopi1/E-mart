import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './stores/pages/landingpage'
import Mobilepage from './stores/pages/Mobilepage'
import Computerpage from './stores/pages/computerpage'
import Menspage from './stores/pages/Menspage'
import Watchepage from './stores/pages/Watchepage'
import Womenspage from './stores/pages/Womenspage'
import TVpage from './stores/pages/TVpage'
import Furniturepage from './stores/pages/FurniturePage'
import Kitchenpage from './stores/pages/Kitchenpage'
import Speakerpage from './stores/pages/SpeakerPage'
import FridgePage from './stores/pages/FridgePage'
import BookPage from './stores/pages/Bookpage'
import './App.css'
import Mobilesingle from './stores/Singles/Mobilesingle'
import Usercart from './stores/Usercart'

function App() {

  return (
      <div>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/Mobiles' element={<Mobilepage/>}/>
          <Route path='/Computers' element={<Computerpage/>}/>
          <Route path='/Watches' element={<Watchepage/>}/>
          <Route path='/Menswear' element={<Menspage/>}/>
          <Route path='/Womenswear' element={<Womenspage/>}/>
          <Route path='/TVs' element={<TVpage/>}/>
          <Route path='/furniture' element={<Furniturepage/>}/>
          <Route path='/kitchen' element={<Kitchenpage/>}/>
          <Route path='/Speaker' element={<Speakerpage/>}/>
          <Route path='/fridge' element={<FridgePage/>}/>
          <Route path='/books' element={<BookPage/>}/>
          <Route path='/Mobiles/:id' element={<Mobilesingle/>}/>
          <Route path='/cart' element={<Usercart/>}/>
        </Routes>
      </div>
  )
}

export default App
