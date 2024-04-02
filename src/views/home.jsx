import React from "react";
import background from "../assets/img/banner_redes2.png";
import silueta from "../assets/img/silueta.png";
import speed from "../assets/icons/speedometer.svg";

function home() {
  return (
    <>
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
              <img
                className="avatar"
                src={silueta}
                style={{ width: 70, opacity: 0.9 }}
              />
              <h1 className="mb-3 ">"Navega a tu manera"</h1>
              <h3 className="mb-5">
                La mejor conexión a internet en fibra óptica para tu hogar o
                negocio.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h5 className="text-white">Empresa colombiana</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="section-overlapping">
        <div className="text-center">
          <div className="container">
            <div className="row py-5" id="pro" style={{ textAlign: "justify" }}>
              <div className="col-md-8 mx-auto text-center">
                <h2 className="mb-2">¿Cual es la velocidad de mi internet?</h2>
                <p className="lead mb-5">
                  Los Test de velocidad por defecto en internet estan asociados
                  a un servidor cercano de la red que envia paquetes de
                  información al equipo principal, aqui puede probar nuestros
                  servicios directamente si esta con Telenet Digtial.
                  <br />
                  <br />- La velocidad base en internet es dada en Megabites por
                  segundo (<b>Mbps</b>). La velocidad contratada es en Megabytes por segundo (<b>MBps - MB/s</b>)
                  <br />
                  <br />- Para realizar el test de velocidad se recomienda sea
                  por <b>medios guiados</b> "Por cables".
                  <br />
                  <br />- Los <b>medios no guiados</b> "wifi", no garantizan el
                  servicio, pueden presentarse perdidas de paquetes o lentitud
                  en horas pico.
                  <br />
                  <br />- <b>Empresariales: </b>Pueden probar Max. 10 GBps por
                  puerto <b>para dedicados</b> en el siguiente enlace
                </p>
                {/* <!-- <a className="btn btn-secondary rounded btn-lg text-primary" href="http://speedtest.telenetdigital.net.co/" target="_blank"> --> */}
                <a
                  className="btn btn-secondary"
                  href="http://speedtest.telenetdigital.net.co/"
                  target="_blank"
                >
                  <img
                    src={speed}
                  />
                  IR A TEST DE VELOCIDAD
                </a>
              </div>

              {/* <div className='mt-2'>
                <iframe src="http://speedtest.telenetdigital.net.co/" width="300"
                height="400"
                frameborder="1"></iframe>
              
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <div className="container">
          <div className="row pt-4">
            {/* card1 */}
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Combo 200 MB/s</h4>
                </div>
                <div className="">
                  {/* <img className="img-fluid" src="" alt=""> */}
                </div>
                <div className="card-body">
                  <h1>
                    <b>$ 113.600</b>
                    <small className="text-muted"> Co/Mes</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>200 MBps</li>
                    <li>Fibra optica, Referencia: GPON+4GE+CATV+2.4G-5G</li>
                  </ul>
                  {/* <button
                    type="button"
                    onClick={leerPlanes}
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Comunícate
                  </button> */}
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Combo 100 MB/s</h4>
                </div>
                <div className=""></div>
                <div className="card-body">
                  <h1>
                    <b>$ 83.000</b>
                    <small className="text-muted"> Co/Mes</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>100 MBps</li>
                    <li>Fibra optica, Referencia: GPON+4GE+CATV+2.4G-5G</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">Combo 50 MB/s</h4>
                </div>
                <div className="">
                  {/* <img className="img-fluid" src="" alt=""> */}
                </div>
                <div className="card-body">
                  <h1>
                    <b>$ 73.000</b>
                    <small className="text-muted"> Co/Mes</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>50 MBps</li>
                    <li>Fibra optica, Referencia: GPON+4GE+CATV+2.4G-5G</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
