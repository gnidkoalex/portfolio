import React from 'react'
import {Button} from './Button'
import './Home.css'
import '../App.css'


function Home() {
    return (
        <div className='home-container'>
            <video src='/videos/background.mp4' autoPlay loop muted></video>
            <h1>FULL STACK DEVELOPMENT</h1>
            <p>by alex gnidko</p>
            <div className="home-btns">
                {/* <Button className="btns" buttonStyle='btn--outline' buttonSize="btn--large">yey</Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize="btn--large">yey222</Button> */}
                <button>asdf</button>
                <button>asdfasdf</button>
            </div>
            
        </div>
    )
}

export default Home
