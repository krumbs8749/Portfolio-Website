import { useState } from "react";
import emailjs from "emailjs-com"

import "./contact.scss"

const ids =  {
  SERVICE_ID : "service_bvrq51l",
  TEMPLATE_ID : "template_uhk9dtd",
  USER_ID : "hf8FAObqWdF_WHQD7",
}

export default function Contact() {
  
  const [message, setMessage] = useState(false);
  console.log(process.env)
  const handleSubmit = event => {
    event.preventDefault();
    emailjs.sendForm(ids.SERVICE_ID, ids.TEMPLATE_ID, event.target, ids.USER_ID)
      .then((result) => {
          console.log({result})  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/handshake.svg" alt=""/>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" placeholder="Name" name="from_name"/>
          <input type="email" placeholder="Email" name="from_email"/>
          <textarea placeholder="Anything you're wondering about?" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP ^_^</span>}
        </form>
      </div>
    </div>
  )
}
