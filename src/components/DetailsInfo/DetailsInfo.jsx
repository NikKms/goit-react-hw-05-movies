import PropTypes from 'prop-types';
import { Box, Heading } from '@chakra-ui/react';
import { useMovieData } from 'hooks/useMovieData';
import { MoviePoster } from 'components/MoviePoster';
import { Trailer } from 'components/Trailer';
import { GenresList } from 'components/GenresList';
import { getMovieVideos } from 'services/api';

export const DetailsInfo = ({
  posterPath,
  title,
  voteAverage,
  overview,
  genres,
}) => {
  const { data: videos, error: trailerError } = useMovieData(getMovieVideos);

  const trailerKey = videos?.find(video => video.type === 'Trailer')?.key;

  return (
    <Box mt="28px">
      <Heading mb="12px">{title}</Heading>
      <Box
        mt="12px"
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        gap={{ base: '12px', md: '24px' }}
      >
        <Box flex="1" maxW="520px">
          <MoviePoster posterPath={posterPath} title={title} />
        </Box>
        <Box flex="1">
          {trailerKey && !trailerError && (
            <Trailer trailerKey={trailerKey} title={title} />
          )}

          <Box>
            <p>Users score: {(voteAverage * 10).toFixed()}%</p>
            <Heading as="h3" size="md" mt="12px">
              Overview
            </Heading>
            <p>{overview}</p>
            <Heading as="h3" size="md" mt="24px">
              Genres
            </Heading>
            <GenresList genres={genres} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

DetailsInfo.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  voteAverage: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
