import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { googleKey } from '../auth';
import { useMemo } from 'react';
import { MapContainer } from './Styles/Map.styled';

// create interface for the props
interface MapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
}

export default function MapComponent({ coordinates }: MapProps) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: googleKey
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map coordinates={coordinates} />;
}

function Map({ coordinates }: MapProps) {
  const { lat, lng } = coordinates;
  console.log(lat, lng);
  const center = useMemo(() => ({ lng: lng, lat: lat }), []);
  return (
    <MapContainer>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName='map-container'
      >
        <Marker position={center} />
      </GoogleMap>
    </MapContainer>
  );
}
