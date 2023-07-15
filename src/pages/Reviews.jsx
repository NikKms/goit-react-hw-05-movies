import { displayNoResultMessage } from 'ErrorHandling/errorHandling';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { StyledReviews } from './styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        displayNoResultMessage(setError);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <section>
      <StyledReviews>
        {error && <p className="error">{error}</p>}
        {!error && reviews.length > 0 ? (
          <div>
            {reviews.map(({ id, author, content }) => (
              <div className="review" key={id}>
                <p className="author">{author}</p>
                <p>{content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews available.</p>
        )}
      </StyledReviews>
    </section>
  );
};

export default Reviews;
