import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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

export const Movies = ({ coordinates, place, movies, setLoaded }: MapProps) => {
  const navigate = useNavigate();

  const svgRef = useRef<SVGSVGElement>(null!);

  const svgClick = () => {
    setLoaded(false);
    navigate('/');
  };

  return (
    <MoviesContainer>
      <div className='top'>
        <h1>{place}</h1>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          id='svg'
          fill='currentColor'
          className='bi bi-sign-turn-slight-left-fill'
          viewBox='0 0 16 16'
          ref={svgRef}
          onClick={svgClick}
        >
          <path
            fill-rule='evenodd'
            d='M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM6.864 8.368l.8-1.386.607.364A1.5 1.5 0 0 1 9 8.632V11h1V8.632A2.5 2.5 0 0 0 8.786 6.49l-.62-.373.665-1.154a.25.25 0 0 0-.259-.371l-3.026.523a.25.25 0 0 0-.192.333l1.06 2.882a.25.25 0 0 0 .451.039Z'
          />
        </svg>
      </div>
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
