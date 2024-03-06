import React from "react";

function support() {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                {/* <img className="img-fluid mb-4" src="img/icon-1.png" alt=""> */}
                <h4 className="mb-3">PQR'S</h4>
                <p className="mb-4">
                  En el{" "}
                  <a href="https://seller.telenetdigital.net.co/cliente/login">
                    portal clientes
                  </a>{" "}
                  puede encontrar la pestaña de <b>soporte</b> donde puede
                  resolver cualquier duda. Tambien puede comunicarse a nuestra
                  linea de atención +57 3209900025 en Bogotá
                </p>
                <a className="btn btn-outline-primary px-3" href="/pqrs">
                  Más
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                {/* <img className="img-fluid mb-4" src="img/icon-2.png" alt=""> */}
                <h4 className="mb-3">Paga tu factura</h4>
                <p className="mb-4">
                  Puedes consulrtar nuestros{" "}
                  <a href="/cavs">puntos de atención.</a>
                  Tambien puedes encontrar nuestra guía para realizar pagos
                  online accediendo al{" "}
                  <a href="https://seller.telenetdigital.net.co/cliente/login">
                    portal clientes.
                  </a>
                </p>
                <a
                  className="btn btn-outline-primary px-3"
                  download="Pagos_online.pdf"
                  href="../../../assets/source/PAGOS_PSE.pdf"
                >
                  Descargar guía
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                {/* <img className="img-fluid mb-4" src="img/icon-3.png" alt=""> */}
                <h4 className="mb-3">Manual de usuarios</h4>
                <p className="mb-4">
                  Aqui puede encontrar procedimientos y manuales de usuarios
                </p>
                <a
                  className="btn btn-outline-primary px-3"
                  routerLink="/manuales"
                  target="_top"
                  routerLinkActive=""
                >
                  Más
                  <i className="bi bi-arrow-right-circle-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="parrafos">
            <h1>
              <strong>MANUAL DE USUARIO</strong>
            </h1>

            <p>
              <strong>Telenet digital S.A.S.</strong> y su equipo de ingenieros
              especializados da a conocer los siguientes factores que limitan su
              velocidad de Internet Fijo, los cuales se encuentran divididos en
              tres actores:
            </p>
            <ul>
              <li>Cliente</li>
              <li>TelenetDigital</li>
              <li>Externos</li>
            </ul>

            <p>
              Por parte del Cliente se identificaron los siguientes aspectos a
              tener en cuenta para tener una navegación adecuada:
            </p>
            <ul>
              <li>
                En equipos de cómputo: con un sistema operativo Windows
                /2000/XP/7/8/10 o superior, Mac OS 8.6 o superior, con
                procesador Intel Pentium PIII/AMD K6 o superior, mínimo 1G o más
                de memoria RAM, 2GB libres en el disco duro, tarjeta de red
                alámbrica de 100Mbps o más con puerto tipo Ethernet, tarjeta
                inalámbrica (WiFi) que cumpla como mínimo con el estándar 802.11
                b/g
                <strong>TelenetDigital</strong> recomienda que cumpla el
                estándar
                <strong>802.11b/g/n.</strong>
                <br />
                <br />
              </li>
              <li>
                Por parte de software: los virus informáticos afectan el
                desempeño de los equipos terminales y navegadores, para ello se
                recomienda tener instalados programas de protección de
                dispositivos tales como antivirus, antispam, etc. Para evitar
                que sus hijos descarguen programas inadecuados recomendamos
                programas de control parental y espías. Los gestores de descarga
                P2P como Ares, Limeware, etc., afectan notoriamente la velocidad
                de conexión a internet.(se recomienda navegar en sitios
                recomendados)
                <br />
                <br />
              </li>
              <li>
                La red de acceso en el hogar: La red interna debe estar en buen
                estado, sin cables cortados o conexiones fraudulentas, que no
                existan spliter u otros dispositivos pasivos en su hogar antes
                de conectar el cable modem.
                <br />
                El número de equipos que se conectan a su red local vía WiFi o
                alámbrica que esten navegando simultáneamente afecta la
                velocidad en la que accede a contenidos web (puede consultar
                acerca del consumo de banda ancha por dispositivos)
                <br />
                <br />
                La distancia de conexión inalámbrica, desde el modem y el
                dispositivo la cual no debe superar 7 metros sin obstáculos, las
                paredes, techos, puertas metálicas macizas, estructuras de
                aluminio, materiales como cristal, acero, metal, paredes con
                aislamiento, agua (peceras), espejos, archivadores, ladrillo y
                hormigón pueden generar una disminucion en el alcance al igual
                que interferencias de otros aparatos eléctricos como teléfonos
                inalámbricos, hornos microondas, sistemas de seguridad
                inalámbricos, incluso si no los está utilizando afectan la señal
                inalámbrica y perjudican la velocidad de internet. (puede
                consultar acerca Espectros RF WiFi)
                <br />
                <br />
              </li>
            </ul>
            <p>
              Por parte de <strong>TelenetDigital</strong> existen factores que
              pueden afectar su servicio dado por mantenimientos, rupturas de la
              red que pueden ser ocacionadas por accidentes o actos de terceros
              que afectan el servicio, el cual solicitamos reportarlo a su
              distribuidor más cercano para poder solucionar la falla en el
              menor tiempo posible.
            </p>
            <ul>
              <li>
                Red de distribución: la calidad de la red externa, el cableado
                en mal estado o saboteado, conexiones fraudulentas, manipulación
                de las redes por parte de personal ajeno a{" "}
                <strong>TelenetDigital</strong>.
              </li>
              <li>
                Capacidades de conexión: Capacidades en redes de agregación, o
                capacidades en el canal internacional.
              </li>
            </ul>
            <p>
              Los siguientes son los factores que pueden limitar su conexión a
              proveedores Externos: Conexión externa:
            </p>
            <ul>
              <li>
                Fallas en el origen de las páginas donde se navegue, saturación
                de la página o limitante de anchos de banda, servidor defectuoso
                o no adecuado para conexiones masivas, fallas de canal
                internacional.
              </li>
            </ul>
            <p>
              Las anteriores recomendaciones y factores fueron descritos
              teniendo en cuenta nuestra base de conocimiento, reportada en las
              fallas más comunes de la mesa de ayuda y servicios de
              TelenetDigital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default support;
