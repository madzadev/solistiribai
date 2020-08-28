import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "./../components/layout"
import "./index.scss"

// import image from "./../images/hero-img.png"
// import Slideshow from "./../components/slideshow"

const HomePage = () => {
  return (
    <div className="hero-wrapper">
      <Layout>
        <Helmet>
          <title>Sākums | Solis Tīrībai</title>
        </Helmet>

        <div className="hero-content">
          <div>
            <h1 className="hero-title">
              Tīrīšanas un uzkopšanas pakalpojumi, Mēbeļu, paklāju ķīmiskā
              tīrīšana
            </h1>

            <p className="hero-description-bold">
              Īstā izvēle, lai Jums apkārt atgrieztos tīrība un svaigums!
            </p>

            <br />
            <p className="hero-description">
              Sadarbojamies ar privātpersonām un uzņēmumiem!
            </p>
            <p className="hero-description">
              Nodrošinām izbraukšanu pie klienta dzīvesvietā!
            </p>
          </div>
          <div className="hero-img-panel">
            {/* <img src={image} className="hero-img" alt="img" /> */}
            {/* <SlideShow /> */}
          </div>
        </div>
        <Link to="/par-mums" className="hero-btn first">
          Uzzināt vairāk
        </Link>
        <Link to="/kontakti" className="hero-btn">
          Pieteikt tīrīšanu →
        </Link>
      </Layout>
    </div>
  )
}

export default HomePage
