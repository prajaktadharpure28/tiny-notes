import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import "./App.css"
import Home from './views/Home/Home'
import AddNote from './views/AddNote/AddNote'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-note" element={<AddNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App