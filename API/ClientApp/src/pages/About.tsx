import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import circuit from '../assets/images/circuit-board.svg';
import teamJpg from '../assets/images/about-team-1.jpg';
import teamJpgProg from '../assets/images/about-team-1-pg.jpg';
import switchJpg from '../assets/images/about-switch-1.jpg';
import switchJpgProg from '../assets/images/about-switch-1-pg.jpg';
import { ButtonBase } from '../components/ButtonBase';
import rocket from '../assets/images/startup.svg';
import ProgressiveImage from 'react-progressive-image';
import { RouteNotFound } from './PageNotFound';

const StyledSectionBanner = styled.section`
  padding: 2.5rem;
  background-image: url(${circuit}),
    linear-gradient(45deg, var(--dsmBlue), var(--bluePrimary));
  color: white;
`;

const StyledSection = styled.section`
  h1 {
    margin-bottom: 3rem;
  }

  p {
    color: var(--bodySecondary);

    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }

  img {
    border-radius: 6px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

const StyledSectionTeam = styled(StyledSection)`
  span {
    color: var(--bluePrimaryDark);
  }
`;

const StyledSectionMission = styled(StyledSection)`
  background: linear-gradient(180deg, var(--dsmOrange), var(--dsmOrangeDark));
  color: white;

  & p {
    color: white;
  }
`;

const StyledSectionValueProp = styled(StyledSection)``;

const StyledSectionStartup = styled(StyledSection)`
  background-color: var(--lightGray);

  & img {
    border-radius: 0;
    box-shadow: none;
  }
`;

export const About = () => {
  return (
    <Switch>
      <Route
        exact
        path="/about"
        render={() => (
          <>
            <StyledSectionBanner>
              <Container>
                <h2>About</h2>
              </Container>
            </StyledSectionBanner>
            <StyledSectionTeam>
              <Container>
                {/* Hello from the DSM Systems team */}
                <Row className="d-flex justify-content-between">
                  <Col sm={12} lg={6} className="d-flex flex-column">
                    <h1 className="display-2">
                      Hello from the <br />
                      <span>DSM Systems team!</span>
                    </h1>
                    <p>Thank you for stopping by!</p>{' '}
                    <p>
                      DSM Systems was founded over 20 years ago. Since our
                      humble beginnings, we have been driven, and are still to
                      this day, by the same simple values:{' '}
                      <span
                        style={{ color: 'var(--bluePrimary)', fontWeight: 700 }}
                      >
                        reliable, personalised, IT Support that delivers value
                        to our customers.
                      </span>
                    </p>
                    <p>
                      The company was founded by Justin in 2001, having worked
                      in the corporate telecoms market and business consulting
                      specialising in the adoption of technology for business
                      advantage.
                    </p>
                    <p>
                      Today, our expertise enables us to deliver tailored and
                      effective IT solutions to a wide variety of businesses,
                      from startups to SMEs, across the South West region. We
                      have a strong customer-orientated approach and believe
                      that the best results are produced by working closely
                      alongside our clients.
                    </p>
                  </Col>
                  <Col sm={12} lg={6}>
                    <ProgressiveImage src={teamJpg} placeholder={teamJpgProg}>
                      {(src: string, loading: boolean) => (
                        <img
                          alt="DSM Systems team"
                          src={src}
                          style={{
                            filter: loading ? 'blur(15px)' : 'blur(0px)',
                            width: '100%',
                          }}
                        />
                      )}
                    </ProgressiveImage>
                  </Col>
                </Row>
              </Container>
            </StyledSectionTeam>
            {/* Mission Statement */}
            <StyledSectionMission>
              <Container>
                <Col sm={12} md={8} className="m-auto">
                  <h1 className="display-2 text-center">Our mission...</h1>
                  <p>
                    ...is to help our customers become more effective through
                    their IT systems and processes while we take away the issues
                    associated with their implementation and day-to-day
                    management.
                  </p>
                </Col>
              </Container>
            </StyledSectionMission>
            {/* Why choose us */}
            <StyledSectionValueProp>
              <Container>
                <Row className="d-flex flex-md-row justify-content-between ">
                  <Col sm={12} lg={6}>
                    <ProgressiveImage
                      src={switchJpg}
                      placeholder={switchJpgProg}
                    >
                      {(src: string, loading: boolean) => (
                        <img
                          alt="Network switch"
                          src={src}
                          style={{
                            filter: loading ? 'blur(15px)' : 'blur(0px)',
                            width: '100%',
                          }}
                        />
                      )}
                    </ProgressiveImage>
                  </Col>
                  <Col sm={12} lg={5} className="mt-5 mt-lg-0">
                    <h1 className="display-2 ">Why choose us?</h1>
                    <p>
                      DSM Systems has consistently achieved praise and excellent
                      reviews over the years due to the quality and reliability
                      of our services. We strongly believe that efficient tech
                      support plays an important role in the expansion of your
                      business, particularly with the ever-changing landscape of
                      technology.
                    </p>
                    <p>
                      We have an extensive client portfolio which has enabled
                      our team to understand the varying needs of different
                      industries. This includes: dental practices, restaurants,
                      property developers, and housing estates.
                    </p>
                    <p>
                      Finally, at DSM we place great emphasis on the development
                      of our staff who receive company-funded training and
                      certification opportunities from key partners such as
                      Microsoft, Zyxel, and Lenovo. We can assure you that your
                      business is in the right hands.
                    </p>
                    <p
                      style={{
                        fontWeight: 600,
                        color: 'var(--bluePrimary)',
                      }}
                    >
                      We have a variety of different service options to meet
                      your needs ranging from a fully outsourced service to
                      basic support packages.
                    </p>
                    <ButtonBase className="mt-3 mb-5 mb-lg-0" path="/services">
                      Check our services
                      <svg viewBox="0 0 31.49 31.49">
                        <path
                          d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
                    c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                        />
                      </svg>
                    </ButtonBase>
                  </Col>
                </Row>
              </Container>
            </StyledSectionValueProp>
            <StyledSectionStartup>
              <Container>
                <div className="d-flex justify-content-start align-items-center">
                  <h1 className="display-2">Starting up?</h1>
                  <img
                    style={{ width: '120px' }}
                    src={rocket}
                    alt="Startup rocket"
                  />
                </div>
                <p>
                  When starting a new business, an important issue to consider
                  is getting the correct IT systems and selecting an
                  organisation that can support you.
                </p>
                <p>
                  We will work with you to ensure that your systems will support
                  your operational requirements.
                </p>
                <ButtonBase path="/contact" className="mt-3 ">
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
              </Container>
            </StyledSectionStartup>
          </>
        )}
      />
      <RouteNotFound />
    </Switch>
  );
};
