import { data } from '../data';
import MapComponent from './Map';
import { MoviesContainer } from './Styles/Movies.styled';

interface MapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  place: string;
}

export const Movies = ({ coordinates, place }: MapProps) => {
  console.log(data);

  return (
    <MoviesContainer>
      <h1>{place}</h1>
      <div className='main'>
        <div className='movie'>
          {data.map((movie) => {
            return (
              <div className='card' key={movie.id}>
                <div className='--image'>
                  <img src={movie.image} alt={movie.title} />
                </div>

                <div className='info'>
                  <h3>{movie.title}</h3>
                  <p>{movie.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <MapComponent coordinates={coordinates} />
      </div>
    </MoviesContainer>
  );
};

export default Movies;
