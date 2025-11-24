// app/_components/custom/MapComponent.tsx
'use client'

import dynamic from "next/dynamic";
import { LatLngExpression } from "leaflet";
import React from "react";

// 1. Defina a interface de props aqui também
interface MapComponentProps {
  position: LatLngExpression; 
  companyName: string;
}

// 2. Importação dinâmica do NOVO componente MapClient
const MapClient = dynamic(() => import("./mapClient"), {
  ssr: false, // ESSENCIAL: garante que MapClient NÃO rode no servidor
  loading: () => (
    <div style={{ height: "400px", width: "100%", background: "#f0f0f0" }}>
      Carregando mapa...
    </div>
  ),
});

// 3. O componente de renderização (que apenas passa as props)
export default function MapComponent(props: MapComponentProps) {
  // MapComponent é o wrapper. Ele apenas renderiza o MapClient
  // passando todas as props. Ele não precisa mais de "use client"
  // ou do guardião "isClient".
  return <MapClient {...props} />;
}

// NOTA: Se o seu ProviderProfile já fazia o dynamic import, você
// pode simplificar e fazer o dynamic import do MapClient DIRETAMENTE
// no ProviderProfile.tsx e deletar este MapComponent.tsx intermediário.