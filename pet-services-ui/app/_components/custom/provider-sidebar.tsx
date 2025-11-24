import React from "react";
import { Provider } from "@/data/mock-providers";
import { Separator } from "@/components/ui/separator";
import { ProviderServices } from "./provider-services";
import { ProviderActions } from "./provider-actions";
import { ProviderCalendar } from "../ui/providerCalendar";

interface ProviderSidebarProps {
  provider: Provider;
}

export function ProviderSidebar({ provider }: ProviderSidebarProps) {
  return (
    <>
      <ProviderServices services={provider.services} />
      <ProviderActions />
      <Separator />
      <h3 className="text-purple-900">Disponibilidade</h3>
      <ProviderCalendar availabilityData={provider.availability} />
    </>
  );
}
