import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  background-color: #333;
  padding: 16px;

  nav {
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-right: 16px;

        a {
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

export const MainStyled = styled.main`
  padding: 28px;
  background-color: #f9f9f9;
`;
