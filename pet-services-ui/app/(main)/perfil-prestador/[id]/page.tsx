import { MOCK_PROVIDERS } from "@/data/MOCK_PROVIDERS";
import { ProviderProfile } from "@/app/_components/custom/providerProfile";
import { LatLngExpression } from "leaflet";
import DynamicMap from "@/app/_components/custom/dynamicMap";

// A variável é mantida para minimizar as alterações no resto do arquivo.
// Agora, ela aponta para o componente wrapper que gerencia a renderização no lado do cliente.
const DynamicMapComponent = DynamicMap;

export default async function ProviderProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const providerId = parseInt(id);

  if (isNaN(providerId)) {
    return <h1> 404 | Provider not found</h1>;
  }

  const provider = await MOCK_PROVIDERS.find(
    (petProvider) => petProvider.id === providerId
  );

  if (!provider) {
    return <h1> 404 | Provider not found</h1>;
  }

  console.log("provider", provider)

  const mapPosition: LatLngExpression = [
    provider.coordinates.latitude,
    provider.coordinates.longitude,
  ];

  const mapElement = (
    <DynamicMapComponent
      position={mapPosition}
      companyName={provider.companyName}
    />
  );

  return (
    <div>
      <ProviderProfile provider={provider} mapElement={mapElement} />
    </div>
  );
}
