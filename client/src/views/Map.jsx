import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


const Map = () => {
    

    return (
        <div className='container'>
        <div id="map">
            <MapContainer center={[-33.4862749, -70.6508311]} zoom={11} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; 
                <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <Marker position={[-33.38700, -70.57339]}>
            <Popup>
                <p className='p'>Clinica Alemana</p>
            </Popup>
            </Marker>

            <Marker position={[-33.37989, -70.53202]}>
            <Popup>
                <p className='p'>Clinica Las Condes</p>
            </Popup>
            </Marker>

            <Marker position={[-33.392244, -70.56374]}>
            <Popup>
                <p className='p'>SG Ferility</p>
            </Popup>
            </Marker>

            <Marker position={[-33.41131, -70.58781]}>
            <Popup>
                <p className='p'>Sociedad de Urología</p>
            </Popup>
            </Marker>

            <Marker position={[-33.42114, -70.61864]}>
            <Popup>
                <p className='p'>Clinica Indisa</p>
            </Popup>
            </Marker>

            <Marker position={[-33.46403, -70.64279]}>
            <Popup>
                <p className='p'>Clinica Santa Rosa</p>
            </Popup>
            </Marker>

            <Marker position={[-33,57747, -70.58136]}>
            <Popup>
                <p className='p'>Clinica Vespucio</p>
            </Popup>
            </Marker>

            <Marker position={[-33.42694, -70.64766]}>
            <Popup>
                <p className='p'>Clinica Davila</p>
            </Popup>
            </Marker>

            </MapContainer>
        </div>
        </div>
    );
}

export default Map;
