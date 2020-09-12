import React, { useState } from "react"
import Helmet from "react-helmet"
import axios from "axios"

import Layout from "./../components/layout"
import "./kontakti.scss"

import WhatsApp from "./../images/contacts/whatsapp.png"
import Facebook from "./../images/contacts/facebook.png"

import validateContactInput from "./../validation/validator.js"

const ContactsPage = () => {
  let [name, setName] = useState({
    value: "",
    error: "",
  })
  let [email, setEmail] = useState({
    value: "",
    error: "",
  })
  let [phone, setPhone] = useState("")
  let [message, setMessage] = useState({
    value: "",
    error: "",
  })

  let [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    let data = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    }

    const validator = validateContactInput(data)

    if (validator.isValid) {
      axios
        .post("https://solistiribai.herokuapp.com/contact", {
          name: name.value,
          email: email.value,
          phone,
          message: message.value,
        })
        .then(function (response) {
          const errors = response.data.errors

          if (errors) {
            const { nameError, emailError, messageError } = response.data.errors
            if (nameError) {
              setName({ ...name, error: nameError })
            }

            if (emailError) {
              setEmail({ ...email, error: emailError })
            }

            if (messageError) {
              setMessage({ ...message, error: messageError })
            }
          } else {
            setSent(true)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      const errors = validator.errors

      if (errors) {
        const { nameError, emailError, messageError } = errors
        if (nameError) {
          setName({ ...name, error: nameError })
        }

        if (emailError) {
          setEmail({ ...email, error: emailError })
        }

        if (messageError) {
          setMessage({ ...message, error: messageError })
        }
      } else {
        setSent(true)
      }
    }
  }

  return (
    <Layout>
      <Helmet>
        <html lang="lv" />
        <title>Kontakti | Solis Tīrībai</title>
        <description>Apraksts</description>
      </Helmet>

      <div className="contacts-content">
        <div>
          <h1 className="contacts-title">Mūsu kontakti</h1>
          <div className="sazinai-wrapper">
            <p className="contacts-info">
              E-pasts:{" "}
              <a
                className="contacts-link"
                href="mailto: solis.tiribai@gmail.com"
              >
                solis.tiribai@gmail.com
              </a>
            </p>
            <br />
            <p className="contacts-info">
              Telefons:{" "}
              <a className="contacts-link" href="tel:+37126364882">
                (+371) 26 364 882
              </a>
            </p>
            <br />
            <div className="whatsapp-wrapper">
              <a href="https://api.whatsapp.com/send?phone=37126364882">
                <img className="whatsapp-img" src={WhatsApp} alt="img" />
              </a>
              <p className="contacts-info">
                <a
                  className="whatsapp-link"
                  href="https://api.whatsapp.com/send?phone=37126364882"
                >
                  WhatsApp (sūti foto, uzzini cenu)
                </a>
              </p>
            </div>
            <div className="whatsapp-wrapper">
              <a href="https://www.facebook.com/solis.tiribai/">
                <img className="whatsapp-img" src={Facebook} alt="img" />
              </a>
              <p className="contacts-info">
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
          {!sent ? (
            <>
              <h1 className="contacts-title">Nosūtīt e-pastu</h1>
              <form name="contact" method="POST" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <label htmlFor="name">Vārds*</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autocomplete="off"
                    className={name.error ? "alert-border" : ""}
                    onChange={e =>
                      setName({ ...name, value: e.target.value, error: "" })
                    }
                  />
                  <p className="contacts-error-message">{name.error}</p>
                </div>

                <div className="input-wrapper">
                  <label htmlFor="email">E-pasts*</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    autocomplete="off"
                    className={email.error ? "alert-border" : ""}
                    onChange={e =>
                      setEmail({ ...email, value: e.target.value, error: "" })
                    }
                  />
                  <p className="contacts-error-message">{email.error}</p>
                </div>

                <div className="input-wrapper">
                  <label htmlFor="phone">Telefons</label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    autocomplete="off"
                    onChange={e => setPhone(e.target.value)}
                  />
                  <p className="contacts-error-message"> </p>
                </div>

                <div className="input-wrapper">
                  <label htmlFor="message">Jūsu ziņa*</label>
                  <textarea
                    id="message"
                    type="text"
                    name="message"
                    className={message.error ? "alert-border" : ""}
                    onChange={e =>
                      setMessage({
                        ...message,
                        value: e.target.value,
                        error: "",
                      })
                    }
                  />
                  <p className="contacts-error-message">{message.error}</p>
                </div>

                <p className="contact-required">*Obligāti aizpildāmie lauki</p>
                <button className="contact-btn" type="submit">
                  Nosūtīt →
                </button>
              </form>
            </>
          ) : (
            <>
              <h1>Paldies!</h1>
              <h2>Jūsu ziņa veiksmīgi nosūtīta Solis Tīrībai!</h2>
              <h2>
                Atbildēsim tuvākajā laikā uz Jūsu norādītajiem kontaktiem!
              </h2>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ContactsPage
