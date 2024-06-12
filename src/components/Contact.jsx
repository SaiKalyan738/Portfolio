import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a1c008bf-a90c-42ea-bbab-c8059e2f504f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      window.alert("Your message has been sent!!");
    }
  };

  return (
    <section id='contact'>
      <h1 className="contact-heading">CONTACT</h1>
      <div className="container">
        <div className="left-container">
          <h2>Follow us</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/nadithoka-eswar-venkata-sai-kalyan-38a82b21a/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/SaiKalyan738/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://leetcode.com/u/Saikalyan81/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code"></i>
            </a>
            <a href="https://www.facebook.com/nadithokakalyan/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/sai_kalyan_n/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      <div className="right-container">
        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default App;
