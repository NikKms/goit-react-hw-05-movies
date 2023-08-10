import { useContext, useEffect, useState } from 'react';

import { getSearchMovie } from 'services/api';

import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { displayNoResultMessage } from 'ErrorHandling/errorHandling';
import { StyledMoviesPage } from './Movies.styled';
import { Box, Button, Heading } from '@chakra-ui/react';
import { searchParamsContext } from 'context/contextProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@chakra-ui/icons';

const Movies = () => {
  const { searchParams } = useContext(searchParamsContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const query = searchParams.get('query');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async query => {
      try {
        setLoading(true);
        const data = await getSearchMovie(query);
        setMovies(data.results);
        setHasSearched(true);
      } catch (error) {
        displayNoResultMessage(setError);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchMovies(query);
    } else {
      setMovies([]);
      setHasSearched(false);
    }
  }, [query]);

  const handleGoBack = () => {
    if (location.state) {
      navigate(location.state.from);
    }

    navigate('/');
  };

  return (
    <StyledMoviesPage>
      <>
        <Button
          type="button"
          onClick={handleGoBack}
          gap="8px"
          mb="28px"
          _hover={{ color: 'orange' }}
        >
          <ArrowLeftIcon /> HOME
        </Button>

        {loading && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
          >
            <Loader />
          </Box>
        )}
        {error ? (
          <p>Ooops, error: {error}</p>
        ) : movies.length === 0 ? (
          hasSearched && <p>Sorry, no results found</p>
        ) : (
          <>
            <Heading
              fontSize="32px"
              color="orange"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)
              "
              mb="28px"
            >
              According to your request, {query.toUpperCase()} found{' '}
              {movies.length} movies
            </Heading>
            <MovieList movies={movies} />
          </>
        )}
      </>
    </StyledMoviesPage>
  );
};

export default Movies;
