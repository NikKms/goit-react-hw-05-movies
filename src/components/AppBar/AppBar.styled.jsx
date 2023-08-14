import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #1a202c;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`;

export const LogoLink = styled(Link)`
  display: inline-block;
  img {
    width: 35px;
  }
`;
