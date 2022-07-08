import React from 'react';
import BurgerButton from 'react-css-burger';

interface IHamburger {
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Burger = ({ isOpen, onClick }: IHamburger) => {
  return (
    <BurgerButton
      active={isOpen}
      onClick={onClick}
      burger="collapse"
      color={isOpen ? 'var(--bodyTertiary)' : 'black'}
      marginTop="5px"
      marginLeft={'2px'}
      scale={isOpen ? 0.5 : 0.7}
      style={{ zIndex: 1000, position: 'absolute' }}
    />
  );
};
