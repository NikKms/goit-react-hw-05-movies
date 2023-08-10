import { useEffect, useState } from 'react';
import { displayNoResultMessage } from 'ErrorHandling/errorHandling';
import { useParams } from 'react-router-dom';

export const useMovieData = fetchFunction => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchData = async () => {
      try {
        const result = await fetchFunction(movieId);
        setData(result);
      } catch (error) {
        displayNoResultMessage(setError);
      }
    };

    fetchData();
  }, [movieId, fetchFunction]);

  return { data, error };
};
