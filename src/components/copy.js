
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
      <div className="container">
        <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="name" />
        <label>Name</label>
        <input type="text" name="email" />
        <label>Email</label>
        <input type="email" name="message" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
    </div>
  );
}