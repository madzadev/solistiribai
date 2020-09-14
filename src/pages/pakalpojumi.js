import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "./../components/seo"
import Layout from "../components/layout"
import "./pakalpojumi.scss"

const ServicesPage = ({ data }) => {
  const services = [
    "Dīvānu tīrīšana",
    "Paklāju tīrīšana",
    "Krēslu tīrīšana",
    "Matraču tīrīšana",
    "Auto sēdekļu tīrīšana",
    "Tīrīšanas uz uzkopšanas pakalpojumi",
  ]

  return (
    <Layout>
      {
        <SEO
          title="Pakalpojumi | Solis Tīrībai"
          description="Tīrīšanas un uzkopšanas pakalpojumi, Mēbeļu, paklāju ķīmiskā tīrīšana"
        />
      }
      {/* <Helmet>
        <html lang="lv" />
        <title>Pakalpojumi | Solis Tīrībai</title>
        <description>Apraksts</description>
      </Helmet> */}

      <h1 className="services-title">Mūsu pakalpojumi:</h1>
      <div className="services-content">
        {data.allFile.edges.map((el, index) => (
          <div className="services-box" key={index}>
            <Img
              className="services-img"
              fluid={el.node.childImageSharp.fluid}
              alt="img"
              backgroundColor="#F4F4F4"
              fadeIn={true}
              durationFadeIn="500"
            />
            <h3 className="services-img-title">{services[index]}</h3>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(
      filter: { relativePath: {}, relativeDirectory: { eq: "services" } }
      sort: { fields: [base] }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`

export default ServicesPage
