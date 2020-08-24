import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import "./piemeri.scss"

import SofaBefore from "./../images/quality/1-sofa-before.jpg"
import SofaAfter from "./../images/quality/1-sofa-after.jpg"
import CarpetBefore from "./../images/quality/2-carpet-before.jpg"
import CarpetAfter from "./../images/quality/2-carpet-after.jpg"
import SeatBefore from "./../images/quality/3-seat-before.jpg"
import SeatAfter from "./../images/quality/3-seat-after.jpg"
import BedBefore from "./../images/quality/4-bed-before.jpg"
import BedAfter from "./../images/quality/4-bed-after.jpg"
import ChairBefore from "./../images/quality/5-chair-before.jpg"
import ChairAfter from "./../images/quality/5-chair-after.jpg"
import Sofa2Before from "./../images/quality/6-sofa-before.jpg"
import Sofa2After from "./../images/quality/6-sofa-after.jpg"

import ArrowRight from "./../images/arrow-right.png"

const QualityPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Piemēri | Solis Tīrībai</title>
      </Helmet>
      {/* 1 divans, 2 paklajs sedeklis gulta kresls divans */}
      <h1 className="quality-title">Paveiktie darbi:</h1>
      <div className="gallery-content">
        <div className="quality-box">
          <img className="quality-img" src={SofaBefore} alt="img" />
          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <img className="arrow-right" src={ArrowRight} alt="" />
        </div>
        <div className="quality-box">
          <img className="quality-img" src={SofaAfter} alt="img" />
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          <img className="quality-img" src={CarpetBefore} alt="img" />
          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <img className="arrow-right" src={ArrowRight} alt="" />
        </div>
        <div className="quality-box">
          <img className="quality-img" src={CarpetAfter} alt="img" />
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          <img className="quality-img" src={SeatBefore} alt="img" />
          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <img className="arrow-right" src={ArrowRight} alt="" />
        </div>
        <div className="quality-box">
          <img className="quality-img" src={SeatAfter} alt="img" />
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          <img className="quality-img" src={BedBefore} alt="img" />
          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <img className="arrow-right" src={ArrowRight} alt="" />
        </div>
        <div className="quality-box">
          <img className="quality-img" src={BedAfter} alt="img" />
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          <img className="quality-img" src={ChairBefore} alt="img" />
          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <img className="arrow-right" src={ArrowRight} alt="" />
        </div>
        <div className="quality-box">
          <img className="quality-img" src={ChairAfter} alt="img" />
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          <img className="quality-img" src={Sofa2Before} alt="img" />
          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <img className="arrow-right" src={ArrowRight} alt="" />
        </div>
        <div className="quality-box">
          <img className="quality-img" src={Sofa2After} alt="img" />
          <h3>Pēc</h3>
        </div>
      </div>
    </Layout>
  )
}

export default QualityPage
