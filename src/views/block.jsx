import React from 'react'
import img from "../assets/img/Warning.svg";

function block() {
  return (
    <div>
<div class="container">
  <div class="parrafos">
      <div class="card">
        {/* <img class="imgblock" src="../../../../assets/img/img/logo-circular.png" width="20%"> */}
        <div class="imgh">
            <img src={img} width="300px" />
            <h1>PAGINA BLOQUEADA</h1>
        </div>
        <div class="leyes">
          <p>
              La página a la que quiere acceder se encuentra bloqueada por
              disposición del Ministerio de las Tecnologías de la Información y
              las Comunicaciones, en cumplimiento de la Ley 679 de 2001, publicada
              en el diario oficial No. 44.509 de 4 de agosto de 2001
          </p>
        </div>
      </div>
  </div>
</div>
    </div>
  )
}

export default block