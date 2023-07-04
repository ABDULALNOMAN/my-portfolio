import React from 'react'
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
const Leaflat = () => {
    return (
        <MapContainer 
        center={[22.484626, 91.877410]} 
        zoom={10} 
        className='w-full h-full rounded-md'
        scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[22.484626, 91.877410]}>
                <Popup>
                    North Madarsha
                </Popup>
            </Marker>
        </MapContainer>
  )
}

export default Leaflat
