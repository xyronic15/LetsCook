import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import chatgpt from "../assets/chatgpt.png";
import react from "../assets/react.jpg";
import bootstrap from "../assets/bootstrap.png";

const About = () => {
  return (
    <div>
      <MDBContainer fluid className="text-center mt-5 bg-light py-3">
        <b style={{ fontSize: 32 }}>About</b>

        <MDBRow className="d-flex align-items-center mt-3">
          <MDBCol
            md="4"
            lg="4"
            xl="4"
            className="mx-auto mb-4 align-items-center"
          >
            <img src={chatgpt} className="w-25" alt="ChatGPT" />
          </MDBCol>
          <MDBCol
            md="4"
            lg="4"
            xl="4"
            className="mx-auto mb-4 align-items-center"
          >
            <img src={react} className="w-25" alt="ChatGPT" />
          </MDBCol>
          <MDBCol
            md="4"
            lg="4"
            xl="4"
            className="mx-auto mb-4 align-items-center"
          >
            <img src={bootstrap} className="w-25" alt="ChatGPT" />
          </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex justify-content-center mt-3 px-5">
          <p style={{ fontSize: 20}}>
            LetsCook is an exciting web application built with React and
            Bootstrap that aims to redefine the cooking experience. Utilizing
            the ChatGPT API, LetsCook allows users to unleash their culinary
            creativity effortlessly. By simply inputting a list of ingredients
            they have on hand, LetsCook generates random and personalized
            recipes that make the most of those ingredients. Whether you're
            looking to experiment with new flavors or make the most of your
            pantry staples, LetsCook has you covered. Its intuitive interface,
            powered by AI, makes cooking a fun and engaging adventure. Get ready
            to discover exciting recipes and unlock your inner chef with
            LetsCook!
          </p>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default About;
