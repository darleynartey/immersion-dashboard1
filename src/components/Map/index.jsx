import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ridesData = [
  {
    id: 1,
    name: 'Ride 1',
    location: [40.7128, -74.0060],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Ride 2',
    location: [41.8781, -87.6298],
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  
];

const Map = () => {
  const center = [40.7128, -74.0060]; 

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href='https://www.mapbox.com/'>Mapbox</a> contributors"
      />

      {ridesData.map((ride) => (
        <Marker key={ride.id} position={ride.location}>
          <Popup>
            <div>
              <h3>{ride.name}</h3>
              <p>{ride.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;











