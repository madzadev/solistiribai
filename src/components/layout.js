import React from "react"
import NavBar from "./navbar"
import Footer from "./footer"

import "./../styles/index.scss"
import "./layout.scss"

const Layout = props => {
  return (
    <div className="page-wrapper">
      <NavBar />
      <div className="content-wrapper">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
