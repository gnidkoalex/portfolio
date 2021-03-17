import React from 'react'
import "./Skills.css"

function Skills() {
    const mouseOnLanguage= (e)=>{
        e.target.innerText="Hebrew-native , English-fluent , Russian-fluent"
    }
    const mouseLeftLanguage= (e)=>{
        e.target.innerText="Languages"
    }
    return (
        <> 
            <div className="neon-container">
                <a className="react">
                React
                </a>
                <a className="js">
                js
                </a>
                <a className="css">
                css
                </a>
                <a className="PHP">
                PHP
                </a>
                <a className="node">
                node JS
                </a>
                <a className="redux">
                Redux
                </a>
                <a className="jQuery">
                jQuery
                </a>
                <a className="html">
                HTML
                </a>
                <a className="express">
                Express
                </a>
                <a className="mysql">
                MySQL
                </a>
                <a className="mongo">
                mongo DB
                </a>
                <a className="leng" onMouseOver={mouseOnLanguage} onMouseOut={mouseLeftLanguage} >
                Languages
            
                </a>
              
               
            </div> 
            
        </>
    )
}

export default Skills
