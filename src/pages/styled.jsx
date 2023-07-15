import styled from '@emotion/styled';

export const StyledMovieDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

export const MoviePoster = styled.div`
  flex: 0 0 200px;
  margin-right: 20px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const MovieInfo = styled.div`
  flex: 1;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 5px;
  }

  h2 {
    font-size: 18px;
    margin: 15px 0 5px;
  }

  span {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 5px 10px;
    background-color: #f2f2f2;
    border-radius: 4px;
  }
`;

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

export const StyledLinkWraper = styled.div`
  font-family: Arial, sans-serif;
  margin-bottom: 20px;

  & h3 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 10px;
  }

  & ul {
    display: flex;
    gap: 16px;
    list-style-type: none;
    padding: 0;
  }

  & li {
    border: 1px solid gray;
    border-radius: 4px;
    padding: 4px;
  }

  & a {
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  & div {
    background-color: #f5f5f5;
    padding: 10px;
  }
`;

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
