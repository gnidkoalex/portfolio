import React from 'react'
import './Projects.css';

function Projects() {
    return (
        <div className="projects-container">
            <div className="project-post">
                <div className="project-post-img">
                    <img src="https://image.freepik.com/free-photo/business-desktop-with-office-elements_23-2148194740.jpg" alt=""/>
                </div>
                <div className="projet-info">
                    <div className="project-date">
                        <span>10/10/20</span>
                        <span> good day</span>
                    </div>
                    <h1 className="project-title">nice project</h1>
                    
                    <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita quam nostrum consectetur temporibus ex, iure, distinctio ab, eaque repellat corrupti dolore? Quasi necessitatibus minus aliquid tempora beatae veniam odit.</p>
                    <a href="#" className="project-link">code</a>
                </div>
            </div>
            <div className="project-post">
                <div className="project-post-img">
                    <img src="https://image.freepik.com/free-photo/business-desktop-with-office-elements_23-2148194740.jpg" alt=""/>
                </div>
                <div className="projet-info">
                    <div className="project-date">
                        <span>10/10/20</span>
                        <span> good day</span>
                    </div>
                    <h1 className="project-title">nice project</h1>
                    
                    <p className="project-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita quam nostrum consectetur temporibus ex, iure, distinctio ab, eaque repellat corrupti dolore? Quasi necessitatibus minus aliquid tempora beatae veniam odit.</p>
                    <a href="#" className="project-link">code</a>
                </div>
            </div>
        </div>
    )
}

export default Projects
