import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import BackgroundImg from "./../images/444.jpg"

import Layout from "./../components/layout"
import "./index.scss"

const bgColors = ["#FBFBFB", "#F0F0F0"]

const HomePage = () => {
  // Img load check
  const useProgressiveImage = src => {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
      const img = new Image()
      img.src = src
      img.onload = () => setSourceLoaded(src)
    }, [src])

    return sourceLoaded
  }

  // Get screen width, to decide wether to show hero img
  const [width, setWidth] = useState(window.innerWidth)
  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  console.log(width)

  return (
    <div
      className="hero-wrapper"
      style={{
        width: "100%",
        backgroundColor: `${bgColors[0]}`,
        backgroundImage: `url(${useProgressiveImage(BackgroundImg)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Layout>
        <Helmet>
          <html lang="lv" />
          <title>Sākums | Solis Tīrībai</title>
          <description>Apraksts</description>
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
