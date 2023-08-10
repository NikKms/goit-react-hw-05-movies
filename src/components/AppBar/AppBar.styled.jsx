import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #1a202c;
  padding: 8px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      gap: 28px;

      li {
        a {
          font-size: 20px;
          text-decoration: none;
          color: #fff;
          font-weight: bold;

          &:hover {
            color: orange;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export const LogoLink = styled(Link)`
  display: inline-block;
  img {
    width: 35px;
  }
`;
