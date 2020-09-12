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
        {data.allImageSharp.edges.map((edge, index) => (
          <div className="services-box">
            <Img className="services-img" fluid={edge.node.fluid} alt="img" />
            <h3 className="services-img-title">{services[index]}</h3>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default ServicesPage
