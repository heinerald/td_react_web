import React from "react";
import background from "../assets/img/banner_testing.jpg";
import cobertura from "../assets/img/cobertura.png";
import logo from "../assets/img/logo3.svg";


function contact() {
  return (
    <div>
      <div
        className="py-5 text-center parallax cover gradient-dark"
        style={{
          backgroundImage: `url(${background})`,
          position: "relative",
          BackgroundPosition: "50% calc(50% + 0px)",
          backgroundSize: "cover",
          filter: "opacity(100%)",
        }}
      >
        <div className="container d-flex flex-column">
          <div className="row my-auto">
            <div className="col-md-12 text-white my-5">
              <img className="mb-5" src={logo} width="70" style={{opacity: 0.5}}/>
            </div>
          </div>

          <div
            className="container-fluid page-header mb-3 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="container text-center">
              <h1 className="display-4 text-secondary animated slideInDown mb-4">
                CONTACTO
              </h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Home
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Contact Us
              </div>
              <h1 className="display-6 mb-3">
                Contáctanos para más información
              </h1>
              <label htmlFor="">
                Escribenos al correo:
                <a href="mailto:administracion@telenetdigital.net.co?Subject=Aquí%20el%20asunto%20del%20mail">
                  {" "}
                  administracion@telenetdigital.net.co
                </a>
              </label>
              <br />
              <label htmlFor="">
                Teléfono de contacto y whatsapp: +57 3209900025{" "}
              </label>
              <br />
              <br />
              <h1 className="display-6 mb-3">Cobertura</h1>
              <label htmlFor="" style={{ textAlign: "justify" }}>
                La cobertura del servicio está sujeta a nuevos cambios que se
                realicen en la red a lo largo del tiempo, la distribución
                compartida es para usuarios finales! Si desea conocer acerca de
                la cobertura para empresas ISP puede comunicarse con nosotros
                para servicios dedicados.
              </label>
              <br />
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="position-relative rounded overflow-hidden h-100">
                <img
                  className="avatar"
                  src={cobertura}
                  style={{ height: 350 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
