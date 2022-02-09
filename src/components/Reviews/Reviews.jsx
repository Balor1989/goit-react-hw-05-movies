import { fetchMovieReviews } from '../../services/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(id).then(setReviews);
  }, [id]);

  console.log(reviews);
  return (
    <ul>
      {reviews &&
        reviews.results.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
