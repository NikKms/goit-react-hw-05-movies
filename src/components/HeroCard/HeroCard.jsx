import React, { useState, useEffect } from 'react';
import { Box, Heading, Button, Text } from '@chakra-ui/react';
import { displayNoResultMessage } from 'ErrorHandling/errorHandling';
import { getUpcomingMovies } from 'services/api';
import { useLocation, useNavigate } from 'react-router-dom';

export const HeroCard = () => {
  const [randomMovie, setRandomMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const data = await getUpcomingMovies();
        setRandomMovie(data);
      } catch (error) {
        displayNoResultMessage(setError);
      }
    };

    getRandomMovie();
  }, []);

  const handleViewDetails = () => {
    if (location.state) {
      navigate(location.state.from);
    }
    navigate(`/movies/${randomMovie.id}`);
  };

  return (
    <Box
      mb="56px"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      flexDirection="column"
      position="relative"
      p={6}
      borderWidth="1px"
      boxShadow="lg"
      color="white"
      minH="420px"
    >
      {randomMovie && randomMovie.backdrop_path && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent), url(https://image.tmdb.org/t/p/w500/${randomMovie.backdrop_path})`}
          backgroundSize="cover"
          backgroundPosition="center"
        />
      )}

      {error ? (
        <p>{error}</p>
      ) : randomMovie ? (
        <Box zIndex="9" gap="28px" display="flex" flexDirection="column">
          <Text as="h3" color="orange">
            Don't Miss Out: Coming Soon to Theaters!{' '}
          </Text>
          <Heading as="h1" size="lg" mb={2} color="white" mr="auto">
            {randomMovie.title ||
              randomMovie.name ||
              randomMovie.original_title}
          </Heading>
        </Box>
      ) : (
        <p>Loading...</p>
      )}
      <Button
        colorScheme="orange"
        onClick={handleViewDetails}
        alignSelf="flex-end"
      >
        View Details
      </Button>
    </Box>
  );
};

export default HeroCard;
