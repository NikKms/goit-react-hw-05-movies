import styled from '@emotion/styled';

export const StyledCast = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;

  div {
    text-align: center;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 4px;
    }

    p {
      margin-top: 10px;
    }
  }
`;
