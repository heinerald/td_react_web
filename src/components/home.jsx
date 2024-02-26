import React from 'react'

const banner = {
    backgroundImage: "url(src/assets/img/banner23.jpg)",
position: "relative",
BackgroundPosition: "50% calc(50% + 0px)",
backgroundSize: "cover",
filter:"opacity(100%)",
}
const logo = {
width:"70",
style:" opacity: 0.9;"
}

function home() {
  return (
    <>
        <div className="py-5 text-center parallax cover gradient-dark" style={banner}
       >
        <div className="container d-flex flex-column">
          <div className="row my-auto">
            <div className="col-md-12 text-white my-5">
            <img className="avatar"src="src/assets/img/silueta.png" 
            style={{width:70,
            opacity: 0.9}}/>
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
            <div className="row py-5" id="pro">
              <div className="col-md-8 mx-auto text-center">
                <h2 className="mb-2">¿Cual es la velocidad de mi intenet?</h2>
                <p className="lead mb-5">
                  Los Test de velocidad por defecto en internet estan asociados
                  a un servidor cercano de la red que envia paquetes de
                  información al equipo principal, aqui puede probar nuestros
                  servicios directamente si esta con Telenet Digtial.
                  <br />
                  <br />- La velocidad contratada es dada en Megabites por
                  segundo (<b>Mbps</b>).&nbsp;
                  <br />- Para realizar el test de velocidad se recomienda sea
                  por <b>medios guiados</b> "Por cables".
                  <br />- Los <b>medios no guiados</b> "wifi", no garantizan el
                  servicio, pueden presentarse perdidas de paquetes o lentitud
                  en horas pico.
                  <br />- Puede probar Max. 10 Gbps por puerto{" "}
                  <b>para dedicados.</b>
                </p>
                {/* <!-- <a className="btn btn-secondary rounded btn-lg text-primary" href="http://speedtest.telenetdigital.net.co/" target="_blank"> --> */}
                <a
                  className="btn btn-secondary"
                  href="http://speedtest.telenetdigital.net.co/"
                  target="_blank"
                >
                  <i className="bi bi-speedometer"></i> TEST DE VELOCIDAD{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="container">
          <div className="row pt-4">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">nomrbe</h4>
                </div>
                <div className="">
                  {/* <img className="img-fluid" src="" alt=""> */}
                </div>
                <div className="card-body">
                  <h1>
                    <b>valor</b>
                    <small className="text-muted">Co/Mes</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>plan</li>
                    <li>detalle</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Comunícate
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default home