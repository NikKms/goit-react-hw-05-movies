import { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { StyledForm, StyledContainer } from './Searchbar.styled';
import { Button, Input } from '@chakra-ui/react';

import { searchParamsContext } from 'context/contextProvider';

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { handleRequest } = useContext(searchParamsContext);

  const handleSubmit = e => {
    e.preventDefault();
    handleRequest(searchValue);
    setSearchValue('');
  };

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContainer>
        <Input
          color="whiteAlpha.800"
          variant="unstyled"
          type="text"
          autoComplete="off"
          name="searchValue"
          placeholder="Search movies"
          value={searchValue}
          onChange={handleChange}
        />
        <Button
          bg="gray.700"
          color="orange"
          variant="ghost"
          transition="color 0.3s, background-color 0.3s, border-color 0.3s"
          _hover={{ color: 'white', bg: 'orange', borderColor: 'orange' }}
          type="submit"
        >
          <AiOutlineSearch />
        </Button>
      </StyledContainer>
    </StyledForm>
  );
};

export default Searchbar;
