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

const ServicesPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Pakalpojumi | Solis Tīrībai</title>
      </Helmet>

      <h1 className="services-title">Mūsu pakalpojumi:</h1>
      <div className="services-content">
        <div className="services-box">
          <img className="services-img" src={SofaCleaning} alt="img" />
          <h3>Dīvānu tīrīšana</h3>
          {/* <p>Iznīcina putekļu ērcītes</p> */}
        </div>
        <div className="services-box">
          <img className="services-img" src={CarpetCleaning} alt="img" />
          <h3>Paklāju tīrīšana</h3>
          {/* <p>Lorem ipsum description</p> */}
        </div>
        <div className="services-box">
          <img className="services-img" src={ChairCleaning} alt="img" />
          <h3>Krēslu tīrīšana</h3>
          {/* <p>Lorem ipsum description</p> */}
        </div>
        <div className="services-box">
          <img className="services-img" src={MatressCleaning} alt="img" />
          <h3>Matraču tīrīšana</h3>
          {/* <p>Lorem ipsum description</p> */}
        </div>
        <div className="services-box">
          <img className="services-img" src={CarSeatCleaning} alt="img" />
          <h3>Auto sēdekļu tīrīšana</h3>
          {/* <p>Lorem ipsum description</p> */}
        </div>
        <div className="services-box">
          <img className="services-img" src={OverallCleaning} alt="img" />
          <h3>Tīrīšanas uz uzkopšanas pakalpojumi</h3>
          {/* <p>Lorem ipsum description</p> */}
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage
