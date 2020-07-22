import React from "react";
import "./Contact.scss";
function Contact(props) {
  return (
    <div className="contact">
      <form action="" className="contact-form">
        <h1 className="form-title">Inspire us</h1>
        <div className="input-fields">
          <div className="input-field">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-field">
            <label htmlFor="">Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <div className="input-field">
            <label htmlFor="">Your Message</label>
            <textarea placeholder="Your Message" />
          </div>
        </div>
        <button className="btn-submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
