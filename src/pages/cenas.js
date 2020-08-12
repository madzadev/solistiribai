import React from "react"
import Layout from "./../components/layout"

import "./cenas.scss"

const pricesPage = () => {
  return (
    <Layout>
      <h1 className="prices-title">Cenas</h1>
      <div className="prices-content">
        <div>
          <h4>Krēslu tīrīšana</h4>
          <p>
            Krēslu, biroja krēslu tīrīšana no 2.50€-5€, par vienību! Krēslu
            tīrīšanai 20% atlaide, ja skaits pārsniedz 25gb!
          </p>
        </div>
        <div>
          <h4>Dīvāna tīrīšana</h4>
          <p>
            Dīvāna tīrīšanas izmaksas atkarīgas no auduma materiāla un tīrības
            pakāpes, no 20€-65€, vai 9€-15€ (par sēdvietu).
          </p>
        </div>
        <div>
          <h4>Paklāju ķīmiskā vai mitrā- tīrīšana</h4>
          <p>
            -Segums tiek atīrīts no netīrumiem, drupatām, putekļiem -Traipi
            notīrās pilnībā vai kļūst maz pamanāmi -Tiek novērstas nepatīkamas
            smakas -Paklāja krāsas kļūst spilgtākas -Paklājs ir atguvis otru
            elpu
          </p>
        </div>
      </div>

      <br />
      <p>*Lai uzzinātu precīzākas cenas-nosūti foto!</p>
      <p>
        *Cenas atkarīgas no auduma materiāla un tīrības pakāpes, tādēļ ir ļooti
        atšķirīgas*
      </p>
    </Layout>
  )
}

export default pricesPage
