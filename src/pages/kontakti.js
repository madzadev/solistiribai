import React from "react"
import Helmet from "react-helmet"
import axios from "axios"

import Layout from "./../components/layout"
import "./kontakti.scss"

import WhatsApp from "./../images/contacts/whatsapp.png"
import Facebook from "./../images/contacts/facebook.png"

const contactsPage = () => {
  const handleSubmit = e => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const message = document.getElementById("message").value

    console.log(name)

    axios
      .post("https://solistiribai.herokuapp.com/contact", {
        name,
        email,
        phone,
        message,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Layout>
      <Helmet>
        <title>Kontakti | Solis Tīrībai</title>
      </Helmet>

      <div className="contacts-content">
        <div>
          <h1 className="contacts-title">Mūsu kontakti</h1>
          <div className="sazinai-wrapper">
            <p>
              E-pasts:{" "}
              <a href="mailto: solis.tiribai@gmail.com">
                solis.tiribai@gmail.com
              </a>
            </p>
            <br />
            <p>
              Telefons: <a href="tel:+37126364882">(+371) 26 364 882</a>
            </p>
            <br />
            <div className="whatsapp-wrapper">
              <a href="https://api.whatsapp.com/send?phone=37127316899">
                <img className="whatsapp-img" src={WhatsApp} alt="img" />
              </a>
              <p>
                <a
                  className="whatsapp-link"
                  href="https://api.whatsapp.com/send?phone=37127316899"
                >
                  WhatsApp (sūti foto, uzzini cenu)
                </a>
              </p>
            </div>
            <div className="whatsapp-wrapper">
              <a href="https://www.facebook.com/solis.tiribai/">
                <img className="whatsapp-img" src={Facebook} alt="img" />
              </a>
              <p>
                <a
                  className="whatsapp-link"
                  href="https://www.facebook.com/solis.tiribai/"
                >
                  Seko mums Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="contacts-title">Nosūtīt e-pastu</h1>
          <form name="contact" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="name">Vārds*</label>
            <input id="name" type="text" name="name" />

            <label htmlFor="name">E-pasts*</label>
            <input id="email" type="text" name="email" />

            <label htmlFor="name">Telefons</label>
            <input id="phone" type="text" name="phone" />

            <label htmlFor="name">Jūsu ziņa*</label>
            <textarea id="message" type="text" name="message" />

            <p className="contact-required">*Obligāti aizpildāmie lauki</p>
            <button className="contact-btn" type="submit">
              Nosūtīt →
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default contactsPage
