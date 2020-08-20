import React from "react"
import Helmet from "react-helmet"

import Layout from "./../components/layout"

const errorPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Kļūda 404 | Solis Tīrībai</title>
      </Helmet>
      <h1>Atvainojiet Jūs meklētā lapa ir dzēsta vai pārvietota!</h1>
    </Layout>
  )
}

export default errorPage
