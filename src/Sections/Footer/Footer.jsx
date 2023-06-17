// import { useState } from "react";
import "./Footer.css";

import {
  MDBFooter,
  // MDBContainer,
  // MDBIcon,
  // MDBInput,
  // MDBCol,
  // MDBRow,
  // MDBBtn,
} from "mdb-react-ui-kit";

export const Footer = () => {
  // const [email, setEmail] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   setEmail("");
  // };

  return (
    <>
      <MDBFooter
        className="text-center"
        color="white"
        style={{
          backgroundColor: "var(--red-background)",
        }}
      >
        {/* <MDBContainer className="p-4">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>

          <section className="">
            <form onSubmit={(e) => handleSubmit(e)}>
              <MDBRow className="d-flex justify-content-center">
                <MDBCol size="auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md="5" start>
                  <MDBInput
                    contrast
                    type="email"
                    label="Email address"
                    className="mb-4"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color="light" type="submit" className="mb-4">
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
          </section>
        </MDBContainer> */}

        <div className="text-center footer-main">
          <div className="follow-us">
            <h6
              className="text-uppercase text-white font-weight-bold"
              style={{ marginBottom: "0" }}
            >
              Follow us:
            </h6>
            <div id="social-links">
              <a
                className="btn-primary round-pill social"
                style={{ backgroundColor: "#eb6d20" }}
                href="https://www.facebook.com/profile.php?id=100057127915552"
                role="button"
              >
                E
              </a>
              <a
                className="btn-primary round-pill social"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/print3dverse/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>© 2023 Copyright: Benwich Develops</div>
        </div>
      </MDBFooter>
    </>
  );
};

{
  /* <a className="text-white" href="">
            Benwich Develops
          </a> */
}
