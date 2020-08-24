import React, { useState } from "react"
import Helmet from "react-helmet"
import axios from "axios"

import Layout from "./../components/layout"
import "./kontakti.scss"

import WhatsApp from "./../images/contacts/whatsapp.png"
import Facebook from "./../images/contacts/facebook.png"

const ContactsPage = () => {
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [phone, setPhone] = useState("")
  let [message, setMessage] = useState("")

  const reset = () => {
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post("https://solistiribai.herokuapp.com/contact", {
        name,
        email,
        phone,
        message,
      })
      .then(function (response) {
        console.log(response.data)
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
            <input
              id="name"
              type="text"
              name="name"
              onChange={e => setName(e.target.value)}
            />
            <p className="contacts-error-message"></p>

            <label htmlFor="email">E-pasts*</label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
            <p className="contacts-error-message"></p>

            <label htmlFor="phone">Telefons</label>
            <input
              id="phone"
              type="text"
              name="phone"
              onChange={e => setPhone(e.target.value)}
            />
            <p className="contacts-error-message"></p>

            <label htmlFor="message">Jūsu ziņa*</label>
            <textarea
              id="message"
              type="text"
              name="message"
              onChange={e => setMessage(e.target.value)}
            />
            <p className="contacts-error-message"></p>

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

export default ContactsPage
