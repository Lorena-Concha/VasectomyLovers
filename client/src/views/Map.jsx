import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'


const Map = () => {
    const position = [-33.4310507, -70.6652293]

    return (
        <div className='container'>
        <div id="map">
            <MapContainer center={[-33.4862749, -70.6508311]} zoom={11} scrollWheelZoom={true}>
                <TileLayer attribution='&copy; 
                <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <Marker position={[-33.38700, -70.57339]}>
            <Popup>
                Clinica Alemana
            </Popup>
            </Marker>

            <Marker position={[-33.37989, -70.53202]}>
            <Popup>
                Clinica Las Condes
            </Popup>
            </Marker>

            <Marker position={[-33.392244, - 70.56374]}>
            <Popup>
                SG Fertility
            </Popup>
            </Marker>

            <Marker position={[-33.41131, -70.58781]}>
            <Popup>
                Sociedad de Urología
            </Popup>
            </Marker>

            <Marker position={[-33.42114, -70.61864]}>
            <Popup>
                Clinica Indisa
            </Popup>
            </Marker>

            <Marker position={[-33.46403, -70.64279]}>
            <Popup>
                Clinica Santa Rosa
            </Popup>
            </Marker>

            <Marker position={[-33.46403, -70.64279]}>
            <Popup>
                Clinica Santa Rosa
            </Popup>
            </Marker>

            <Marker position={[-36.61461, -73.022822]}>
            <Popup>
                Bio Bio Clinic
            </Popup>
            </Marker>

            <Marker position={[-33.02138, -71.55399]}>
            <Popup>
                UroCentro
            </Popup>
            </Marker>

            <Marker position={[-33.01214, -71.54959]}>
            <Popup>
                Instituto de Diagnóstico Urológico
            </Popup>
            </Marker>

            <Marker position={[-33.01214, -71.54959]}>
            <Popup>
                Instituto de Diagnóstico Urológico
            </Popup>
            </Marker>

            <Marker position={[-33,51060, -70.59483]}>
            <Popup>
                Clinica Vespucio
            </Popup>
            </Marker>

            <Marker position={[-33,34619, -70.73979]}>
            <Popup>
                Clinica Davila
            </Popup>
            </Marker>

            </MapContainer>
        </div>
        </div>
    );
}

export default Map;
