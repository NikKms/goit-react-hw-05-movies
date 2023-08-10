import { HeaderStyled, LogoLink } from './AppBar.styled';
import logo from '../../images/icons/logo.svg';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import Searchbar from 'components/Searchbar/Searchbar';

export const AppBar = () => {
  return (
    <HeaderStyled>
      <LogoLink to="/">
        <img src={logo} alt="logo" />
      </LogoLink>
      <Searchbar />

      <ColorModeSwitcher />
    </HeaderStyled>
  );
};
