import React, { useState, useEffect } from "react";
import Display from "../components/Display";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineLoading } from "react-icons/ai";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Recipe } from "../components";

const Home = () => {
  return (
    <div className="home-container">
      <Recipe />
    </div>
  );
};

export default Home;
