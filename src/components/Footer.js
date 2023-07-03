import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div>
      <div>
        <MDBFooter
          bgColor="secondary"
          className="text-center text-lg-start text-light"
        >

          <section className="pt-2">
            <MDBContainer fluid className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <h6 className="mx-auto text-uppercase fw-bold mb-4">
                  Meet the Developers:
                </h6>
              </MDBRow>
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
                  <h6 className="mx-auto text-uppercase fw-bold mb-4">
                    Abrar Hussain
                  </h6>
                  <p>
                    <a href="https://www.abrarbiz.net/" className="text-reset">
                      Portfolio
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/sahussain887"
                      className="text-reset"
                    >
                      GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.linkedin.com/in/abrar-hussain00"
                      className="text-reset"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    {/* <MDBIcon icon="envelope" className="me-3" /> */}
                    sahussain887@gmail.com
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
                  <h6 className="mx-auto text-uppercase fw-bold mb-4">
                    Xyron Brual
                  </h6>
                  <p>
                    <a
                      href="https://xyronic15.github.io/Portfolio/"
                      className="text-reset"
                    >
                      Portfolio
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/xyronic15/"
                      className="text-reset"
                    >
                      GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/xyronbrual/"
                      className="text-reset"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    {/* <MDBIcon icon="envelope" className="me-3" /> */}
                    xyron@gmail.com
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
                  <h6 className="mx-auto text-uppercase fw-bold mb-4">
                    Ali Colak
                  </h6>
                  <p>
                    <a href="#" className="text-reset">
                      Portfolio
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-reset">
                      GitHub
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://linkedin.com/in/imalicolak"
                      className="text-reset"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    {/* <MDBIcon icon="envelope" className="me-3" /> */}
                    ali@gmail.com
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
                  <h6 className="mx-auto text-uppercase fw-bold mb-4">
                    Benson ...
                  </h6>
                  <p>
                    <a href="#" className="text-reset">
                      Portfolio
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-reset">
                      GitHub
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-reset">
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    {/* <MDBIcon icon="envelope" className="me-3" /> */}
                    benson@gmail.com
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2023 Copyright:
            {/* <a className="text-reset fw-bold" href="https://abrarbiz.net/">
              abrarbiz.net
            </a> */}
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};

export default Footer;
