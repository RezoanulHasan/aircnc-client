// LeafletMap.js
import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "./osm-providers"; // Make sure this file is created with the URL
import "leaflet/dist/leaflet.css";
import "./leaflet.css"; // Custom styles

const LeafletMap = () => {
  const [center, setCenter] = useState({ lat: 24.85, lng: 89.3711 }); // Bogra, Bangladesh
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  return (
    <div>
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        className="leaflet-container"
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
