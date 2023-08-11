import PropTypes from 'prop-types';
import { AspectRatio, Box } from '@chakra-ui/react';

export const Trailer = ({ trailerKey, title }) => {
  return (
    <Box mb="24px">
      <AspectRatio ratio={16 / 9}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title={`${title} Trailer`}
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Box>
  );
};

Trailer.propTypes = {
  trailerKey: PropTypes.string,
  title: PropTypes.string,
};
