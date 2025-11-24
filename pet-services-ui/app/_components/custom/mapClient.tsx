// app/_components/custom/MapClient.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup, LatLngExpression } from "react-leaflet";
import { useState, useEffect, useRef } from "react";
import 'leaflet/dist/leaflet.css';
// Imports de compatibilidade (que você já tem)
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

// 
interface MapClientProps {
  position: LatLngExpression;
  companyName: string;
}

export default function MapClient({ position, companyName }: MapClientProps) {
  // Não precisa de useState/useEffect aqui, pois ele é carregado dinamicamente
  const [isMounted, setIsMounted] = useState(false);

  const leafletContainerRef = useRef(null);


  useEffect(() => {
    if (leafletContainerRef.current) {
      setIsMounted(true);
    }
  }, [leafletContainerRef.current]);

  // 3. Se não estiver montado, retorne apenas o placeholder
  if (!isMounted) {
    return (
      <div style={{ height: "400px", width: "100%", background: "#f0f0f0" }}>
        Carregando mapa... (Aguardando montagem final)
      </div>
    );
  }

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{companyName}</Popup>
      </Marker>
    </MapContainer>
  );
}