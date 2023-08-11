import { HeaderStyled, LogoLink } from './AppBar.styled';
import logo from '../../images/icons/logo.svg';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { Button, Container } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

export const AppBar = ({ onOpen }) => {
  return (
    <HeaderStyled>
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px="28px"
        maxW="1240px"
        py="8px"
      >
        <LogoLink to="/">
          <img src={logo} alt="logo" />
        </LogoLink>
        <Button
          bg="gray.700"
          color="whiteAlpha.800"
          onClick={onOpen}
          display="flex"
          alignItems="center"
          boxShadow="lg"
          borderRadius="md"
          _hover={{ bg: 'gray.600' }}
          cursor="text"
        >
          <AiOutlineSearch style={{ marginRight: '12px' }} />
          search movies
        </Button>
        <ColorModeSwitcher />
      </Container>
    </HeaderStyled>
  );
};
