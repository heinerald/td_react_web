import React from "react";
import background from "../assets/img/testing.jpg";
import img from "../assets/img/ingeniero-electrico-trabajando-conmutador-red_23-2148323425.jpg";
import logo from "../assets/img/logo3.svg";

function block() {
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
              <img className="mb-5" src={logo} width="70" style={{opacity: 0.9}}/>
            </div>
            <div
              className="text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Información general
              </div>
              <h1 className="display-6 text-white">Sobre nosotros</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
              >
                 <img className="avatar position-absolute pt-5 pe-5"  src={img} />
                {/* <img className="avatar position-absolute pt-5 pe-5" 
                style={{backgroundImage: `url(${img})`,}}/> */}
                {/* object-fit: cover>  estaba agregado en la imagen */}
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  Sobre nosotros
                </div>
                <h1 className="display-6 mb-5">
                  Brindamos servicios de Internet y televisión
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2" style={{ textAlign: "justify" }}>
                    Nuestra empresa netamente colombiana, ofrece servicios de
                    internet de alta velocidad a través de fibra óptica, lo que
                    le permite navegar por la web con mayor velocidad y
                    fiabilidad. También ofrecemos servicios de televisión por
                    cable y por internet. 
                    Somo una empresa constituida desde 2017 ofreciendo servicios 
                    principalemnte a empresas "pymes e ISP" y enfocada en proyectos.
                  </p>
                  {/* <span className="text-primary">
                    <a href="">Para más informacion de tv por internet OTT</a>
                  </span> */}
                </div>
                <p className="mb-5 border-bottom" style={{ textAlign: "justify" }}>
                  <span className="text-primary">MISIÓN</span> <br />
                  Brindar con excelencia una alternativa en telecomunicaciones
                  con la mejor calidad de servicio, dando soluciones integrales
                  en el ámbito de las comunicaciones conectando a todos los
                  hogares colombianos con el mundo y contribuyendo a impulsar el
                  continuo desarrollo de Colombia.
                </p>
                <p className="mb-5 border-bottom" style={{ textAlign: "justify" }}>
                  <span className="text-primary">VISIÓN</span>
                  <br />
                  Ser la primera opción en telecomunicaciones que brinde la
                  mejor oferta en el mercado de las telecomunicaciones, siendo
                  competitiva en servicio, aplicando siempre herramientas
                  sofisticadas e incrementando así la eficiencia y eficacia en
                  la operación, atendiendo las necesidades básicas con
                  tecnología de punta y servicios de alta calidad superando las
                  expectativas de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default block;
