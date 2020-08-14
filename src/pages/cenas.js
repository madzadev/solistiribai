import React from "react"
import Layout from "./../components/layout"

import "./cenas.scss"

const pricesPage = () => {
  return (
    <Layout>
      <h1 className="prices-title">Izcenojumi:</h1>
      <div className="prices-content">
        <div>
          <h3 style={{ backgroundColor: "lightgrey", padding: "10px" }}>
            Krēslu tīrīšana
          </h3>
          <h1>2.50€ - 5€ par vienību</h1>
          <h1>20% atlaide no 20 gab.</h1>
        </div>
        <div>
          <h4 style={{ backgroundColor: "lightgrey" }}>
            Dīvāna, matraču tīrīšana
          </h4>
          <h1>20€ - 65€.</h1>
          <h1>vai 9€ - 15€ (par sēdvietu)</h1>
        </div>
        <div>
          <h4 style={{ backgroundColor: "lightgrey" }}>
            Paklāju ķīmiskā vai mitrā tīrīšana
          </h4>
          <h1>1.50€ - 6€ m2</h1>
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
