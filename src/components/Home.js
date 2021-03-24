import React from 'react'
import {Button} from './Button'
import './Home.css'
import '../App.css'


function Home() {
    return (
        <div className='home-container'>
            <video src='/videos/background.mp4' autoPlay loop muted></video>
            <div className="home-header">
                <h1>FULL STACK DEVELOPMENT</h1>
                <p>by alex gnidko</p>
            </div>
       
            
            
        </div>
    )
}

export default Home
