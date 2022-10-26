import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Movies, Welcome, Loading } from './Components';
import { ninjasKey, imbdKey } from './auth';
import './App.css';

export default function App() {
  const [place, setPlace] = useState<string>('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 10, lng: 10 });
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const getInfo = async () => {
      if (place === '') return;
      setIsLoading(true);
      setLoaded(false);

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

      dataJson.length === 0 ? setIsError(true) : setIsError(false);

      if (dataJson?.length === 0) {
        setIsError(true);
        setIsLoading(false);
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
      movieDataJson.errorMessage === 'Invalid API Key'
        ? setIsError(true)
        : setIsError(false);
      setMovies(movieDataJson.results);

      if (movieDataJson?.results?.length === 0) {
        setIsError(true);
      }
      setIsLoading(false);
      setLoaded(true);
    };
    getInfo();
  }, [place]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Welcome
              setPlace={setPlace}
              isError={isError}
              place={place}
              isLoading={isLoading}
              loaded={loaded}
            />
          }
        />
        <Route
          path='/movies'
          element={
            <Movies
              coordinates={coordinates}
              place={place}
              movies={movies}
              setLoaded={setLoaded}
            />
          }
        />
      </Routes>
      <div className='footer'>
        <p>
          &copy;2022. A{' '}
          <a
            href='https://milkyway-coop.github.io/'
            target='_blank'
            rel='noopener noreferrer'
          >
            MILKYWAY
          </a>{' '}
          PRODUCTION. All rights reserved
        </p>
      </div>
    </div>
  );
}
