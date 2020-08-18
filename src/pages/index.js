import React from "react"
import { Link } from "gatsby"
import Layout from "./../components/layout"
import image from "./../images/hero-img.png"
// import Slideshow from "./../components/slideshow"

import "./index.scss"

const homePage = () => {
  return (
    <Layout>
      <div className="hero-content">
        <div>
          <h1 className="hero-title">
            Tīrīšanas un uzkopšanas pakalpojumi, Mēbeļu, paklāju ķīmiskā
            tīrīšana
          </h1>

          <p>
            Īstā izvēle, lai Jums apkārt atkal atgrieztos tīrība un svaigums!
          </p>
          <p>Garantējam izpildītā darba kvalitāti!</p>

          <br />
          <p>Sadarbojamies ar privātpersonām un uzņēmumiem</p>
          <p>Nodrošinām izbraukšanu pie klienta dzīvesvietā</p>

          <Link to="/par-mums" className="hero-btn first">
            Uzzināt vairāk
          </Link>
          <Link to="/kontakti" className="hero-btn">
            Pieteikt tīrīšanu →
          </Link>
        </div>
        <div className="hero-img-panel">
          <img src={image} className="hero-img" alt="img" />
          {/* <SlideShow /> */}
        </div>
      </div>
    </Layout>
  )
}

export default homePage
