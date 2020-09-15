import React from "react"
import { Link, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

import SEO from "./../components/seo"
import Layout from "./../components/layout"
import "./index.scss"

const HomePage = ({ data }) => {
  return (
    <BackgroundImage
      className="hero-wrapper"
      fluid={data.file.childImageSharp.fluid}
      backgroundColor="#FBFBFB"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Layout>
        {
          <SEO
            title="Solis Tīrībai"
            description="Tīrīšanas un uzkopšanas pakalpojumi, Mēbeļu, paklāju ķīmiskā tīrīšana"
          />
        }
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
