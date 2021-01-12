import "./app.scss";
import styled from "styled-components";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

import back from "./images/background.jpg";

export default function App() {
  return (
    <Container back={back}>
      <Header />
      <Intro />
      <Projects />
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
