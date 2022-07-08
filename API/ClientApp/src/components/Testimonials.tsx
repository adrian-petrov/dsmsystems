import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { CardTestimonial } from './CardTestimonial';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const StyledSection = styled.section`
  background-color: var(--lightBlue);

  min-height: 396px;
`;

const StyledCard = styled(CardTestimonial)``;

export const Testimonials = () => {
  return (
    <StyledSection>
      <Container>
        <h1 className="display-3 font-weight-bold text-center ">
          Trusted by our clients
        </h1>
        <Col sm={12} md={9} className="mx-auto">
          <Carousel
            interval={8000}
            className="mt-4"
            controls={false}
            indicators={false}
          >
            <Carousel.Item>
              <StyledCard title="Gavin Davis" subtitle="Shepperton Group">
                DSM Systems have provided Shepperton Group with fantastic IT
                Support for the last 17 years. They understand the needs of our
                business, providing us with sound advice and information whilst
                also having a personal and friendly approach. Justin and the
                team have always acted professionally and efficiently and would
                highly recommend them.
              </StyledCard>
            </Carousel.Item>
            <Carousel.Item>
              <StyledCard
                title="David Parker"
                subtitle="Pioneer Property Services"
              >
                We are very pleased with the service and approach DSM have
                provided to Pioneer so would have no hesitation in recommending
                them as they have been a key part of our growth supporting us
                since we started the business 20 years ago: we regard them as a
                part of our team.
              </StyledCard>
            </Carousel.Item>
            <Carousel.Item>
              <StyledCard title="Gemma Bristow" subtitle="Lion House Dentistry">
                DSM Systems are fantastic! Justin & his great team are always
                available to us whenever we need them.
              </StyledCard>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Container>
    </StyledSection>
  );
};
