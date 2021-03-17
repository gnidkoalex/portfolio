
import emailjs from 'emailjs-com';
import React from 'react'
import './Contact.css'



export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_Gmail', 'template_nafzadu', e.target, 'user_ADGZdh6SWSzYwXliz1LnR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="contactContainer">
            <div class="login-box">
                <h2>Login</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required="" />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>

    );


}