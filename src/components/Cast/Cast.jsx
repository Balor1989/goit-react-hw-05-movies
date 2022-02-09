import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../services/fetchMovies';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(id).then(setCast);
  }, [id]);

  return (
    <>
      <ul>
        {cast &&
          cast.cast.map(item => (
            <li key={item.credit_id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
                    : `https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496_1280.png`
                }
                alt={item.character}
                width="150px"
              />
              <h3>{item.character}</h3>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
