import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import BackgroundImage from "gatsby-background-image"

import BackgroundImg from "./../images/444.jpg"

import Layout from "./../components/layout"
import "./index.scss"

const HomePage = ({ data }) => {
  // Img load check
  // const useProgressiveImage = src => {
  //   const [sourceLoaded, setSourceLoaded] = useState(null)

  //   useEffect(() => {
  //     const img = new Image()
  //     img.src = src
  //     img.onload = () => setSourceLoaded(src)
  //   }, [src])

  //   return sourceLoaded
  // }

  // Get screen width, to decide wether to show hero img

  const [width, setWidth] = useState(null)

  useEffect(() => {
    // set width on initial load
    setWidth(window.innerWidth)
    console.log(window.innerWidth)
    // update on screen changes
    const updateDimensions = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  })

  return (
    <BackgroundImage
      className="hero-wrapper"
      // style={{
      //   width: "100%",
      //   backgroundColor: `#FBFBFB`,
      //   backgroundImage: `url(${width > 540 ? BackgroundImg : ""})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   height: "100%",
      //   backgroundRepeat: "no-repeat",
      //   backgroundAttachment: "fixed",
      // }}
      fluid={data.file.childImageSharp.fluid}
      backgroundColor="#FBFBFB"
      backgroundSize="cover"
      backgroundPosition="center"
      durationFadeIn={1000}
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
          <div className="hero-img-panel"></div>
        </div>
        <Link to="/par-mums" className="hero-btn first">
          Uzzināt vairāk
        </Link>
        <Link to="/kontakti" className="hero-btn">
          Pieteikt tīrīšanu →
        </Link>
      </Layout>
    </BackgroundImage>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "444.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5760, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

export default HomePage
