import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => (
    <MapContainer center={[lat, lng]} zoom={6} style={{ height: '400px', width: '100%' }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[lat, lng]}>
            <Popup>COVID-19 Cases Here</Popup>
        </Marker>
    </MapContainer>
);

export default Map;
