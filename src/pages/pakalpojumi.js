import React from "react"
import Helmet from "react-helmet"
import ReactImageAppear from "react-image-appear"

import Layout from "../components/layout"
import "./pakalpojumi.scss"

import SofaCleaning from "./../images/services/sofa-cleaning.jpg"
import CarpetCleaning from "./../images/services/carpet-cleaning.jpg"
import ChairCleaning from "./../images/services/chair-cleaning.jpg"
import MatressCleaning from "./../images/services/mattress-cleaning.jpg"
import CarSeatCleaning from "./../images/services/car-seat-cleaning.jpg"
import OverallCleaning from "./../images/services/overall-cleaning.jpg"

const ServicesPage = () => {
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
        <title>Pakalpojumi | Solis Tīrībai</title>
        <description>Apraksts</description>
      </Helmet>

      <h1 className="services-title">Mūsu pakalpojumi:</h1>
      <div className="services-content">
        <div className="services-box">
          {isCached(SofaCleaning) ? (
            <img className="services-img" src={SofaCleaning} alt="img" />
          ) : (
            <ReactImageAppear
              className="services-img"
              src={SofaCleaning}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3 className="services-img-title">Dīvānu tīrīšana</h3>
        </div>
        <div className="services-box">
          {isCached(CarpetCleaning) ? (
            <img className="services-img" src={CarpetCleaning} alt="img" />
          ) : (
            <ReactImageAppear
              className="services-img"
              src={CarpetCleaning}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3 className="services-img-title">Paklāju tīrīšana</h3>
        </div>
        <div className="services-box">
          {isCached(ChairCleaning) ? (
            <img className="services-img" src={ChairCleaning} alt="img" />
          ) : (
            <ReactImageAppear
              className="services-img"
              src={ChairCleaning}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3 className="services-img-title">Krēslu tīrīšana</h3>
        </div>
        <div className="services-box">
          {isCached(MatressCleaning) ? (
            <img className="services-img" src={MatressCleaning} alt="img" />
          ) : (
            <ReactImageAppear
              className="services-img"
              src={MatressCleaning}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3 className="services-img-title">Matraču tīrīšana</h3>
        </div>
        <div className="services-box">
          {isCached(CarSeatCleaning) ? (
            <img className="services-img" src={CarSeatCleaning} alt="img" />
          ) : (
            <ReactImageAppear
              className="services-img"
              src={CarSeatCleaning}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3 className="services-img-title">Auto sēdekļu tīrīšana</h3>
        </div>
        <div className="services-box">
          {isCached(OverallCleaning) ? (
            <img className="services-img" src={OverallCleaning} alt="img" />
          ) : (
            <ReactImageAppear
              className="services-img"
              src={OverallCleaning}
              alt="img"
              placeholder="none"
              placeholderStyle={{
                backgroundColor: "white",
              }}
              animation="fadeIn"
            />
          )}
          <h3 className="services-img-title">
            Tīrīšanas uz uzkopšanas pakalpojumi
          </h3>
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage
