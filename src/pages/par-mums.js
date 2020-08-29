import React, { useLayoutEffect, useState, useEffect } from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import "./par-mums.scss"
import Tick from "./../images/tick.png"
import Mother from "./../images/mother.png"
import School from "./../images/school.png"

// import aboutImage from "./../images/cleaner-girl.png"

const AboutUsPage = () => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // useEffect(() => {
  //   // window.FB.XFBML.parse()
  //   // console.log("fired")
  // // }, [size])

  // window.FB.XFBML.parse()
  // console.log(size)

  console.log(size[0])
  return (
    <Layout>
      <Helmet>
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
          <iframe
            id="aa"
            className="www"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fineta.dzerina1%2Fposts%2F1767488250055287&show_text=true&width=552&appId=620075488933384&height=175"
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
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fanita.ozolina.37454%2Fposts%2F159073862008658&show_text=true&width=552&appId=620075488933384&height=137"
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
          ></iframe>
        </div>
      </div>

      <br />

      <h1 className="about-title">Solis Tīrībai klienti:</h1>
      {/* <div className="about-clients-wrapper">
        <div className="about-clients-box">
          <img src={Mother} alt="" />
          <p>Privātpersonas</p>
        </div>
        <div className="about-clients-box">
          {" "}
          <img src={School} alt="" />
          <p>Skolas</p>
        </div>
        <div className="about-clients-box">
          {" "}
          <img src={Tick} alt="" />
          <p>Viesnīcas</p>
        </div>
        <div className="about-clients-box">
          {" "}
          <img src={Tick} alt="" />
          <p>Sporta centri</p>
        </div>
        <div className="about-clients-box">
          {" "}
          <img src={Tick} alt="" />
          <p>Auto servisi</p>
        </div>
        <div className="about-clients-box">
          {" "}
          <img src={Tick} alt="" />
          <p>u.c.</p>
        </div>
      </div> */}

      <p>
        🔸 privātpersonas 🔸 restorāni 🔸 banketu zāles 🔸 internātskolas 🔸
        skolas 🔸 frizētavas 🔸 skaistumkopšanas saloni 🔸 fitnesa centri 🔸
        autoservisi 🔸 viesnīcas 🔸 bērnudārzi 🔸 viesu nami 🔸 u.c.
      </p>
    </Layout>
  )
}

export default AboutUsPage
