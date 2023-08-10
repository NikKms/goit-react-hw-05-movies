import styled from '@emotion/styled';

export const StyledReviews = styled.div`
  font-family: Arial, sans-serif;
  margin-top: 20px;

  & p {
    margin: 0;
  }

  & .error {
    color: red;
    font-weight: bold;
  }

  & .review {
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 10px;
  }

  & .author {
    font-weight: bold;
  }
`;
