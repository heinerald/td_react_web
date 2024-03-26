import React from "react";
import background from "../assets/img/banner_internet.png";

function internet() {
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
              {/* <img className="mb-5" src="../../../assets/img/img/logo3.svg" width="70" style=" opacity: 0.5;"> */}
            </div>
          </div>

          <div
            className="container-fluid page-header mb-3 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="container text-center">
              <h1 className="display-4 text-white animated slideInDown mb-4">
                Internet
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
          <div className="row g-5" style={{ textAlign: "justify" }}>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                <h4>Internet</h4>
              </div>
              <p>
                Que es ? como fuciona ?
                <br />
                <q>
                  Empresa de telecomunicacioens (
                  <a href="#">
                    telenet digital,2024
                  </a>
                  ) 
                </q>
              </p>

              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                <h4>Medios de transmision</h4>
              </div>
              <p>
                Guirados , no Guiados <br />
                <q>
                  Empresa de telecomunicaciones (
                  <a href="#">
                  telenet digital,2024
                  </a>
                  )
                </q>
              </p>

              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                <h4>Pruebas confiables</h4>
              </div>
              <p>
                Estgandar tia, RFC y software seguro<br />
                <q>
                  Telenet Digital (
                  <a href="#">
                    Telent Digital, 2024
                  </a>
                  )
                </q>
              </p>
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="position-relative rounded overflow-hidden h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  <h4>Sistema de monitoreo</h4>
                </div>
                <p>
                  sistema de monitoreo donde se comparte datos al cliente de su servicio
                  <br />
                  <q>
                    Proximamente (<a href="#">2026</a>)
                  </q>
                </p>

                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  <h4>Otros</h4>
                </div>
                <p>
                  Otros. <br />
                  <q>
                    Proximamente (<a href="#">2026</a>)
                  </q>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default internet;
