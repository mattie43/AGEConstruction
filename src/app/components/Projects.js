import React from "react";
import styled from "styled-components";

export default function Projects() {
  return (
    <Container>
      <ProjectsContainer>
        <div id="proj1">
          <img
            src="https://makinglemonadeblog.com/wp-content/uploads/2018/09/screened-porch-deck-addition-03.jpg"
            alt=""
          />
          <h3>Deck addition</h3>
        </div>
        <div id="proj2">
          <img
            src="https://lh3.googleusercontent.com/proxy/ySZCgD34jRI8hOH7uCxmhUD-8j1RhH7clqRTlzK2KKlI6PCyZvBlwQtymaFxMFKcql-MNr-qiB7swTuFGu-uh4cm-xCZuB0FgKb_Hsl2zM4AqtxPHiGUAACINSrDxB-J93fEs3SRN0Rn"
            alt=""
          />
          <h3>Room addition</h3>
        </div>
        <div id="proj3">
          <img
            src="https://s3-production.bobvila.com/blogs/wp-content/uploads/2013/06/attic-conversion.jpg"
            alt=""
          />
          <h3>Attic transformation</h3>
        </div>
      </ProjectsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 70vh;
  margin-top: 10vh;
  background-color: #b76f20;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  & div {
    width: 30%;
    color: white;
  }
  & img {
    max-width: 100%;
  }
`;
