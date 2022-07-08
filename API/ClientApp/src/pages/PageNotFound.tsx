import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { ButtonBase } from '../components/ButtonBase';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledPageNotFound = styled.section`
  min-height: 100vh;
  background-color: var(--mediumGray);
`;

export const PageNotFound = withRouter(({ history }) => (
  <StyledPageNotFound>
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div className="d-flex flex-column align-items-center text-center">
          <h1
            style={{
              fontSize: '12rem',
              fontFamily: 'monospace',
              letterSpacing: '1rem',
            }}
            className="text-danger"
          >
            404
          </h1>
          <h1 className="display-4">Page not found</h1>
          <p className="mb-5">
            We are sorry! The page you requested could not be found.
          </p>
          <ButtonBase btnStyle="primary" path="/">
            Go to homepage
          </ButtonBase>
        </div>
      </div>
    </Container>
  </StyledPageNotFound>
));

export const RouteNotFound = () => (
  <Redirect to={{ state: { notFoundError: true } }} />
);

// @ts-ignore
export const CaptureRouteNotFound = withRouter(({ children, location }) => {
  // @ts-ignore
  return location && location.state && location.state.notFoundError ? (
    <PageNotFound />
  ) : (
    children
  );
});
