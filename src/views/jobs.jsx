import React from "react";
import { useState } from "react";

function jobs() {
  return (
    <div>
      <div className="text-center">
        <div className="container">
          <div className="row pt-4" >
            {/* card1 */}
            <div className="col-md-6">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">
                    Ingeniero IT & Networking - Experto
                  </h4>
                </div>
                <div className="card-body;">
                  <p>
                    Ingeniero con experiencia, min 4 años, a fines en
                    redes,Linux sysAdmin, conocimento de "El Request for Comments" (RFC) para redes CORE IP en
                    equipos Mikrotik y tecnologias adicionales para un futuro escalamiento. <br />
                  </p>

                  <h5>Conocimientos basicos:</h5>
                  <p>
                    Routing (BGP, OSPF, multi-area, EIGRP, RIP, CARP, GLBP, VRRP); VPN; Security and firewalls;
                    Switching; Network simulation ; Traffic sniffing and deep analyzing; Wi-Fi and LTE;
                    QoS; Linux; Monitoring systems (Zabbix);
                    IPv6 and IPv4 translation, Bash scripting, Abmientes de Pruebas JPERF y 
                    bandwidthTest, RADIUS, Español, Ingles Opcional. ¡CERTIFICACIONES MIKROTIK o CISCO!
                  </p>

                  <h5>Apreciables:</h5>
                  <p>
                  Concimento y aplicación de "El Request for Comments" (RFC) para prestación de servicios
                  de calidad en fibra optica (tecnologias GPON), pruebas IP, Monitoreo Zabbix, 
                  informes a detalle de trafico y presupuesto. (Cumplimiento de estandares: ANSI/TIA/EIA) 
                  </p>
                    
                  <h5>Responsabilidades:</h5>  
                  <p>
                    Liderar equipo de trabajo para reparticion de
                    responsabilidades y apoyo para automaticacion de
                    procesos con el equipo de ingenieria.<br />
                  
                    Configurar todos los equipos y enlaces en las
                    diferentes herramientas de gestión, según lo
                    estipulado en la Ingeniería de detalle.<br />
                  
                    Asegurar la instalación del enlace, su correcto
                    funcionamiento y cumplimiento con informes y
                    documentación<br />
                  
                    Asegurar los enlaces nuevos que ingresan a la compañía
                    a través de llamadas telefónicas a los clientes
                    verificando el estado y desempeño del canal.<br />
                  
                    Asegurar que el seguimiento y cierre de casos se haga
                    con una solución efectiva para el cliente,
                    garantizando así la satisfacción de este.<br />
                  
                    Establecer protocolos para el cumplimiento de
                    servicios segun lo establecida en los indicadores de
                    gestión. <br />
                  
                    Registrarlos los datos necesarios para alimentar el
                    historial y conocimiento de la compañia.
                  </p>
                  
                  <h5>Detalles:</h5>
                  <p>
                    Trabajo hibrido segun acuerdos, $3 - $5 en base al conocimeinto,
                    Prestaciones de norma, Horario flexible: L-V,<br />

                    Nota: la mayoria de responsabilidades aplican a la
                    entrega de cada proyecto e implementacion de proyectos
                    internos, buscamos a futuro automatizar la mayoria de
                    procesos posibles.
                  </p>

                  <div>
                    <span className="badge rounded-pill bg-success">
                      Ingeniero IT & Networking
                    </span>
                    <span className="badge rounded-pill bg-success">
                      Mikrotic
                    </span>
                    <span className="badge rounded-pill bg-success">
                      Tecnología GPON
                    </span>
                    <span className="badge rounded-pill bg-success">
                      CORE IP - ASN
                    </span>
                    <span className="badge rounded-pill bg-success">
                      Informes de ingeniería
                    </span>
                    <span className="badge rounded-pill bg-success">
                      Estadística
                    </span>
                    <span className="badge rounded-pill bg-warning">
                      Zabbix
                    </span>
                    <span className="badge rounded-pill bg-warning">
                      Telecomunicaciones
                    </span>
                    <span className="badge rounded-pill bg-warning">
                      Electrónico
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* card2 */}
            <div className="col-md-6">
              <div className="card mb-4 box-shadow">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">
                    Lider de campo en telecomunicaciones - Intermedio
                  </h4>
                </div>
                <div className="card-body">
                  <p>
                    Técnico, profesional o afines como lider
                    de grupo tecnico en telecomunicaciones para control,
                    reporte e informes de trabajo en campo, incluye: "planos
                    para construccion de redes httx, inventarios,
                    levantameinto de información de empalmeria e
                    infreaestructura segun la norma establecida por
                    CODENSA-ENEL, se desea conocimento de los estandares
                    ANSI-TIA-EIA <br />
                    -Manejo de ofilmatica (obliagtorio)
                    <br />
                    -Google earth(obliagtorio), (AutoCat Opcional y
                    obligatorio a futuro)
                    <br />
                    -Control y uso de equipo de empalmetria(obliagtorio)
                    <br />- A futuro(Cumplimiento de estandares:
                    ANSI/TIA/EIA-568-B, EIA 568-B1, EIA 568-B2,EIA 568-B3,EIA
                    568-B3,EIA-569-A,EIA-570-A,EIA-606-A, EIA-607, EIA-758, ){" "}
                    <br />
                    - licenica de conducción
                    <br />
                    - Curso de alturas opcional (obligatorio a futuro)
                    <br />
                  </p>

                  <h5>Detalles:</h5>                  
                  <p>Precensial, $: 2 propuestas en base al conocimento!, Prestaciones de norma, Horario: L-V y S medio dia
                  </p>

                  <div>
                    <span className="badge rounded-pill bg-success">
                      Ingeniero
                    </span>
                    <span className="badge rounded-pill bg-success">
                      Tecnología GPON
                    </span>
                    <span className="badge rounded-pill bg-success">
                      Informes de ingeniería
                    </span>
                    <span className="badge rounded-pill bg-warning">
                      Telecomunicaciones
                    </span>
                    <span className="badge rounded-pill bg-warning">
                      Electrónico
                    </span>
                    <span className="badge rounded-pill bg-warning">
                      Técnico o profesional
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default jobs;
