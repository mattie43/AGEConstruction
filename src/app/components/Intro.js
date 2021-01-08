import React from "react";
import styled from "styled-components";

import workers from "../images/workers.jpg";
import logo from "../images/logo4.png";

export default function Intro() {
  return (
    <Container>
      <Body>
        <img src={workers} alt="" id="workers" />
        <img src={logo} alt="" id="logo" />
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: salmon;
  height: 50vh;
  clip-path: polygon(0 0, 0 100%, 100% 80%, 100% 0);
`;

const Body = styled.div`
  display: flex;
  & #workers {
    max-height: 80%;
  }
  & #logo {
    max-height: 50%;
  }
`;
