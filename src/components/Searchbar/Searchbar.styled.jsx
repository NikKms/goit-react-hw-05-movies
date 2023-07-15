import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 16px;
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
