import PropTypes from 'prop-types';
import { Image } from '@chakra-ui/react';

export const MoviePoster = ({ posterPath, title }) => {
  const imageUrl =
    posterPath ||
    'https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg';

  return <Image maxW={{ base: '100%' }} src={imageUrl} alt={title} />;
};

MoviePoster.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
};
