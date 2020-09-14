import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "./../components/seo"
import Layout from "../components/layout"
import "./piemeri.scss"

const QualityPage = ({ data }) => {
  return (
    <Layout>
      {<SEO title="Piemēri" />}
      {/* <Helmet>
        <html lang="lv" />
        <title>Piemēri | Solis Tīrībai</title>
        <description>Apraksts</description>
      </Helmet> */}
      <h1 className="quality-title">Paveiktie darbi:</h1>
      <div className="gallery-content">
        {data.allFile.edges.map((el, index) => (
          <>
            <div className="quality-box">
              <Img
                className="quality-img"
                fluid={el.node.childImageSharp.fluid}
                alt="img"
                backgroundColor="#F4F4F4"
                fadeIn={true}
                durationFadeIn="2000"
              />
              {index % 2 === 0 ? <h3>Pirms</h3> : <h3>Pēc</h3>}
            </div>
            {index % 2 === 0 && (
              <div className="arrow-box">
                <h4>Solis Tīrībai</h4>
                <Img
                  className="arrow-right"
                  fluid={data.file.childImageSharp.fluid}
                  alt="img"
                />
              </div>
            )}
          </>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(
      filter: { relativePath: {}, relativeDirectory: { eq: "quality" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    file(relativePath: { eq: "arrow.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default QualityPage
