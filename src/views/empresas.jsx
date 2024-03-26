import React from "react";
import background from "../assets/img/empresas_banner.jpg";

import logo from "../assets/img/logo3.svg";
import ufinet from "../assets/empresas/ufinet.svg";
import discovery from "../assets/empresas/discovery.svg";
import liberty from "../assets/empresas/liberty.svg";
import global from "../assets/empresas/global_media.svg";
import televvd from "../assets/empresas/televvd.svg";
import ubiquiti from "../assets/empresas/ubiquiti.svg";
import enel from "../assets/empresas/enel.svg";
import viacom from "../assets/empresas/viacom.svg";
import mikrotik from "../assets/empresas/mikrotik.svg";

function empresas() {
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
                EMPRESAS
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
      {/* servicios  */}
      <div className="container">
        <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
          Servicios
        </h1>
        <hr className="mt-2 mb-5" />
        <div className="row text-center text-lg-start">
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="blue"
                class="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                />
              </svg>
            </center>
            <div className="m-4" style={{ textAlign: "justify" }}>
              <b>Internet dedicado</b> para empresas ISP y Pymes (punto a punto
              ó punto-coordenada ).Alta capacidad y disponibilidad desde
              <b>99,671 % </b>, enlaces <b>sin reúso</b> y
              <b>capacidades simétricas</b> de subidas y bajadas.
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="blue"
                class="bi bi-display"
                viewBox="0 0 16 16"
              >
                <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" />
              </svg>
            </center>
            <div className="m-4" style={{ textAlign: "justify" }}>
              <b>Monitoreo</b> de funcionalidad para dispositivos de red
              individuales, redes completas empresariales y alertas en borde 
              <b>(SNMP)</b> para la recolección de datos y decisiónes de
              proactivas de desempeño.
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="blue"
                class="bi bi-diagram-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
                />
              </svg>
            </center>
            <div className="m-4" style={{ textAlign: "justify" }}>
              Contamos con nuestro propio <b>CPD</b> (Centro de Procesamiento de Datos) privado para ofrecer soluciones 
              y entrega de servicios. <b>(Capa física, enlace de datos y red)</b> Cableado y radio.
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="blue"
                class="bi bi-wifi"
                viewBox="0 0 16 16"
              >
                <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049" />
                <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
              </svg>
            </center>
            <div className="m-4" style={{ textAlign: "justify" }}>
              <b>Experinecia con projectos: </b> Cableado estructurado, Zonas
              wifi, mantenimeintos y analisis de red, montajes de fibra optica
              (telecomunicaciones) y construcción de red para TV-Digital.
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="blue"
                class="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
              </svg>
            </center>
            <div className="m-4" style={{ textAlign: "justify" }}>
              <b>Mantenimeitno preventivo:</b> Actividades planificadas para
              reducir la probabilidad de fallas.
              <br />
              <b>Mantenimento correctivo:</b> Prioridad de mitigar el impacto de
              problemas en entornos de producción.
            </div>
          </div>
        </div>
      </div>

      {/* parnerts */}
      <div className="container">
        <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
          Partners
        </h1>
        <hr className="mt-2 mb-5" />
        <div className="row text-center text-lg-start">
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <img
                className="img-fluid "
                src={ufinet}
                alt=""
                style={{ width: 200 }}
              />
            </center>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <img
                className="img-fluid "
                src={discovery}
                alt=""
                style={{ width: 200 }}
              />
            </center>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <img
                className="img-fluid"
                src={liberty}
                alt=""
                style={{ width: 200 }}
              />
            </center>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <img
                className="img-fluid"
                src={global}
                alt=""
                style={{ width: 160 }}
              />
            </center>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <img
                className="img-fluid"
                src={televvd}
                alt=""
                style={{ width: 200 }}
              />
            </center>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <img
                className="img-fluid"
                src={ubiquiti}
                alt=""
                style={{ width: 200 }}
              />
            </center>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <img
                className="img-fluid"
                src={enel}
                alt=""
                style={{ width: 150 }}
              />
            </center>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <img
                className="img-fluid"
                src={mikrotik}
                alt=""
                style={{ width: 200 }}
              />
            </center>
          </div>
          <div className="col-lg-4 col-md-4 col-6">
            <center>
              <img
                className="img-fluid"
                src={viacom}
                alt=""
                style={{ width: 200 }}
              />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default empresas;
