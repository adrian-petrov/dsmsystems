import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface ILayout {
  children: React.ReactNode;
}

type TLayoutPage = {
  isHomePage: boolean;
};

const StyledLayout = styled.main<TLayoutPage>`
  flex: 1;
  margin-top: ${(p) => (p.isHomePage ? '0' : '8rem')};
`;

export const Layout = ({ children }: ILayout) => {
  const location = useLocation();

  const isHomePage = () => (location.pathname === '/' ? true : false);
  const isHome = isHomePage();

  return <StyledLayout isHomePage={isHome}>{children}</StyledLayout>;
};
