import { useEffect, useState } from 'react';
import { Movies } from './Components';
import { ninjasKey, imbdKey } from './auth';
import './App.css';

export default function App() {
  const [place, setPlace] = useState('Nairobi');
  const [isLoading, setIsLoading] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  // const GetLocation = async () => {
  //   // if we were already searching for a location, don't do it again
  //   if (isLoading) return;

  //   // set the loading state to true
  //   setIsLoading(true);
  //   const locationData = await fetch(
  //     `https://api.api-ninjas.com/v1/city?name=${place}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'X-Api-Key': ninjasKey
  //       }
  //     }
  //   );

  //   const dataJson = await locationData.json();

  //   setCoordinates({
  //     lat: dataJson[0]?.latitude,
  //     lng: dataJson[0]?.longitude
  //   });

  //   const movieData = await fetch(
  //     `https://imdb-api.com/API/AdvancedSearch/${imbdKey}?locations=${place}`
  //   );
  //   const movieDataJson = await movieData.json();
  //   console.log(movieDataJson);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   GetLocation();
  // }, []);

  console.log(place);

  return (
    <div className='App'>
      <Movies coordinates={coordinates} place={place} />
      {/* <Welcome setPlace={setPlace} /> */}
    </div>
  );
}
