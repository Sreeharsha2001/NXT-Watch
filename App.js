import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, {createContext, useState} from 'react'
import './App.css';
import Gaming from './Components/Gaming'
import Home from './Components/Home'
import Login from './Components/Login'
import NotFound from './Components/NotFound'
import SavedVideos from './Components/SavedVideos'
import Trending from './Components/Trending'
import VideoDetails from './Components/VideoDetails'


export const store = createContext([])

function App() {
  const [savedIds, setSavedIds] = useState([])
  const [darkTheme, setDarkTheme] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  
  return (
    <div className="App">
      <store.Provider value={{savedIds, setSavedIds, darkTheme, setDarkTheme, showSidebar, setShowSidebar}} >
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/gaming' element={<Gaming/>}/>
          <Route path='/saved' element={<SavedVideos/>}/>
          <Route path='/video/:id' element={<VideoDetails/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
      </store.Provider>
      
    </div>
  );
}

export default App;
