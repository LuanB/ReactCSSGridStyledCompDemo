import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ImageLink = styled(Link)`
  background: no-repeat center/150% url(/img/${({ index }) => index}.jpg);
  background-size: cover;
  :hover {
    opacity: 0.7;
  }
  ${({ cascade }) =>
    cascade &&
    css`
      background-size: cover;
      &:nth-of-type(2n) {
        grid-row-start: span 2;
      }
    `};
`;
