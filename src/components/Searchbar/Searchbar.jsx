import PropTypes from 'prop-types';

import { AiOutlineSearch } from 'react-icons/ai';
import { StyledForm, StyledInput, StyledButton } from './Searchbar.styled';
import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchValue);
    setSearchValue('');
  };

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        autoComplete="off"
        autoFocus
        name="searchValue"
        placeholder="Search movies"
        value={searchValue}
        onChange={handleChange}
      />
      <StyledButton type="submit">
        <AiOutlineSearch />
      </StyledButton>
    </StyledForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
