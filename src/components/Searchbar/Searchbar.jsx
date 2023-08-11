import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { StyledForm } from './Searchbar.styled';
import { Button, Input } from '@chakra-ui/react';

import { searchParamsContext } from 'context/contextProvider';

const Searchbar = ({ onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  const { handleRequest } = useContext(searchParamsContext);

  const handleSubmit = e => {
    e.preventDefault();
    handleRequest(searchValue);
    setSearchValue('');
    onClose();
  };

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        variant="unstyled"
        type="text"
        autoComplete="off"
        name="searchValue"
        placeholder="Search movies"
        value={searchValue}
        onChange={handleChange}
        width="100%"
      />
      <Button
        border="1px"
        color="orange"
        variant="ghost"
        transition="color 0.3s, background-color 0.3s, border-color 0.3s"
        _hover={{ color: 'white', bg: 'orange', borderColor: 'orange' }}
        type="submit"
      >
        <AiOutlineSearch />
      </Button>
    </StyledForm>
  );
};

Searchbar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Searchbar;
