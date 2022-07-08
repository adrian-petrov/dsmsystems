import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Burger } from './Burger';
import { Overlay } from './Overlay';

interface IHamburger {
  isOpen: boolean;
}

const StyledHamburgerMenu = styled.div<IHamburger>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 220px;
  background-color: var(--sidebar);
  padding: 6rem 1.5rem;
  display: flex;
  flex-direction: column;
  transform: ${(p) => (p.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: all 0.3s ease-in-out;

  & a {
    color: var(--bodyTertiary);
    padding: 2rem;
    font-size: 1.7rem;
    text-transform: uppercase;
  }
`;

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const parentNodeRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleClickOutside = React.useCallback(
    (event: MouseEvent): void => {
      if (
        parentNodeRef.current &&
        parentNodeRef.current.contains(event.target as Node)
      ) {
        return;
      }
      toggleMenu();
    },
    [toggleMenu]
  );

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, handleClickOutside]);

  return (
    <div
      ref={parentNodeRef}
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Burger isOpen={isOpen} onClick={toggleMenu} />
      <StyledHamburgerMenu isOpen={isOpen}>
        <Link onClick={toggleMenu} to="/">
          Home
        </Link>
        <Link onClick={toggleMenu} to="/about">
          About
        </Link>
        <Link onClick={toggleMenu} to="/services">
          Services
        </Link>
        <Link onClick={toggleMenu} to="/contact">
          Contact
        </Link>
      </StyledHamburgerMenu>
      <Overlay show={isOpen} />
    </div>
  );
};
