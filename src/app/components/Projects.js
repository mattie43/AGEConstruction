import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { throttle } from "lodash";

import randomNumber from "../helpers/randomNumber";

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const throttleScroll = throttle(checkScroll, 300);
    window.addEventListener("scroll", throttleScroll);
    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  });

  function checkScroll() {
    if (
      document.querySelector("#projects").getBoundingClientRect().top <
      window.innerHeight / 2
    ) {
      setVisible(true);
    }
  }

  function renderProjects() {
    return [1, 2, 3, 4].map((proj) => (
      <SingleProject visible={visible} randomNumber={randomNumber(500, 2000)}>
        <img
          src="https://makinglemonadeblog.com/wp-content/uploads/2018/09/screened-porch-deck-addition-03.jpg"
          alt=""
        />
        <h3>Deck Addition</h3>
      </SingleProject>
    ));
  }

  return (
    <Container>
      <ProjectsContainer id="projects">{renderProjects()}</ProjectsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 10vh;
  background-color: #b76f20;
  box-shadow: 0 2px 12px black;
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 30px 0;
`;

const SingleProject = styled.div`
  opacity: 0;
  animation: ${(p) => (p.visible ? fadeIn : "")} ease-out forwards;
  animation-duration: ${(p) => p.randomNumber + "ms"};
  width: 30%;
  color: white;
  margin: 30px 0;
  & img {
    max-width: 100%;
    border-radius: 20px;
  }
`;
