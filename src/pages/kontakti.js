import React from "react"
import Helmet from "react-helmet"

import Layout from "./../components/layout"
import "./kontakti.scss"

import WhatsApp from "./../images/contacts/whatsapp.png"
import Facebook from "./../images/contacts/facebook.png"

const contactsPage = () => {
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
            <p>Telefons: (+371) 26 364 882</p>
            <br />
            {/* <h3>Nosūti foto WhatsApp un uzzini cenu!</h3> */}
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

            {/* <h3>Rakstīt mums Facebook</h3>
            <p>Parasti atbildam pāris stundu laikā</p> */}
            {/* <FBGroup /> */}
          </div>

          {/* <h1 className="contacts-title">Darba laiks</h1>
          <p>Mēs sniedzam individuālu pieeju katram klientam.</p>
          <p>
            Pakalpojumu sniegšanas laiks tiek saskaņots ar katru klientu
            atsevišķi.
          </p> */}
        </div>
        <div>
          <h1 className="contacts-title">Nosūtīt e-pastu</h1>
          <form action="post">
            <label htmlFor="name">Vārds*</label>
            <input type="text" />

            <label htmlFor="name">E-pasts*</label>
            <input type="text" />

            <label htmlFor="name">Telefons</label>
            <input type="text" />

            <label htmlFor="name">Jūsu ziņa*</label>
            <textarea type="text" />

            <button className="contact-btn">Nosūtīt →</button>
          </form>

          <p>*Obligāti aizpildāmie lauki</p>
        </div>
      </div>
    </Layout>
  )
}

export default contactsPage
