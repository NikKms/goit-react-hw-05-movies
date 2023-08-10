import { displayNoResultMessage } from 'ErrorHandling/errorHandling';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList';
import { useContext, useEffect, useState } from 'react';
import { getTrendFilms } from 'services/api';
import { StyledHomePage } from './Home.styled';
import { Box, Heading } from '@chakra-ui/react';
import { searchParamsContext } from 'context/contextProvider';
import { HeroCard } from 'components/HeroCard/HeroCard';

const Home = () => {
  const { setSearchParams } = useContext(searchParamsContext);
  const [trendFilms, setTrendFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        setLoading(true);
        const data = await getTrendFilms();
        setTrendFilms(data.results);
      } catch (error) {
        displayNoResultMessage(setError);
      } finally {
        setLoading(false);
      }
    };
    fetchTrend();
    setSearchParams({});
  }, [setSearchParams]);

  return (
    <StyledHomePage>
      {loading && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Loader />
        </Box>
      )}
      {error && (
        <Box as="div" fontSize="26px" color="red.500">
          {error}
        </Box>
      )}
      {trendFilms.length > 0 && (
        <>
          <HeroCard />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={6}
          >
            <Heading
              fontSize="36px"
              color="orange"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
              mb="28px"
            >
              Cinematic Pulse: Latest Trends and Masterpieces
            </Heading>
          </Box>
          <MovieList movies={trendFilms} />
        </>
      )}
    </StyledHomePage>
  );
};

export default Home;
