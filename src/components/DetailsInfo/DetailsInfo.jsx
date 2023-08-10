import PropTypes from 'prop-types';
import { Box, Heading, Image, AspectRatio } from '@chakra-ui/react';
import { getMovieVideos } from 'services/api';
import { useMovieData } from 'hooks/useMovieData';

export const DetailsInfo = ({
  posterPath,
  title,
  voteAverage,
  overview,
  genres,
  id,
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
          <Image
            maxW={{ base: '100%' }}
            src={
              posterPath ||
              'https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg'
            }
            alt={title}
          />
        </Box>
        <Box flex="1">
          {trailerKey && !trailerError && (
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
            <Box mt="12px">
              {genres &&
                genres.map((genre, index) => (
                  <Box
                    as="span"
                    backgroundColor="gray.500"
                    borderRadius="md"
                    padding="4px 8px"
                    key={index}
                    mr="4px"
                    mb="4px"
                    display="inline-block"
                  >
                    {genre.name}
                  </Box>
                ))}
            </Box>
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
  id: PropTypes.number,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};
