import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container className="header">
      <h3>Our Projects</h3>
      <h3>The Founders</h3>
      <h3>Contact Us</h3>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 12px black;
  z-index: 2;
  height: 7vh;
  color: #f5f5f5;
`;
