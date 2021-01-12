import React from "react";
import styled from "styled-components";

export default function Founders() {
  return (
    <Container>
      <img
        src="https://ak.picdn.net/shutterstock/videos/7275484/thumb/1.jpg"
        alt=""
      />
      <p>
        Sit veniam proident deserunt velit ullamco laborum et tempor excepteur
        enim proident est. Est occaecat labore proident consectetur irure
        voluptate mollit non deserunt excepteur. Commodo irure labore ut sint
        proident mollit. Sunt aute aliqua adipisicing eu et aute tempor elit
        officia. Esse laboris non deserunt anim laboris non est. Ad ipsum ea
        tempor veniam laborum ipsum occaecat culpa aute. Ut Lorem tempor
        consectetur ex et esse dolore consectetur duis est.
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 70vh;
  margin-top: 10vh;
  background-color: #5d2906;
  align-items: center;
  justify-content: space-around;
  & img {
    max-height: 65%;
    margin: 20px;
    border-radius: 20px;
  }
  & p {
    font-size: 30px;
    text-align: justify;
    margin: 20px;
  }
`;
