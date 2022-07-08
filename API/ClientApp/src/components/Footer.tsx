import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoReversed from '../assets/logos/dsm-logos/dsm-logo-reversed.jpg';

const StyledFooter = styled.footer`
  background-color: var(--dsmBlueReversed);
  color: white;
  font-size: 1.3rem;

  & ul {
    padding: 2px;

    & li:not(:last-of-type) {
      margin-bottom: 6px;
    }
  }

  & a {
    color: white;

    &:hover {
      color: var(--steelBlue);
    }
  }

  & h3 {
    font-weight: 600;
    margin-bottom: 1.2rem;
  }

  & img {
    max-width: 10rem;
  }

  & svg {
    fill: white;
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
`;

const StyledSubfooter = styled.div`
  font-size: 1.2rem;
  background-color: var(--bluePrimary);
  color: white;
  padding: 1rem 2.5rem;

  & p {
    color: white;
    margin: 0 8px 0 0;
  }

  & a {
    color: white;

    &:hover {
      color: var(--steelBlue);
    }
  }
`;

const StyledCategoryContainer = styled.div`
  &:not(:last-of-type) {
    margin-right: 2rem;
    margin-bottom: 2rem;
  }
`;

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <section>
          <Container>
            <Row>
              {/* Logo */}
              <Col sm={12} md={2}>
                <Link to="/">
                  <img
                    className="mb-4"
                    src={logoReversed}
                    alt="DSM Systems Logo"
                  />
                </Link>
              </Col>
              {/* Categories container */}

              <Col
                sm={12}
                md={10}
                className="d-flex flex-column flex-md-row justify-content-between ml-4 ml-md-0"
              >
                {/* company */}
                <StyledCategoryContainer>
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/news">News</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </StyledCategoryContainer>
                {/* services */}
                <StyledCategoryContainer>
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <Link to="/services#it-support">IT Support</Link>
                    </li>
                    <li>
                      <Link to="/services#network-infrastructure">
                        Network Infrastructure
                      </Link>
                    </li>
                    <li>
                      <Link to="/services#telephony">Telephony (VoIP)</Link>
                    </li>
                    <li>
                      <Link to="/services#cloud">Cloud</Link>
                    </li>
                    <li>
                      <Link to="/services#backups">Backup</Link>
                    </li>
                    <li>
                      <Link to="/services#cybersecurity">Cybersecurity</Link>
                    </li>
                  </ul>
                </StyledCategoryContainer>
                {/* get in touch */}
                <StyledCategoryContainer>
                  <h3>Get in touch</h3>
                  <ul>
                    <li>
                      <a href="tel:01225 808 550">Tel: 01225 808 550</a>
                    </li>
                    <li>
                      <a href="mailto:info@dsmsystems.co.uk">
                        Email: info@dsmsystems.co.uk
                      </a>
                    </li>
                  </ul>
                  {/* social media */}
                  <StyledCategoryContainer>
                    <a
                      href="https://www.instagram.com/dsmsystems/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg height="100" viewBox="0 0 511 511.9">
                        <path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0" />
                        <path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0" />
                        <path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/dsm_systems"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg height="100" viewBox="-21 -81 681.33464 681">
                        <path d="m200.964844 515.292969c241.050781 0 372.871094-199.703125 372.871094-372.871094 0-5.671875-.117188-11.320313-.371094-16.9375 25.585937-18.5 47.824218-41.585937 65.371094-67.863281-23.480469 10.441406-48.753907 17.460937-75.257813 20.636718 27.054687-16.230468 47.828125-41.894531 57.625-72.488281-25.320313 15.011719-53.363281 25.917969-83.214844 31.808594-23.914062-25.472656-57.964843-41.402344-95.664062-41.402344-72.367188 0-131.058594 58.6875-131.058594 131.03125 0 10.289063 1.152344 20.289063 3.398437 29.882813-108.917968-5.480469-205.503906-57.625-270.132812-136.921875-11.25 19.363281-17.742188 41.863281-17.742188 65.871093 0 45.460938 23.136719 85.605469 58.316407 109.082032-21.5-.660156-41.695313-6.5625-59.351563-16.386719-.019531.550781-.019531 1.085937-.019531 1.671875 0 63.46875 45.171875 116.460938 105.144531 128.46875-11.015625 2.996094-22.605468 4.609375-34.558594 4.609375-8.429687 0-16.648437-.828125-24.632812-2.363281 16.683594 52.070312 65.066406 89.960937 122.425781 91.023437-44.855469 35.15625-101.359375 56.097657-162.769531 56.097657-10.5625 0-21.003906-.605469-31.2617188-1.816407 57.9999998 37.175781 126.8710938 58.871094 200.8867188 58.871094" />
                      </svg>
                    </a>
                  </StyledCategoryContainer>
                </StyledCategoryContainer>
                {/* address */}
                <StyledCategoryContainer>
                  <h3>Where to find us</h3>
                  <ul>
                    <li>Cromwell House</li>
                    <li>Vincients Road</li>
                    <li>Bumpers Industrial Estate</li>
                    <li>Chippenham</li>
                    <li>SN14 6NQ</li>
                  </ul>
                </StyledCategoryContainer>
              </Col>
            </Row>
          </Container>
        </section>
      </StyledFooter>
      <StyledSubfooter>
        <Container>
          <Row className="d-flex align-items-center px-5">
            <p>&copy; {new Date().getFullYear()} DSM Systems Limited.</p>
            <p>All rights reserved.</p>
            <p>
              Website by{' '}
              <a
                href="https://github.com/adrian-petrov"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adrian Petrov
              </a>
              .
            </p>
          </Row>
        </Container>
      </StyledSubfooter>
    </>
  );
};
