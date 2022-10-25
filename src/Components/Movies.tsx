import MapComponent from './Map';
import { MoviesContainer } from './Styles/Movies.styled';

interface MapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  place: string;
  movies: any[];
  setLoaded: (loaded: boolean) => void;
}

export const Movies = ({ coordinates, place, movies}: MapProps) => {
  return (
    <MoviesContainer>
      <h1>{place}</h1>
      <div className='main'>
        <MapComponent coordinates={coordinates} />
        <div className='movie'>
          {movies?.map((movie) => {
            return (
              <div className='card' key={movie?.id}>
                <div className='--image'>
                  <img src={movie?.image} alt={movie?.title} />
                </div>
                <div className='info'>
                  <h3>{movie?.title}</h3>
                  <p>{movie?.description}</p>
                  <p>Rating: {movie?.imDbRating}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MoviesContainer>
  );
};

export default Movies;
