import React from 'react';
import emailjs from 'emailjs-com';

import { Container } from '../Styles/feedback.styles';

const Feedback = () => {
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2cexyz4',
        'template_hxydrqp',
        e.currentTarget,
        'user_Ht0ZQATW8bDDFNz5tmbAZ',
      )
      .then(
        (result: any) => {
          alert('Le message a été envoyé avec succès. 👍!!');
        },
        (error: any) => {
          alert('not send 😤');
        },
      );
    e.currentTarget.reset();
  }
  return (
    <Container>
      <div className="contact-container">
        <div className="imgs">
          <img
            src="https://images.pexels.com/photos/10202989/pexels-photo-10202989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <form onSubmit={sendEmail}>
          <div className="contact-wrapper">
            <h1>Feedback</h1>
            <div className="name-container">
              <label></label>
              <input
                type="text"
                autoFocus
                required
                placeholder="Full name"
                name="name"
              />
            </div>
            <div className="email-container">
              <label></label>
              <input
                type="email"
                required
                placeholder="Adress email"
                name="user_email"
              />
            </div>

            <div className="text-container">
              <label></label>
              <textarea
                cols={50}
                rows={15}
                required
                placeholder="Laisser message"
                name="message"
              ></textarea>
            </div>
            <div className="btn-container">
              <input type="submit" className="btn" value="Send"></input>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Feedback;
