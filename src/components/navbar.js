import React, { useState } from "react"
import { Link } from "gatsby"
import navLogo from "./../images/navbar/logo6.png"
import navToggle from "./../images/navbar/hamburger.png"

import "./navbar.scss"

const NavBar = () => {
  let [openState, setOpenState] = useState(false)

  const onClickHandler = () => {
    setOpenState(!openState)
  }

  return (
    <nav className="navbar-wrapper">
      <Link
        style={{ float: "left", textDecoration: "none" }}
        className="navbar-logo"
        to="/"
      >
        <div className="logo-wrapper">
          <span>
            <img
              src={navLogo}
              alt="icon"
              style={{
                width: "60px",
                overflow: "hidden",
              }}
            />
          </span>
          <span className="logo-name-wrapper">
            <h1>SOLIS</h1>
            <h1>TĪRĪBAI</h1>
          </span>
        </div>
      </Link>
      {/* <span>
        <p>📞 Tel. (+371) 26 364 882</p>
        <p>
          📧 E-pasts:
          <a href="mailto: solis.tiribai@gmail.com">solis.tiribai@gmail.com</a>
        </p>
      </span> */}
      <div className={openState ? "navbar-link-wrapper" : ""}>
        <Link
          to="#"
          className={openState ? "navbar-link opened" : "navbar-link hiding"}
          onClick={onClickHandler}
        >
          <img src={navToggle} alt="navToggle" style={{ width: "30px" }} />
        </Link>
        <Link
          className={openState ? "navbar-link opened" : "navbar-link"}
          activeClassName="navbar-link-active"
          to="/par-mums"
        >
          Par mums
        </Link>
        <Link
          className={openState ? "navbar-link opened" : "navbar-link"}
          activeClassName="navbar-link-active"
          to="/pakalpojumi"
        >
          Pakalpojumi
        </Link>
        <Link
          className={openState ? "navbar-link opened" : "navbar-link"}
          activeClassName="navbar-link-active"
          to="/cenas"
        >
          Cenas
        </Link>
        <Link
          className={openState ? "navbar-link opened" : "navbar-link"}
          activeClassName="navbar-link-active"
          to="/piemeri"
        >
          Piemēri
        </Link>
        <Link
          className={openState ? "navbar-link opened" : "navbar-link"}
          activeClassName="navbar-link-active"
          to="/kontakti"
        >
          Kontakti
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
