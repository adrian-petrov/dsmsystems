import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';

interface INavDropdown {
  title: string;
  to: string;
  items: INavDropdownItem[];
  isStickyNav?: boolean;
}

interface INavDropdownItem {
  id: number;
  title: string;
  path: string;
}

interface IUnorderedList {
  isToggled: boolean;
}

interface ILinkParent {
  location: string;
  isStickyNav: boolean;
}

const StyledLinkParent = styled(Link)<ILinkParent>`
  position: relative;
  display: flex;
  padding: 2rem;

  &:hover > svg {
    fill: var(--bluePrimary);
  }

  & > svg {
    width: 13px;
    fill: ${({ location, isStickyNav }) =>
      location === '/' && !isStickyNav ? 'white' : 'var(--bodyPrimary)'};
    margin-left: 10px;
  }
`;

const StyledUnorderedList = styled.ul<IUnorderedList>`
  position: absolute;
  top: 90%;
  left: 0%;
  width: 250px;
  padding: 0;
  z-index: 100;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 25px;
  list-style: none;
  background-color: white;
  transition: all 0.15s ease-in;
  ${({ isToggled }) =>
    isToggled
      ? `
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  `
      : `
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
  `}

  svg {
    width: 20px;
    margin-right: 1rem;
  }

  & li {
    &:hover {
      background-color: var(--lightGray);
    }
    & a {
      font-size: 1.3rem;
      padding: 1.5rem 2.5rem;
      color: var(--bodyPrimary);
      flex: 1;
      display: flex;
      align-items: center;

      &:hover svg {
        fill: var(--bluePrimary);
      }
    }
  }
`;

export const NavDropdown = ({
  title,
  to,
  items,
  isStickyNav = false,
}: INavDropdown) => {
  const [isToggled, setIsToggled] = React.useState(false);
  const location = useLocation();

  const handleMouseEnter = () => setIsToggled(true);
  const handleMouseLeave = () => setIsToggled(false);

  const scrollIntoViewWithOffset = (element: HTMLElement) => {
    const elementYOffset =
      Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      ) + element.getBoundingClientRect().top;

    const additionalYOffset = -80;
    window.scrollTo({
      top: elementYOffset + additionalYOffset,
      behavior: 'smooth',
    });
  };

  return (
    <StyledLinkParent
      isStickyNav={isStickyNav}
      location={location.pathname}
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      onClick={handleMouseLeave}
    >
      {title}
      <svg viewBox="0 0 512.012 512.012">
        <path
          d="M505.325,129.52c-9.241-9.802-24.699-10.167-34.452-0.951l-214.88,203.566L41.138,128.57
          c-9.753-9.241-25.187-8.851-34.452,0.951c-9.265,9.777-8.851,25.211,0.927,34.476l231.63,219.439
          c4.681,4.438,10.728,6.681,16.75,6.681c6.022,0,12.093-2.243,16.775-6.681l231.63-219.439
          C514.176,154.731,514.59,139.298,505.325,129.52z"
        />
      </svg>
      <StyledUnorderedList isToggled={isToggled}>
        {items.map((item) => (
          <li tabIndex={0} key={item.id}>
            <NavHashLink
              scroll={scrollIntoViewWithOffset}
              to={item.path}
              tabIndex={-1}
            >
              {item.title}
            </NavHashLink>
          </li>
        ))}
      </StyledUnorderedList>
    </StyledLinkParent>
  );
};
