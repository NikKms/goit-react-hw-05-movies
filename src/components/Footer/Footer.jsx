import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterText,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          Created by <strong>Nikolay Kamyshnikov</strong>
        </FooterText>
        <div style={{ display: 'flex', gap: '8px' }}>
          <FooterLink
            href="https://www.linkedin.com/in/nikolay-kamyshnikov-b67484258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </FooterLink>
          <FooterLink
            href="https://github.com/NikKms"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </FooterLink>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};
