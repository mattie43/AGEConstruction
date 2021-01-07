import React from "react";
import styled from "styled-components";

import logo from "../images/agelogo.png";

export default function Header() {
  return (
    <Container className="header">
      <img src={logo} alt="logo" />
      <h3 id="projects">Our Projects</h3>
      <h3 id="founders">The Founders</h3>
      <h3 id="contact">Contact Us</h3>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #d9dbda;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 12px black;
  z-index: 2;
  & img {
    height: 86.46px;
    width: 143.88px;
    margin: 8px -71px 8px 0;
  }
  & #projects {
    color: #efa21f;
  }
  & #founders {
    color: #2b3a4f;
  }
  & #contact {
    color: #3a7bb9;
  }
`;
