import "./app.scss";
import styled from "styled-components";

import Header from "./components/Header";

export default function App() {
  return (
    <Container>
      <Header />
      <div id="p-wrapper">
        <p>
          Ipsum est dolore in ex duis. Voluptate in minim aliqua labore eiusmod
          reprehenderit sit culpa ea. Nisi ex dolor aliqua ea esse elit velit.
          Consectetur mollit reprehenderit dolor fugiat elit ipsum id ad aliqua.
          Nulla non officia consectetur esse et tempor occaecat consectetur enim
          nostrud consectetur. Sunt aute ad ipsum in pariatur laborum sunt
          commodo ea veniam Lorem et ex. Sint anim nulla amet velit ex sint quis
          eu fugiat reprehenderit do magna amet.
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #3a7bb9;
  & #p-wrapper {
    filter: drop-shadow(-1px 2px 12px black);
  }
  & p {
    padding: 20px;
    background-color: #efa21f;
    height: 50vh;
    box-shadow: 0 2px 12px black;
    clip-path: polygon(0 0, 0 100%, 100% 80%, 100% 0);
  }
`;
