import React from 'react';
import { Carousel as BsCarousel } from 'react-bootstrap';
import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-image';
import { ButtonBase } from './ButtonBase';
import hero1Jpg from '../assets/images/hero-carousel-1.jpg';
import hero2Jpg from '../assets/images/hero-carousel-2.jpg';
import hero3Jpg from '../assets/images/hero-carousel-3.jpg';
import hero1JpgProg from '../assets/images/hero-carousel-1-pg.jpg';
import hero2JpgProg from '../assets/images/hero-carousel-2-pg.jpg';
import hero3JpgProg from '../assets/images/hero-carousel-3-pg.jpg';

const StyledBsCarouselItem = styled(BsCarousel.Item)`
  height: 65vh;
  min-height: 350px;
`;

const StyledBsCarouselCaption = styled.div`
  position: absolute;
  top: 18%;
  left: 20%;
  z-index: 50;
  color: white;

  @media (max-width: 768px) {
    left: 6%;
    top: 15%;
  }

  h1 {
    font-size: 8rem;

    @media (max-width: 1200px) {
      font-size: 7rem;
    }

    @media (max-width: 768px) {
      font-size: 6rem;
    }
  }

  h3 {
    font-size: 2.8rem;

    @media (max-width: 1200px) {
      font-size: 2rem;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

const Overlay = styled.div`
  background: linear-gradient(
    171deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(46, 46, 46, 1) 27%,
    rgba(20, 20, 20, 1) 100%
  );
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65vh;
  background-color: #080d15;
  opacity: 0.6;
`;

export const HeroCarousel = () => {
  return (
    <>
      <BsCarousel indicators={false} controls={false} fade={true}>
        <StyledBsCarouselItem>
          <ProgressiveImage src={hero1Jpg} placeholder={hero1JpgProg}>
            {(src: string, loading: boolean) => (
              <img
                alt="DSM Systems team member"
                src={src}
                style={{
                  filter: loading ? 'blur(15px)' : 'blur(0px)',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  animation: 'heroZoomIn 25s linear infinite',
                }}
              />
            )}
          </ProgressiveImage>
        </StyledBsCarouselItem>
        <StyledBsCarouselItem>
          <ProgressiveImage src={hero2Jpg} placeholder={hero2JpgProg}>
            {(src: string, loading: boolean) => (
              <img
                alt="DSM Systems team member"
                src={src}
                style={{
                  filter: loading ? 'blur(15px)' : 'blur(0px)',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  animation: 'heroZoomIn 25s linear infinite',
                }}
              />
            )}
          </ProgressiveImage>
        </StyledBsCarouselItem>
        <StyledBsCarouselItem>
          <ProgressiveImage src={hero3Jpg} placeholder={hero3JpgProg}>
            {(src: string, loading: boolean) => (
              <img
                alt="DSM Systems team member"
                src={src}
                style={{
                  filter: loading ? 'blur(15px)' : 'blur(0px)',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  animation: 'heroZoomIn 25s linear infinite',
                }}
              />
            )}
          </ProgressiveImage>
        </StyledBsCarouselItem>
      </BsCarousel>
      <StyledBsCarouselCaption>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
          }}
        >
          <h1 className="mb-3">DSM Systems</h1>
          <h3 className="mb-5">
            IT Support &#38; Services across the South West
          </h3>
          <ButtonBase path="/contact" btnStyle="primary">
            Get in touch
            <svg viewBox="0 0 95.984 95.98">
              <g transform="translate(0 -0.01)">
                <g transform="translate(0 0.01)">
                  <g transform="translate(0 0)">
                    <path
                      d="M1.186,38.374a1.925,1.925,0,0,0,.027,3.566l35.8,14.318L93.261.01Z"
                      transform="translate(0 -0.01)"
                    />
                  </g>
                </g>
                <g transform="translate(39.735 2.729)">
                  <path
                    d="M211.957,70.765l14.322,35.8a1.915,1.915,0,0,0,1.772,1.209h.015a1.932,1.932,0,0,0,1.779-1.182l38.36-92.079Z"
                    transform="translate(-211.957 -14.513)"
                  />
                </g>
              </g>
            </svg>
          </ButtonBase>
        </div>
      </StyledBsCarouselCaption>
      <Overlay />
    </>
  );
};
