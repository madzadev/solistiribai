import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

import Layout from "./../components/layout"
import "./index.scss"

const HomePage = ({ data }) => {
  const [width, setWidth] = useState(null)

  useEffect(() => {
    // set width on initial load
    setWidth(window.innerWidth)
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
      // fadeIn="soft"
      // durationFadeIn={1000}
      // ref={bgRef}
      // onStartLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
      // onLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
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
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5760, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

export default HomePage
