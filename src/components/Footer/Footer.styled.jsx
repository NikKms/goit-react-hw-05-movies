import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  background-color: #1a202c;
  padding: 8px 28px 8px 28px;
  border-top: 1px solid #e2e8f0;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const FooterText = styled.p`
  color: #fff;
  font-size: 13px;
`;

export const FooterLink = styled.a`
  color: #fff;
  transition: color 0.2s;
  &:hover {
    color: orange;
  }
`;
