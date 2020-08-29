import React from "react"
import Helmet from "react-helmet"

import ReactImageAppear from "react-image-appear"

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
  const isCached = src => {
    const image = new Image()
    image.src = src

    return image.complete
  }
  return (
    <Layout>
      <Helmet>
        <title>Piemēri | Solis Tīrībai</title>
      </Helmet>
      <h1 className="quality-title">Paveiktie darbi:</h1>
      <div className="gallery-content">
        <div className="quality-box">
          {isCached(Sofa2Before) ? (
            <img className="quality-img" src={SofaBefore} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={SofaBefore}
              alt="img"
              placeholder={false}
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation={false}
            />
          )}

          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <ReactImageAppear
            className="arrow-right"
            src={ArrowRight}
            alt=""
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
        </div>
        <div className="quality-box">
          <ReactImageAppear
            className="quality-img"
            src={SofaAfter}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          <ReactImageAppear
            className="quality-img"
            src={CarpetBefore}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <ReactImageAppear
            className="arrow-right"
            src={ArrowRight}
            alt=""
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
        </div>
        <div className="quality-box">
          <ReactImageAppear
            className="quality-img"
            src={CarpetAfter}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          <ReactImageAppear
            className="quality-img"
            src={SeatBefore}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <ReactImageAppear
            className="arrow-right"
            src={ArrowRight}
            alt=""
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
        </div>
        <div className="quality-box">
          <ReactImageAppear
            className="quality-img"
            src={SeatAfter}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          <ReactImageAppear
            className="quality-img"
            src={BedBefore}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <ReactImageAppear
            className="arrow-right"
            src={ArrowRight}
            alt=""
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
        </div>
        <div className="quality-box">
          <ReactImageAppear
            className="quality-img"
            src={BedAfter}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          <ReactImageAppear
            className="quality-img"
            src={ChairBefore}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <ReactImageAppear
            className="arrow-right"
            src={ArrowRight}
            alt=""
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
        </div>
        <div className="quality-box">
          <ReactImageAppear
            className="quality-img"
            src={ChairAfter}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          <ReactImageAppear
            className="quality-img"
            src={Sofa2Before}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3>Pirms</h3>
        </div>
        <div className="arrow-box">
          <h4>Solis Tīrībai</h4>
          <ReactImageAppear
            className="arrow-right"
            src={ArrowRight}
            alt=""
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
        </div>
        <div className="quality-box">
          <ReactImageAppear
            className="quality-img"
            src={Sofa2After}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3>Pēc</h3>
        </div>
      </div>
    </Layout>
  )
}

export default QualityPage
