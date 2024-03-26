import React from "react";
import background from "../assets/img/banner_tv2.png";

function television() {
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
              Televisión
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
                <h4>Televisión Análoga</h4>
              </div>
              <p>Es el sistema de transmisión de video y audio, representados por la amplitud, 
                fase y frecuencias VHF de una señal analógica, dejara de funcionar
                finalemente en colombia en el 2024 segun lo establecido por MinTic.<br />
                <q>RCN Radio.
                    (<a href="https://www.rcnradio.com/colombia/tdt-en-colombia-que-pasara-con-la-senal-de-parabolica-y-los-televisores-antiguos">
                2023
                </a>)
                (<a href="https://www.rcnradio.com/colombia/se-acaba-la-tv-analoga-en-colombia-mintic-y-agencia-del-espectro-preparan-su-fin">
                2024
                </a>)
                (<a href="https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/326195:MinTIC-inicia-el-proceso-para-que-cuatro-millones-de-colombianos-pasen-de-TV-analogica-a-senal-TDT">
                MinTic
                </a>)
                </q>
                </p>

                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                <h4>TDT</h4>
              </div>
              <p>Televisión Digital Terrestre(TDT). Es la señal radiodifundida mejorada tecnologicamente que 
                ofrece video de alta definición y multicanles que puede sintonizar de forma gratuita en su 
                televisior con antena sintonizadora UHF o decodificador. Desde el 2020 se remplaza la señal 
                análaga sintonizada por VHF existemte desde 1954, inauguración oficial de 
                la Televisión en Colombia. La TDT se implementa con el estandar DVB-T2 
                en Colombia, usado en 146 paises del mundo, este estandar puede cambiar dependiendo de su pais 
                o proveedor de servicios. <br />
                <q>Universidad Santo Tomás -Daddy M. Beltran , Facultad de Ingeniería de Telecomunicaciones. (<a href="https://d1wqtxts1xzle7.cloudfront.net/63777536/TraabajoInvestigacion220200629-123732-hq6axy-libre.pdf?1593452036=&response-content-disposition=inline%3B+filename%3DMEJORAMIENTO_DE_LA_SENAL_TDT_EN_COLOMBIA.pdf&Expires=1709315639&Signature=cLz75FhpQ~2q5kQDcEdJa5aaUhsz5-rEHLa2V9PGJxv~zT-FvDditd2SpU2QF9Ftyv87~86ufVxwVlIA4-negLaHxrTxugqi7h1VM5~zkeWGO9Blwxs6PanqYwzNg1pDoGjssI2fdY3N9GEby3trEgD08PBrfiAN8gGr4idPSx9qTyNsx5rK0M47dAHJQy0nO0ZHnrphz1BOiynT0ImXf-1AIVpb08jX0ZSyLhkScuI5h1z9dfcpjZH408RD95wOl1QcZtTDn3fv6VSkapQ6YwLii~u0EWEu5DMxVSw0FEiiIrq8cvW9gzv5ZtBifXK0xC0FFvM-zWcP-kR48wrW-g__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA">
                2018
                </a>)</q>
                </p>     

              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              <h4>Televisón Digital</h4>
              </div>
              <p>Televisión Digita DTV, En colombia se implementa el estandar DVB (Digital video broadcasting),
                  desde 2008 con DVB-T, y a la fecha DVB-T2. <br/>
                <q>Universidad Tecnológica de pereira - Ing. Edison duque cardona, Facultad de tecnológias. (<a href="https://repositorio.utp.edu.co/server/api/core/bitstreams/1313849d-9c8a-46c0-a900-0d2f21471e6b/content">
                2011
                </a>)</q>
                </p> 



            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="position-relative rounded overflow-hidden h-100">

              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              <h4>Contenidos IPTV</h4>
              </div>
              <p>El IPTV (Internet Protocol Television o televisión por protocolo de Internet) es el sistema para ver 
                canales de televisión a través de nuestra señal de Internet ademas de diversos contenidos que puedan ser 
                transmitidos por protocolos IP. Este sistema es parecido al que tienen 
                incorporado las plataformas de streaming o servicios OTT (Over The Top) como Netflix, Amazon Prime o HBO<br/>
                <q>Proximamente (<a href="#">
                2026
                </a>)</q>
                </p>  
              
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              <h4>Servicios OTT</h4>
              </div>
              <p>OTT- Over-the-top media services, Utilizan los protocolos IP controlados por software y un gran sistema de 
                gestion para crear servicios relacionados como: Netflix, PlutoTV, Prime Video, HBO NOW, Disney Hotstar, 
                ULLU, VOOT, ZEE5 y muchos proveedores más. <br/>
                <q>Proximamente (<a href="#">
                2026
                </a>)</q>
                </p>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default television;
