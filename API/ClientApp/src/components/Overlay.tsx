import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface IOverlay {
  show: boolean;
}

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
`;

export const Overlay = ({ show }: IOverlay) => {
  const overlayRoot = document.getElementById('overlay-root');
  const element = document.createElement('div');

  React.useEffect(() => {
    overlayRoot!.appendChild(element);

    return () => {
      overlayRoot!.removeChild(element);
    };
  });

  return show ? ReactDOM.createPortal(<StyledOverlay />, element) : null;
};
