import React from 'react';
import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-image';

interface ICardService {
  children?: React.ReactNode;
  title: string;
  icon: string;
  className?: string;
}

const StyledCard = styled.div`
  max-height: 300px;
  max-width: 320px;
  position: relative;
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  border: 0;
  border-radius: 12px;

  h3 {
    margin-bottom: 4rem;
    text-align: center;
  }

  & img {
    height: 40px;
    width: 40px;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      height: 60px;
      width: 60px;
    }
  }
`;

export const CardService = ({
  children,
  title,
  icon,
  className,
}: ICardService) => {
  return (
    <StyledCard className={className}>
      <ProgressiveImage src={icon} placeholder="">
        {(src: string, loading: boolean) =>
          loading ? (
            <div style={{ paddingBottom: '100%' }}>
              <div
                style={{
                  height: 60,
                  width: 60,
                  border: '2px solid var(--dsmOrange)',
                  borderRadius: '6px',
                }}
              />
            </div>
          ) : (
            <img src={src} alt="Service card" />
          )
        }
      </ProgressiveImage>
      <h3>{title}</h3>
      <p>{children}</p>
    </StyledCard>
  );
};
