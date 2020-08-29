import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import { lazyload } from "react-lazyload"

import Placeholder from "./../images/4_1.jpg"
import BackgroundImg from "./../images/4.jpg"

import Placeholder2 from "./../images/111_1.jpg"
import BackgroundImg2 from "./../images/111.jpg"

import Layout from "./../components/layout"
import "./index.scss"

// import { LazyLoadImage } from "react-lazy-load-image-component"

// import image from "./../images/hero-img.png"
// import Slideshow from "./../components/slideshow"

const random = Math.floor(Math.random() * 2)

const images = [BackgroundImg, BackgroundImg2]
const placeholders = [Placeholder, Placeholder2]
const bgColors = ["#FBFBFB", "#F0F0F0"]

const HomePage = () => {
  const useProgressiveImage = src => {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
      const img = new Image()
      img.src = src
      img.onload = () => setSourceLoaded(src)
    }, [src])

    return sourceLoaded
  }

  return (
    <div
      className="hero-wrapper"
      style={{
        width: "100%",
        backgroundColor: `${bgColors[random]}`,
        backgroundImage: `url(${useProgressiveImage(images[random])})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
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
