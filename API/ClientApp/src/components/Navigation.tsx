import React from 'react';
import { NavDropdown } from './NavDropdown';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logos/dsm-logos/dsm-logo-landscape.png';
import { debounce } from '../helpers/debounce';
import './Navigation.scss';
import { HamburgerMenu } from './BurgerMenu';

interface INavigation {
  location: string;
}

const StyledNav = styled.nav<INavigation>`
  position: absolute;
  background: ${({ location }) => (location === '/' ? 'none' : 'white')};
  height: 8rem;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
  display: flex;
  padding: 0 3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 600;

  & a {
    color: ${({ location }) =>
      location === '/' ? '#FFFFFF' : 'var(--bodyPrimary)'};

    &:hover {
      color: var(--bluePrimary);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavResponsive = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 6rem;
  width: 100%;
  padding: 0 2rem;
  background: white;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavSticky = styled.nav`
  position: absolute;
  text-transform: uppercase;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 3rem;
  height: 6rem;
  transform: translateY(-100px);
  opacity: 0;
  background-color: white;
  z-index: 100;
  display: flex;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 600;
  transition: all 0.5s ease-in-out;

  & a:hover {
    color: var(--bluePrimary);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(Link)`
  color: var(--bodyPrimary);
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem;
`;

export const Navigation = () => {
  const services = [
    {
      id: 1,
      title: 'Managed IT Support',
      path: '/services#it-support',
    },
    {
      id: 2,
      title: 'Network Infrastructure',
      path: '/services#network-infrastructure',
    },
    {
      id: 3,
      title: 'Cloud Services',
      path: '/services#cloud',
    },
    {
      id: 4,
      title: 'Telephony',
      path: '/services#telephony',
    },
    {
      id: 5,
      title: 'IT Consultancy',
      path: '/services#it-consultancy',
    },
    {
      id: 6,
      title: 'Cybersecurity',
      path: '/services#cybersecurity',
    },
  ];
  const location = useLocation();
  const navRef = React.useRef<HTMLElement | null>(null);
  const navStickyRef = React.useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    const distanceY = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const navDOMRectBottom =
      navRef.current?.getBoundingClientRect().bottom ?? 80;

    if (
      distanceY > navDOMRectBottom &&
      navRef.current !== null &&
      navStickyRef.current !== null
    ) {
      navRef.current.classList.add('hidden');
      navStickyRef.current.classList.add('nav-sticky');
    } else if (
      distanceY < navDOMRectBottom &&
      navRef.current !== null &&
      navStickyRef.current !== null
    ) {
      navRef.current.classList.remove('hidden');
      navStickyRef.current.classList.remove('nav-sticky');
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 50));

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      {/* Large screen navigation */}
      <StyledNav location={location.pathname} ref={navRef}>
        {/* Logo */}
        <StyledNavLink to="/">
          <img className="logo" src={logo} alt="DSM Systems Logo" />
        </StyledNavLink>
        {/* Navbar */}
        <div className="navigation-bar">
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          {/* Services */}
          <NavDropdown title="Services" items={services} to="/services" />
          {/*<StyledNavLink to="/news">News</StyledNavLink>*/}
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </div>
      </StyledNav>
      {/* Mobile navigation */}
      <StyledNavResponsive>
        <HamburgerMenu />
        <StyledNavLink to="/">
          <img className="logo" src={logo} alt="DSM Systems Logo" />
        </StyledNavLink>
      </StyledNavResponsive>
      {/* Large screen sticky navigation */}
      <StyledNavSticky ref={navStickyRef}>
        {/* Logo */}
        <StyledNavLink to="/">
          <img
            className="logo"
            style={{ maxWidth: '150px' }}
            src={logo}
            alt="DSM Systems Logo"
          />
        </StyledNavLink>
        {/* Navbar */}
        <div className="navigation-bar">
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          {/* Services */}
          <NavDropdown
            isStickyNav={true}
            title="Services"
            items={services}
            to="/services"
          />
          {/*<StyledNavLink to="/news">News</StyledNavLink>*/}
          <StyledNavLink to="/contact">Contact</StyledNavLink>
        </div>
      </StyledNavSticky>
    </>
  );
};
