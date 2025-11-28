import dynamic from 'next/dynamic';

const DynamicMap = dynamic(
  () => import('./mapComponent'), // O componente real do mapa
  {
    ssr: false, // Crucial: desabilita a renderização no servidor
  }
);

export default DynamicMap;