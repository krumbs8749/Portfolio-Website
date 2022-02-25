import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  
  const [message, setMessage] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
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
          <input type="text" placeholder="Email" />
          <textarea placeholder="Anything you're wondering about?"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP ^_^</span>}
        </form>
      </div>
    </div>
  )
}
