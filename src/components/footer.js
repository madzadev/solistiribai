import React from "react"
import "./footer.scss"

const Footer = () => {
  const getYear = () => new Date().getFullYear()
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
      <p>solistiribai.lv, {getYear()}</p>
    </div>
  )
}

export default Footer
