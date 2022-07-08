import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import arcserve from '../assets/logos/partner-logos/arcserve-logo.png';
import exclaimer from '../assets/logos/partner-logos/exclaimer-logo.png';
import lenovo from '../assets/logos/partner-logos/lenovo-logo.jpg';
import openE from '../assets/logos/partner-logos/open-e-logo.jpg';
import _3cx from '../assets/logos/partner-logos/3cx-logo.jpg';
import zyxel from '../assets/logos/partner-logos/zyxel-logo.png';

const StyledSection = styled.section`
  & img {
    max-height: 7rem;
    max-width: 14rem;
  }

  & h1 {
    text-align: center;
    margin-bottom: 8rem;
  }
`;

export const Partners = () => {
  return (
    <StyledSection>
      <Container>
        <h1 className="display-3 font-weight-bold text-center">
          Proudly partnered with
        </h1>
        <Row className="justify-content-between align-items-center d-flex flex-wrap">
          <Col
            className="d-flex justify-content-center mb-5 mb-lg-0"
            sm={12}
            lg={2}
          >
            <img src={lenovo} alt="Partner logo" />
          </Col>
          <Col
            className="d-flex justify-content-center mb-5 mb-lg-0"
            sm={12}
            lg={2}
          >
            <img src={zyxel} alt="Partner logo" />
          </Col>
          <Col
            className="d-flex justify-content-center mb-5 mb-lg-0"
            sm={12}
            lg={2}
          >
            <img src={openE} alt="Partner logo" />
          </Col>
          <Col
            className="d-flex justify-content-center mb-5 mb-lg-0"
            sm={12}
            lg={2}
          >
            <img src={exclaimer} alt="Partner logo" />
          </Col>
          <Col
            className="d-flex justify-content-center mb-5 mb-lg-0"
            sm={12}
            lg={2}
          >
            <img src={arcserve} alt="Partner logo" />
          </Col>
          <Col className="d-flex justify-content-center" sm={12} lg={2}>
            <img src={_3cx} alt="Partner logo" />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};
