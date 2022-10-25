import { useEffect, useState } from 'react';
import { Movies, Welcome, Loading } from './Components';
import { ninjasKey, imbdKey } from './auth';
import './App.css';

export default function App() {
  const [place, setPlace] = useState<string>('');
  const [isError, setIsError] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 10, lng: 10 });
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const getInfo = async () => {
      if (isLoading || place === '') return;
      setIsLoading(true);
      const locationData = await fetch(
        `https://api.api-ninjas.com/v1/city?name=${place}`,
        {
          method: 'GET',
          headers: {
            'X-Api-Key': ninjasKey
          }
        }
      );
      const dataJson = await locationData.json();
      if (dataJson?.length === 0) {
        setIsError(true);
        setIsLoading(false);
        setLoaded(false);
        return;
      }

      setCoordinates({
        lat: dataJson[0]?.latitude,
        lng: dataJson[0]?.longitude
      });

      const movieData = await fetch(
        `https://imdb-api.com/API/AdvancedSearch/${imbdKey}?locations=${place}`
      );
      const movieDataJson = await movieData.json();
      setMovies(movieDataJson.results);

      if (movieDataJson?.results?.length === 0) {
        setIsError(true);
      } else {
        setIsError(false);
      }
      setIsLoading(false);
      setLoaded(true);
    };
    getInfo();
  }, [place]);

  if (isLoading && loaded === false) {
    return <Loading />;
  } else {
    return (
      <div className='App'>
        {loaded ? (
          <Movies
            coordinates={coordinates}
            place={place}
            movies={movies}
            setLoaded={setLoaded}
          />
        ) : (
          <Welcome
            setPlace={setPlace}
            isError={isError}
            place={place}
            isLoading={isLoading}
          />
        )}
      </div>
    );
  }
}
