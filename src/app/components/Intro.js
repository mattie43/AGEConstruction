import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../images/projects/img1.jpg";
import img2 from "../images/projects/img2.jpg";
import img3 from "../images/projects/img3.jpg";

export default function Intro() {
  const settings = {
    renderIndicator: false,
    showStatus: false,
    showThumbs: false,
    swipeable: true,
    emulateTouch: true,
    infiniteLoop: true,
    useKeyboardArrows: true,
    autoPlay: true,
    interval: 5000,
  };

  function renderImages() {
    return [img1, img2, img3].map((img) => (
      <SingleImage key={img}>
        <img src={img} alt="" />
      </SingleImage>
    ));
  }

  return (
    <Container>
      <Body id="body">
        <CarouselContainer>
          <Carousel {...settings}>{renderImages()}</Carousel>
        </CarouselContainer>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SingleImage = styled.div`
  & img {
    max-height: 100%;
    max-height: 100%;
  }
`;

const CarouselContainer = styled.div`
  & .carousel {
    height: 100vh;
    display: flex;
  }
`;
