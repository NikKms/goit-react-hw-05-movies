import styled from '@emotion/styled';

export const Item = styled.li`
  width: 280px;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 12px;
  }

  h4 {
    margin: 0;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
  }
`;
