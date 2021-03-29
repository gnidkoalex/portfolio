import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footerContainer">
            {/* <h3> website by alex gnidko</h3> */}
            <ul className="socials">
                <li><a href="#" className="fab fa-facebook"></a></li>
                <li><a href="#" className="fab fa-instagram"></a></li>
                <li><a href="#" className="fab fa-linkedin"></a></li>
                <li><a href="#" className="fab fa-github"></a></li>
            </ul>
            
            <div className="footerBottom">
                <p>copyright &copy; 2021 . designed by <span>alex gnidko</span></p>

            </div>
        </div>
    )
}

export default Footer
