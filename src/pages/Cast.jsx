import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { displayNoResultMessage } from 'ErrorHandling/errorHandling';

import { StyledCast } from './styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        displayNoResultMessage(setError);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <section>
      {error && <p>{error}</p>}
      {!error && cast.length > 0 ? (
        <StyledCast>
          {cast.map(({ id, name, character, profile_path }) => (
            <div key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg'
                }
                alt={name}
              />
              <p>{name}</p>
              <p>{character}</p>
            </div>
          ))}
        </StyledCast>
      ) : (
        <p>
          Sorry, we are currently gathering all the actors who appeared in this
          movie. They will be added to the list soon.
        </p>
      )}
    </section>
  );
};

export default Cast;
