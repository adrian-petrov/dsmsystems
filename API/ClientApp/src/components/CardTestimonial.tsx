import React from 'react';
import styled from 'styled-components';

interface ICardTestimonial {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const StyledCard = styled.div`
  color: var(--bodySecondary);
  background-color: transparent;
  border: 0;
  border-radius: 12px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & footer {
    color: var(--bodyTertiary);
  }
`;

export const CardTestimonial = ({
  children,
  title,
  subtitle,
}: ICardTestimonial) => {
  return (
    <StyledCard>
      <div
        className="font-italic"
        style={{
          position: 'relative',
          textAlign: 'left',
          paddingTop: '4rem',
          marginBottom: '1rem',
        }}
      >
        <svg
          style={{
            position: 'absolute',
            top: 5,
            width: '40px',
            zIndex: 0,
          }}
          viewBox="0 0 44.109 31.652"
        >
          <path
            d="M1.292,72.3H17.9a1.292,1.292,0,0,1,1.292,1.292V90.2A1.292,1.292,0,0,1,17.9,91.494H10.89v11.165A1.292,1.292,0,0,1,9.6,103.951H5.445a1.292,1.292,0,0,1-1.226-.884L.066,90.61A1.292,1.292,0,0,1,0,90.2V73.591A1.292,1.292,0,0,1,1.292,72.3Z"
            transform="translate(24.915 -72.299)"
            fill="#ff8d85"
            fillOpacity="0.8"
          />
          <path
            d="M290.492,72.3H307.1a1.292,1.292,0,0,1,1.292,1.292V90.2a1.292,1.292,0,0,1-1.292,1.292H300.09v11.165a1.292,1.292,0,0,1-1.292,1.292h-4.153a1.292,1.292,0,0,1-1.226-.884L289.266,90.61a1.292,1.292,0,0,1-.066-.409V73.591A1.292,1.292,0,0,1,290.492,72.3Z"
            transform="translate(-289.2 -72.299)"
            fill="#ff8d85"
            fillOpacity="0.8"
          />
        </svg>
        {children}
      </div>
      <footer className="blockquote-footer mb-2 ">
        {title}, {subtitle}
      </footer>
    </StyledCard>
  );
};
