import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Testimonials() {
  const settings = {
    renderIndicator: false,
    showStatus: false,
    showThumbs: false,
    swipeable: true,
    emulateTouch: true,
    infiniteLoop: true,
    useKeyboardArrows: true,
    autoPlay: true,
    interval: 7000,
  };

  function renderTestimonials() {
    return [1, 2, 3].map((item) => (
      <SingleTestimonial key={item}>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
        <blockquote>
          Adipisicing mollit sint velit exercitation deserunt ex irure sunt
          commodo velit et irure. Excepteur culpa aliquip Lorem est culpa
          incididunt. Deserunt laborum reprehenderit incididunt qui id. Officia
          anim nulla labore est.
          <cite>- Some guy</cite>
        </blockquote>
      </SingleTestimonial>
    ));
  }

  return (
    <Container>
      <h1>What People Are Saying About Us</h1>
      <br />
      <CarouselContainer>
        <Carousel {...settings}>{renderTestimonials()}</Carousel>
      </CarouselContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #855e42;
  height: 35vh;
  margin-top: 10vh;
  align-items: center;
  justify-content: center;
  & h1 {
    color: white;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  height: 200px;
  width: 75%;
  & .carousel {
    height: 200px;
    display: flex;
  }
`;

const SingleTestimonial = styled.div`
  display: flex;
  background-color: #855e42;
  padding: 0 30px;
  align-items: center;
  & img {
    max-height: 190px;
    max-width: 190px;
  }
  & blockquote {
    font-style: italic;
    position: relative;
    padding-left: 50px;
    ::before {
      display: block;
      content: "❝";
      transform: scale(5) translate(-6px, -2px);
      position: absolute;
    }
    & cite {
      font-size: 14px;
      display: block;
      margin-top: 5px;
    }
  }
`;
