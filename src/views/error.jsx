import { useRouteError } from "react-router-dom";
import React from "react";

function error() {
  return (
    <div>
      <div className="section-overlapping">
        <div className="text-center">
          <div className="container">
            <div className="row py-5" id="pro">
              <div className="col-md-8 mx-auto text-center">
              <img src="src/assets/img/error404.svg" alt="SVG as an image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container text-center">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <i class="bi bi-exclamation-triangle display-1 text-warning"></i>
                <h1 class="display-1">404</h1>
                <h1 class="mb-4">Página no encontrada</h1>
                <p class="mb-4">Lo sentimos, ¡La página que has buscado no existe en
                  nuestro sitio web! ¿Quizás ir a nuestra página de inicio o intentar
                  usar una búsqueda?</p>
                <a class="btn btn-outline-primary py-2 px-3" href="">
                    Volver al inicio
                    <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i class="fa fa-arrow-right"></i>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default error;
