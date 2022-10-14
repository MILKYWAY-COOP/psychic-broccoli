import { MapContainer } from './Components';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function App(this: any) {

  console.log(Map)
  return (
    <Map
      google={this?.props?.google}
      style={{ width: '100%', height: '100%', position: 'relative' }}
      //zoom={14}  
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    />
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDmTkkVZ-ELq-_zksOUdZNBc-BxTo19rsI'
})(App);
