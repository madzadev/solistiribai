import React from "react"
import Helmet from "react-helmet"

import Layout from "./../components/layout"

const errorPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Kļūda 404 | Solis Tīrībai</title>
      </Helmet>
      <h1>Sry, this page does not exist!</h1>
    </Layout>
  )
}

export default errorPage
