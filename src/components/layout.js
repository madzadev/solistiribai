import React from "react"
// import PageTransition from "gatsby-plugin-page-transitions"
import NavBar from "./navbar"
import Footer from "./footer"

import "./../styles/index.scss"
import "./layout.scss"

const Layout = props => {
  return (
    <div className="page-wrapper">
      {/* <PageTransition> */}
      <NavBar />
      <div className="content-wrapper">{props.children}</div>
      <Footer />
      {/* </PageTransition> */}
    </div>
  )
}

export default Layout
