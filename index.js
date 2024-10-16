import React, {useContext} from 'react'
import './index.css'
import {store} from '../../App.js'

function NotFound() {
    const {darkTheme, setDarkTheme} = useContext(store)
    const background = darkTheme ? 'black' : 'white'
    const font_Color = darkTheme ? 'white' : 'black'
    const search_icon = darkTheme ? '#cccccc' : 'black'
    return (
        <div className='notfound-container' style={{backgroundColor:background}}>
            <img className='notfound-image' src='https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png' alt='not-found'/>
            <h1 style={{color:font_Color}}>Page Not Found</h1>
            <p style={{color:search_icon}}>We are sorry, the page you requested could not be found.</p>
        </div>
    )
}

export default NotFound
