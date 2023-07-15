import { displayNoResultMessage } from 'ErrorHandling/errorHandling';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList';
import { useEffect, useState } from 'react';
import { getTrendFilms } from 'services/api';

const Home = () => {
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
  }, []);

  return (
    <section>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <MovieList movies={trendFilms} />
    </section>
  );
};

export default Home;
