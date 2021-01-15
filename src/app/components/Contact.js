import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Container>
      <InnerDiv>
        <div>
          <p className="contact-titles">E-mail us at:</p>
          <p>AGEConstruction@gmail.com</p>
        </div>
        <p id="made-by">
          Made by{" "}
          <a href="https://mattericksen.com/" target="_blank" rel="noreferrer">
            Matt Ericksen
          </a>
        </p>
        <div>
          <p className="contact-titles">Call us at:</p>
          <p>1-917-681-4822</p>
          <p>1-917-681-4825</p>
          <p>test</p>
        </div>
      </InnerDiv>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 20vh;
  margin-top: 10vh;
  background-color: #336abc;
  font-size: 35px;
  color: white;
  position: relative;
  justify-content: center;
  box-shadow: 0 2px 12px black;
  & .contact-titles {
    font-size: 30px;
    color: black;
  }
  & #made-by {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 15px;
    color: black;
    & a {
      color: white;
      text-decoration: none;
    }
  }
`;

const InnerDiv = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;
