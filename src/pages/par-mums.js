import React from "react"
import Layout from "../components/layout"
import "./par-mums.scss"
import Tick from "./../images/tick.png"
import Truck from "./../images/truck.png"
import People from "./../images/people.png"
import TestimonialCard from "./../components/testimonial"

import aboutImage from "./../images/cleaner-girl.png"

const aboutUsPage = () => {
  return (
    <Layout>
      <div className="about-content">
        <div className="about-why">
          <h1 className="about-title">Kāpēc izvēlēties Solis Tīrībai?</h1>
          <div className="about-reason">
            <img src={Tick} alt="" />
            <p>Veicam ķīmisko un mitro tīrīšanu</p>
          </div>
          <div className="about-reason">
            <img src={Tick} alt="" />
            <p>Individuāla pieeja katram klientam</p>
          </div>
          <div className="about-reason">
            <img src={Tick} alt="" />
            <p>Savu darbu izpildām rūpīgi un atbildīgi</p>
          </div>

          <div className="about-reason">
            <img src={Tick} alt="" />
            <p>Iztīrām dažādas grūtības pakāpes traipus</p>
          </div>
          <div className="about-reason">
            <img src={Tick} alt="" />
            <p>
              Strādājam ar antialerģiskiem, cilvēkiem un dzīvniekiem nekaitīgiem
              tīrīšanas līdzekļiem
            </p>
          </div>
          <div className="about-reason">
            <img src={Tick} alt="" />
            <p>Dezinfekcija - pēc klienta vēlēšanās</p>
          </div>

          {/* <div className="about-reason">
            <img src={People} alt="" />
            <p>
              Sadarbojamies ar privātpersonām un uzņēmumiem, tai skaitā skolām,
              viesnīcām, restorāniem, autoservisiem, uc.
            </p>
          </div>

          <div className="about-reason">
            <img src={Truck} alt="" />
            <p>Bezmaksas izbraukšana pie klienta dzīvesvietā</p>
          </div> */}
        </div>
        <div className="about-image">
          <img className="aboutImg" src={aboutImage} alt="img" />
        </div>
      </div>

      <br />

      {/* <h1 className="about-title">Solis Tīrībai atsauksmes:</h1>
      <TestimonialCard />
      <p>
        🔸 privātpersonas, 🔸bērnudārzi; - 🔸restorāni; - 🔸banketu zāles; -
        🔸internātskolas; - 🔸skolas; - 🔸frizētavas; - 🔸skaistumkopšanas
        saloni; - 🔸fitnesa centri; - 🔸pirtis; - 🔸autoservisi; - 🔸viesnīcas;
        - 🔸viesu nami u.c.
      </p> */}
    </Layout>
  )
}

export default aboutUsPage
