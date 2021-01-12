import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { throttle } from "lodash";

import background from "../images/blueprint.jpg";
import logo from "../images/logos/logo3.png";

export default function Header() {
  const [transparent, setTransparent] = useState(window.scrollY === 0);

  useEffect(() => {
    const throttleScroll = throttle(checkScroll, 300);
    window.addEventListener("scroll", throttleScroll);
    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  });

  function checkScroll() {
    if (window.scrollY === 0) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  }

  return (
    <Container className="header" transparent={transparent}>
      <img src={logo} alt="" id="logo" />
      <div id="link-container">
        <h3>OUR PROJECTS</h3>
        <h3>THE FOUNDERS</h3>
        <h3>CONTACT US</h3>
      </div>
    </Container>
  );
}

const shrink = keyframes`
  from {
    max-height: 120%; 
  }
  to {
    max-height: 80%;
  }
`;

const grow = keyframes`
  from {
    max-height: 80%; 
  }
  to {
    max-height: 120%; 
  }
`;

const addImg = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const removeImg = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const shrinkWords = keyframes`
  from {
    font-size: 35px;
    margin-top: 10px;
  }
  to {
    font-size: 30px;
    margin-top: 0;
  }
`;

const growWords = keyframes`
  from {
    font-size: 30px;
    margin-top: 0;
  }
  to {
    font-size: 35px
    margin-top: 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  height: 8vh;
  color: white;
  position: fixed;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    box-shadow: 0 2px 12px black;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${background});
    background-size: cover;
    background-position: center;
    animation: ${(p) => (p.transparent ? removeImg : addImg)} 200ms linear
      forwards;
  }
  & #logo {
    max-height: 120%;
    animation: ${(p) => (p.transparent ? grow : shrink)} 100ms linear forwards;
    align-self: flex-start;
    margin: 10px 30px;
    z-index: 6;
  }
  & #link-container {
    display: flex;
    z-index: 6;
    & h3 {
      margin: 0 25px;
      font-size: 35px;
      /* transform: translateY(10px); */
      margin-top: 10px;
      animation: ${(p) => (p.transparent ? growWords : shrinkWords)} 100ms
        linear forwards;
      letter-spacing: -1px;
    }
  }
`;
