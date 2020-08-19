import React, { useState } from "react"
import { Link } from "gatsby"
import navLogo from "./../images/mop.png"
import navToggle from "./../images/navbar/hamburger.png"

import "./navbar.scss"

const NavBar = () => {
  let [openState, setOpenState] = useState(false)

  const onClickHandler = () => {
    console.log("Clicked")
    setOpenState(!openState)
  }

  return (
    <nav className="navbar-wrapper">
      <div className="logo-wrapper">
        <Link style={{ float: "left" }} className="navbar-logo" to="/">
          <span>
            <img
              src={navLogo}
              alt="icon"
              style={{
                width: "50px",
                overflow: "hidden",
              }}
            />
          </span>
        </Link>
        <span>
          <h1>SOLIS</h1>
          <h1>TĪRĪBAI</h1>
        </span>
      </div>
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
          to="/kvalitate"
        >
          Kvalitāte
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
