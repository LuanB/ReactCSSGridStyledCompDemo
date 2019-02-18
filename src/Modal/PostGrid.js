import styled, { css } from 'styled-components';

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoGrid = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: 60px auto 40px;
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap: 20px;
  grid-auto-rows: 305px;
  ${({ cascade }) =>
    cascade &&
    css`
      grid-auto-rows: 200px;
      grid-gap: 5px;
    `} @media (max-width: 990px) {
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(33vw - 10px);
  }
`;
