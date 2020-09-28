import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import "./par-mums.scss"
import Tick from "./../images/icons/tick.png"

const AboutUsPage = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="lv" />
        <title>Par mums | Solis Tīrībai</title>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/lv_LV/sdk.js#xfbml=1&version=v8.0&appId=620075488933384&autoLogAppEvents=1"
          nonce="guDTfC4o"
        ></script>
      </Helmet>
      <div id="fb-root"></div>
      <div className="about-content">
        <div className="about-why">
          <h1 className="about-title">Kāpēc izvēlēties mūs?</h1>
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
        </div>
        <div className="about-image">
          <iframe
            title="iframe"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fanna.racenaja%2Fposts%2F10157588477866765&show_text=true&width=552&appId=620075488933384&height=175"
            style={{
              border: "none",
              overflow: "hidden",
              width: `552px`,
              height: "175px",
            }}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            data-adapt-container-width="true"
          ></iframe>

          <br />
          <br />
          <iframe
            title="iframe"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fanita.sornikova%2Fposts%2F668371253802675&show_text=true&width=552&appId=620075488933384&height=194"
            style={{
              border: "none",
              overflow: "hidden",
              width: "552px",
              height: "175px",
            }}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            data-adapt-container-width="true"
          ></iframe>
          <div style={{ contentAlign: "right" }}>
            <h3 style={{ marginTop: "20px" }}>
              <a href="https://www.facebook.com/solis.tiribai/reviews/?ref=page_internal">
                Lasīt pārējās atsauksmes
              </a>
            </h3>
          </div>
        </div>
      </div>

      <br />

      <h1 className="about-title">Solis Tīrībai klienti:</h1>

      <p className="about-clients-list">
        🔸 Privātpersonas 🔸 Restorāni 🔸 Banketu zāles 🔸 Internātskolas 🔸
        Skolas 🔸 Frizētavas 🔸 Skaistumkopšanas saloni 🔸 Fitnesa centri 🔸
        Autoservisi 🔸 Viesnīcas 🔸 Bērnudārzi 🔸 Viesu nami 🔸 u.c.
      </p>
    </Layout>
  )
}

export default AboutUsPage
