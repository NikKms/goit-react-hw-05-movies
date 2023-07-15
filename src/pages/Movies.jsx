import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getSearchMovie } from 'services/api';

import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import { displayNoResultMessage } from 'ErrorHandling/errorHandling';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

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

    fetchMovies(query);
  }, [query]);

  const handleRequest = query => {
    setSearchParams({ query: query });
  };

  return (
    <section>
      <Searchbar onSubmit={handleRequest} />
      <section>
        {loading && <Loader />}
        {error ? (
          <p>Ooops, error: {error}</p>
        ) : movies.length === 0 ? (
          hasSearched && <p>Sorry, no results found</p>
        ) : (
          <MovieList movies={movies} />
        )}
      </section>
    </section>
  );
};

export default Movies;
