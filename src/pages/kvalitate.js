import React from "react"
import Layout from "../components/layout"

import "./kvalitate.scss"

const galleryPage = () => {
  return (
    <Layout>
      <h1>Paveiktie darbi:</h1>
      <div className="gallery-content">
        <div className="quality-box">
          <h3>Pirms</h3>
          <img
            className="quality-img"
            src="https://source.unsplash.com/random/400x200"
            alt="img"
          />
        </div>
        <div className="quality-box">
          <h3>Pēc</h3>
          <img
            className="quality-img"
            src="https://source.unsplash.com/random/400x200"
            alt="img"
          />
        </div>
        <div className="quality-box">
          <h3>Pirms</h3>
          <img
            className="quality-img"
            src="https://source.unsplash.com/random/400x200"
            alt="img"
          />
        </div>
        <div className="quality-box">
          <h3>Pēc</h3>
          <img
            className="quality-img"
            src="https://source.unsplash.com/random/400x200"
            alt="img"
          />
        </div>
        <div className="quality-box">
          <h3>Pirms</h3>
          <img
            className="quality-img"
            src="https://source.unsplash.com/random/400x200"
            alt="img"
          />
        </div>
        <div className="quality-box">
          <h3>Pēc</h3>
          <img
            className="quality-img"
            src="https://source.unsplash.com/random/400x200"
            alt="img"
          />
        </div>
      </div>
    </Layout>
  )
}

export default galleryPage