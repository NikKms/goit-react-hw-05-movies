import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    h4 {
      color: orange;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
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
    color: inherit;
    transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
  }

  @media (min-width: 1200px) {
    width: calc((100% - 28px * 3) / 4);
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    width: calc((100% - 28px * 2) / 3);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
