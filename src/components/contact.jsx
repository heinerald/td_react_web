import React from "react";

const banner = {
  backgroundImage: "url(src/assets/img/banner23.jpg)",
position: "relative",
BackgroundPosition: "50% calc(50% + 0px)",
backgroundSize: "cover",
filter:"opacity(100%)",
}

function contact() {
  return (
    <div>
      <div
        className="py-5 text-center parallax cover gradient-dark"
        style={banner}
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
              <h1 className="display-4 text-secondary animated slideInDown mb-4">
                CONTACTO
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
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Contact Us
              </div>
              <h1 className="display-6 mb-5">Contáctanos para más información</h1>
              <p className="mb-4 text-danger">
                El formulario de contacto está actualmente inactivo.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      {/* <input type="text" className="form-control" id="name" placeholder="Your Name"> */}
                      <label >Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      {/* <input type="email" className="form-control" id="email" placeholder="Your Email"> */}
                      <label >Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      {/* <input type="text" className="form-control" id="subject" placeholder="Subject"> */}
                      <label >Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                      ></textarea>
                      <label >Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-2 px-3 me-3">
                      Send Message
                      <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="position-relative rounded overflow-hidden h-100">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
