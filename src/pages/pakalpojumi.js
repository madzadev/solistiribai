import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

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
      <Helmet>
        <html lang="lv" />
        <title>Pakalpojumi | Solis Tīrībai</title>
        <description>Apraksts</description>
      </Helmet>

      <h1 className="services-title">Mūsu pakalpojumi:</h1>
      <div className="services-content">
        {/* <Img
          fluid={data.dog.childImageSharp.fluid}
          alt="This is a picture of my face."
        /> */}
        {data.allFile.edges.map((node, index) => (
          <div className="services-box">
            {/* <Img
              className="services-img"
              fluid={node.childImageSharp.fluid}
              alt="img"
            /> */}
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
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ServicesPage
