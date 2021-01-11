import "./app.scss";
import styled from "styled-components";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Testimonials from "./components/Testimonials";

import background from "./images/blueprint.jpg";

export default function App() {
  return (
    <Container back={background}>
      <Header />
      <Intro />
      <Testimonials />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: ${(p) => `url(${p.back})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
