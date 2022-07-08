import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

interface IButton {
  children: React.ReactNode;
  className?: string;
  btnStyle?: 'primary' | 'secondary' | 'tertiary';
  path?: string | null;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isSubmitting?: boolean;
  isDisabled?: boolean;
}

const StyledButtonLink = styled(Link)<IButton>`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  min-width: 11rem;
  max-width: 21rem;
  padding: 1.2rem 2.4rem;
  box-shadow: ${({ btnStyle }) =>
    (btnStyle === 'primary' && '0px 5px 20px 0px rgba(80,150,224,0.6);') ||
    (btnStyle === 'secondary' && '0px 5px 30px 2px rgba(143, 143, 143, 1)')};
  border-radius: 32px;
  background-color: ${({ btnStyle }) =>
    (btnStyle === 'primary' && 'var(--bluePrimary)') ||
    (btnStyle === 'secondary' && 'var(--dsmOrange)')};
  color: #ffff;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: var(--bluePrimaryDark);
    color: white;
  }

  svg {
    height: 13px;
    margin-left: 10px;
    fill: #ffffff;
  }
`;

const StyledButton = styled.button<IButton>`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  min-width: 11rem;
  max-width: 21rem;
  padding: 1.2rem 2.4rem;
  box-shadow: ${(p) =>
    (p.btnStyle === 'primary' && '0px 5px 20px 0px rgba(80,150,224,0.6);') ||
    (p.btnStyle === 'secondary' && '0px 5px 30px 2px rgba(143, 143, 143, 1)')};
  border-radius: 32px;
  background-color: ${(p) =>
    (p.btnStyle === 'primary' && 'var(--bluePrimary)') ||
    (p.btnStyle === 'secondary' && 'var(--dsmOrange)')};
  color: #ffff;
  border-width: none;
  border-style: none;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: var(--bluePrimaryDark);
    color: white;
  }

  &:active {
    outline: none;
  }

  svg {
    height: 13px;
    margin-left: 10px;
    fill: #ffffff;
  }

  &:disabled {
    background-color: var(--mediumGray);
    color: var(--bodySecondary);
    box-shadow: none;

    cursor: auto;

    &:hover {
      background: var(--mediumGray);
    }
  }
`;

/**
 * Button base that can be:
 * a Link component,
 * a submit button,
 * a standard button
 */
export const ButtonBase = ({
  children,
  className,
  btnStyle = 'primary',
  path = null,
  type = 'button',
  isSubmitting = false,
  isDisabled = false,
}: IButton) => {
  return path !== null ? (
    <StyledButtonLink className={className} btnStyle={btnStyle} to={path}>
      {children}
    </StyledButtonLink>
  ) : type === 'submit' ? (
    <StyledButton
      className={className}
      type={type}
      btnStyle={btnStyle}
      isSubmitting={isSubmitting}
      disabled={isDisabled}
    >
      {isSubmitting ? <Spinner animation="border" /> : children}
    </StyledButton>
  ) : (
    <StyledButton
      className={className}
      type={type}
      btnStyle={btnStyle}
      disabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
};
