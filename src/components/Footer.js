import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="mainFooter">
            <div className="footerContainer">
                <div className="col">
                    <ul className="item">
                        <span>letters</span>
                        <li>aaaa</li>
                        <li>bbbb</li>
                        <li>cccc</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="item">
                        <span>numbers</span>
                        <li>1111</li>
                        <li>2222</li>
                        <li>3333</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="item">
                        <span>multi</span>
                        <li>11aa</li>
                        <li>bb22</li>
                        <li>3c3c</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
