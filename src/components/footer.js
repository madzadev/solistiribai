import React from "react"
import "./footer.scss"
import Email from "./../images/contacts/email.png"
import Phone from "./../images/contacts/phone.png"
import WhatsApp from "./../images/contacts/whatsapp.png"
import Facebook from "./../images/contacts/facebook.png"

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <p>
        Tel.{" "}
        <a className="contacts-link" href="tel:+37126364882">
          (+371) 26 364 882
        </a>
        , E-pasts:{" "}
        <a className="contacts-link" href="mailto: solis.tiribai@gmail.com">
          solis.tiribai@gmail.com
        </a>
      </p>
      <p>solistiribai.netlify.app, 2020</p>
      {/* <a href="https://api.whatsapp.com/send?phone=37126364882">
        <img className="footer-img" src={Email} alt="img" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=37126364882">
        <img className="footer-img" src={Phone} alt="img" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=37126364882">
        <img className="footer-img" src={WhatsApp} alt="img" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=37126364882">
        <img className="footer-img" src={Facebook} alt="img" />
      </a>
      <p>Solis Tīrībai, 2020</p> */}
    </div>
  )
}

export default Footer
