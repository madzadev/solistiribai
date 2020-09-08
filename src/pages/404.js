import React from "react"
import Helmet from "react-helmet"

import Layout from "./../components/layout"

const ErrorPage = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="lv" />
        <title>Kļūda 404 | Solis Tīrībai</title>
        <description>Apraksts</description>
      </Helmet>
      <h1>Atvainojiet Jūs meklētā lapa ir dzēsta vai pārvietota!</h1>
    </Layout>
  )
}

export default ErrorPage
