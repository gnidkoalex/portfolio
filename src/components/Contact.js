
import emailjs from 'emailjs-com';
import React from 'react'
import './Contact.css'



export default function Contact() {

    function sendEmail(e) {
        console.log("well done")
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
        // <div className="contactContainer">
        //     <div className="login-box">
        //         <h2>Contact Me</h2>
        //         <form onSubmit={sendEmail}>
        //             <div class="user-box">
        //                 <input type="text" name="name" required="" />
        //                 <label>Name / Company</label>
        //             </div>
        //             <div class="user-box">
        //                 <input type="text" name="email" required="" />
        //                 <label>Email</label>
        //             </div>
        //             <div class="user-box">
        //                 <label>Message</label>
        //                 <textarea name="message" />
        //             </div>
        //             <a href="#" onClick={sendEmail}>
        //             <input type="submit" value="Send" />
        //                 <span></span>
        //                 <span></span>
        //                 <span></span>
        //                 <span></span>
        //                 Send email
        //             </a>
        //         </form>
        //     </div>
        // </div>
        <div className="contactContainer">
            <div className="login-box">
                <h2>Contact Me</h2>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="user-box">
                        <input type="text" name="name" />
                        <label>Name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="email" />
                        <label>email</label>
                    </div>
                    <div className="user-box">
                        <label>message</label>
                        <textarea name="message" cols="30" rows="10" />

                    </div>
                    {/* <input type="submit" value="Send" /> */}
                    <button type="submit" >
                        <span></span>
                        <span></span>
                       send
                        <span></span>
                        <span></span>
                    </button>
                </form>
            </div>

        </div>

    );
    <div className="contactContainer">
        <div className="login-box">
            <h2>Contact Me</h2>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="user-box">
                    <input type="hidden" name="name" />
                    <label>Name</label>
                </div>
                <input type="submit" value="Send" />
            </form>
        </div>

    </div>


}