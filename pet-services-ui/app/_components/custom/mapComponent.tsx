"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
// Você pode remover o CSS daqui se já estiver no layout.js, mas mantê-lo aqui funciona como fallback
import "leaflet/dist/leaflet.css";

interface Location {
  id: number;
  lat: number;
  lng: number;
  name: string; // Exemplo: Nome da unidade ou cliente
}

interface MapProps {// O mapa receberá um ARRAY de localizações
  center: [number, number]; // O centro inicial do mapa (necessário para o MapContainer)
}

const CustomIcon = L.icon({
  iconUrl: '/icons/location.png', // Exemplo: caminho direto para sua pasta /public
  iconSize: [48, 48], // Tamanho [largura, altura]
  iconAnchor: [24, 48], // Ponto que fica na coordenada (geralmente metade da largura e altura total)
});

const centerLoc: [number, number] = [-26.3045, -48.8474]; // Suas coordenadas de Lat/Lng


export default function MapComponent({center}: MapProps) {


    const ZOOM_LEVEL = 14;

    console.log("O que temos", center)

  return (
    <MapContainer
      center={center}
      zoom={ZOOM_LEVEL}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
      />

      <Marker position={center} icon={CustomIcon} />
    </MapContainer>
  );
}
