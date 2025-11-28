// src/app/_components/custom/ProviderProfileClient.tsx


import { ProviderProfile } from '../../../_components/custom/providerProfile'; 

export default async function ProviderProfileClient({ params}: {params: {id: string}}) {

   const { id } = await params;

  const providerId = parseInt(id);

  if (isNaN(providerId)) {
    return <h1> 404 | Provider not found</h1>;
  }

  return <ProviderProfile providerId={providerId} />;
}