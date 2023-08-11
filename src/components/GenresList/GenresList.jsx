import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

export const GenresList = ({ genres = [] }) => {
  return (
    <Box
      mt="12px"
      borderRadius="md"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexWrap="wrap"
      gap="12px"
      width="fit-content"
    >
      {genres.map((genre, index) => (
        <Box key={index} as="span" mb="4px" display="inline-block">
          <b>{genre.name}</b>
        </Box>
      ))}
    </Box>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
