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
  // Check if initial img load
  const isCached = src => {
    const image = new Image()
    image.src = src
    return image.complete
  }

  return (
    <Layout>
      <Helmet>
        <html lang="lv" />
        <title>Piemēri | Solis Tīrībai</title>
        <description>Apraksts</description>
      </Helmet>
      <h1 className="quality-title">Paveiktie darbi:</h1>
      <div className="gallery-content">
        <div className="quality-box">
          {isCached(SofaBefore) ? (
            <img className="quality-img" src={SofaBefore} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={SofaBefore}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
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
          {isCached(SofaAfter) ? (
            <img className="quality-img" src={SofaAfter} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={SofaAfter}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          {isCached(CarpetBefore) ? (
            <img className="quality-img" src={CarpetBefore} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={CarpetBefore}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
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
          {isCached(CarpetAfter) ? (
            <img className="quality-img" src={CarpetAfter} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={CarpetAfter}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          {isCached(SeatBefore) ? (
            <img className="quality-img" src={SeatBefore} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={SeatBefore}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
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
          {isCached(SeatAfter) ? (
            <img className="quality-img" src={SeatAfter} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={SeatAfter}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          {isCached(BedBefore) ? (
            <img className="quality-img" src={BedBefore} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={BedBefore}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
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
          {isCached(BedAfter) ? (
            <img className="quality-img" src={BedAfter} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={BedAfter}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          {isCached(ChairBefore) ? (
            <img className="quality-img" src={ChairBefore} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={ChairBefore}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
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
          {isCached(ChairAfter) ? (
            <img className="quality-img" src={ChairAfter} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={ChairAfter}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3>Pēc</h3>
        </div>
        <div className="quality-box">
          {isCached(Sofa2Before) ? (
            <img className="quality-img" src={Sofa2Before} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={Sofa2Before}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
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
          {isCached(Sofa2After) ? (
            <img className="quality-img" src={Sofa2After} alt="img" />
          ) : (
            <ReactImageAppear
              className="quality-img"
              src={Sofa2After}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3>Pēc</h3>
        </div>
      </div>
    </Layout>
  )
}

export default QualityPage
