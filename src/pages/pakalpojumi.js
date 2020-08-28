import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import "./pakalpojumi.scss"

import SofaCleaning from "./../images/services/sofa-cleaning.jpg"
import CarpetCleaning from "./../images/services/carpet-cleaning.jpg"
import ChairCleaning from "./../images/services/chair-cleaning.jpg"
import MatressCleaning from "./../images/services/mattress-cleaning.jpg"
import CarSeatCleaning from "./../images/services/car-seat-cleaning.jpg"
import OverallCleaning from "./../images/services/overall-cleaning.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component"
// import "react-lazy-load-image-component/src/effects/blur.css"
import ReactImageAppear from "react-image-appear"

const ServicesPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Pakalpojumi | Solis Tīrībai</title>
      </Helmet>

      <h1 className="services-title">Mūsu pakalpojumi:</h1>
      <div className="services-content">
        <div className="services-box">
          <ReactImageAppear
            className="services-img"
            src={SofaCleaning}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3 className="services-img-title">Dīvānu tīrīšana</h3>
          {/* <p>Iznīcina putekļu ērcītes</p> */}
        </div>
        <div className="services-box">
          <ReactImageAppear
            className="services-img"
            src={CarpetCleaning}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3 className="services-img-title">Paklāju tīrīšana</h3>
          {/* <p>Lorem ipsum description</p> */}
        </div>
        <div className="services-box">
          <ReactImageAppear
            className="services-img"
            src={ChairCleaning}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3 className="services-img-title">Krēslu tīrīšana</h3>
          {/* <p>Lorem ipsum description</p> */}
        </div>
        <div className="services-box">
          <ReactImageAppear
            className="services-img"
            src={MatressCleaning}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3 className="services-img-title">Matraču tīrīšana</h3>
          {/* <p>Lorem ipsum description</p> */}
        </div>
        <div className="services-box">
          <ReactImageAppear
            className="services-img"
            src={CarSeatCleaning}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3 className="services-img-title">Auto sēdekļu tīrīšana</h3>
          {/* <p>Lorem ipsum description</p> */}
        </div>
        <div className="services-box">
          <ReactImageAppear
            className="services-img"
            src={OverallCleaning}
            alt="img"
            placeholderStyle={{
              backgroundColor: "white",
            }}
            animation="none"
          />
          <h3 className="services-img-title">
            Tīrīšanas uz uzkopšanas pakalpojumi
          </h3>
          {/* <p>Lorem ipsum description</p> */}
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage
