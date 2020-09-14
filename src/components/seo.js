import React from "react"
import Helmet from "react-helmet"

function SEO(props) {
  return (
    <Helmet>
      <html lang="lv" />
      <title>{props.title}</title>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://solistiribai.netlify.app/" />
      <meta property="og:title" content="Solis Tīrībai" />
      <meta
        property="og:description"
        content="Tīrīšanas un uzkopšanas pakalpojumi, Mēbeļu, paklāju ķīmiskā tīrīšana"
      />
      <meta property="og:image" content="/static/media-card.jpg" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://solistiribai.netlify.app/"
      />
      <meta property="twitter:title" content="Solis Tīrībai" />
      <meta
        property="twitter:description"
        content="Tīrīšanas un uzkopšanas pakalpojumi, Mēbeļu, paklāju ķīmiskā tīrīšana"
      />
      <meta property="twitter:image" content="/static/media-card.jpg" />
    </Helmet>
  )
}

export default SEO
