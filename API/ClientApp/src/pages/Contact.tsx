import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import circuit from '../assets/images/circuit-board.svg';
import email from '../assets/icons/contact-email.svg';
import location from '../assets/icons/contact-location.svg';
import phone from '../assets/icons/contact-phone.svg';
import googleMaps from '../assets/icons/contact-google-maps.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { ContactForm } from '../components/ContactForm';
import { RouteNotFound } from './PageNotFound';

const StyledSectionBanner = styled.section`
  padding: 2.5rem;
  background-image: url(${circuit}),
    linear-gradient(45deg, var(--dsmRed), var(--dsmBlue));
  color: white;
`;

const StyledSection = styled.section`
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 4rem;
  padding: 4rem;
  border-radius: 4px;
  box-shadow: 0px 4px 18px 1px rgba(186, 186, 186, 0.3);

  & img {
    width: 40x;
    height: 40px;
    margin-bottom: 1rem;
  }
`;

const StyledSmallCard = styled.div`
  height: 250px;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0px 4px 18px 1px rgba(186, 186, 186, 0.3);

  @media (min-width: 768px) {
    &:nth-child(odd) {
      margin-right: 2rem;
    }
  }

  & h3 {
    font-weight: 700;
    margin-bottom: 2rem;
  }

  & p {
    font-size: 1.4rem;
    margin-bottom: 1px;
  }

  & img {
    width: 30px;
    height: 30px;
    margin-bottom: 1rem;
  }

  & a {
    font-size: 1.4rem;
    color: var(--bluePrimary);
    font-weight: 600;
  }
`;

export const Contact = () => {
  return (
    <Switch>
      <Route
        exact
        path="/contact"
        render={() => (
          <>
            <StyledSectionBanner>
              <Container>
                <h2>Contact</h2>
              </Container>
            </StyledSectionBanner>
            <StyledSection>
              <Container>
                <div className="d-flex flex-wrap justify-content-around">
                  {/* We would love to hear from you */}
                  <Col as={StyledCard} sm={12} lg={5}>
                    <h1 className="display-4 text-center">
                      We would love to hear from you!
                    </h1>
                    <p style={{ marginBottom: '2rem' }}>
                      Whether you want to enquire about our services, pricing,
                      or anything else, our team is ready to answer all your
                      questions.
                    </p>
                    <ContactForm />
                  </Col>
                  {/* Information boxes */}
                  <Col sm={12} lg={6}>
                    <Row className="d-flex justify-content-between justify-content-lg-around">
                      <Col as={StyledSmallCard} sm={5}>
                        <img src={location} alt="Location" />
                        <h3>Address</h3>
                        <p>
                          Cromwell House, Vincients Road, Bumpers Industrial
                          Estate, Chippenham, SN14 6NQ
                        </p>
                      </Col>
                      <Col as={StyledSmallCard} sm={5}>
                        <img src={googleMaps} alt="Google Maps Location" />
                        <h3>Google Maps</h3>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.google.com/maps/place/DSM+Systems/@51.4643986,-2.1464022,15z/data=!4m5!3m4!1s0x0:0xe88bf7462409da2d!8m2!3d51.4643986!4d-2.1464022"
                        >
                          Find us on Google Maps
                        </a>
                      </Col>
                      <Col as={StyledSmallCard} sm={5}>
                        <img src={phone} alt="Telephone" />
                        <h3>Speak to a member of our staff</h3>
                        <p>
                          Call us on{' '}
                          <a href="tel:01225 808 550">01225 808 550</a> to speak
                          to a member of our team.
                        </p>
                      </Col>
                      <Col as={StyledSmallCard} sm={5}>
                        <img src={email} alt="Email" />
                        <h3>Email us</h3>
                        <a href="mailto:info@dsmsystems.co.uk">
                          info@dsmsystems.co.uk
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </Container>
            </StyledSection>
          </>
        )}
      />
      <RouteNotFound />
    </Switch>
  );
};
