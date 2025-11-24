import React from "react";
import Image from "next/image";
import { TimerIcon } from "lucide-react";
import {
  Item,
  ItemHeader,
  ItemSeparator,
  ItemFooter,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Service } from "@/data/mock-providers";

interface ProviderServicesProps {
  services: Service[];
}

const serviceIcons: { [key: string]: string } = {
  Veterinária: "/icons/veterinaria.png",
  Hospedagem: "/icons/hospedagem.png",
  Adestramento: "/icons/adastramento.png",
  Passeio: "/icons/passeio.png",
  "Pet Shop": "/icons/pet-shop.png",
};

const formatCurrency = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export function ProviderServices({ services }: ProviderServicesProps) {
  return (
    <Item>
      <ItemHeader>
        <ItemTitle className="text-purple-800 text-lg font-medium mb-4">
          Serviços
        </ItemTitle>
      </ItemHeader>
      <ItemContent className="w-auto flex flex-col gap-4">
        {services.map((service) => {
          const iconSrc = serviceIcons[service.name];
          return (
            <div key={service.id}>
              <div className="flex flex-row justify-between items-center">
                <ItemDescription className="flex items-center gap-2 mb-2">
                  {iconSrc && (
                    <Image
                      src={iconSrc}
                      alt={`Ícone para ${service.name}`}
                      width={40}
                      height={40}
                    />
                  )}
                  <p className="text-purple-800 font-medium">{service.name}</p>
                </ItemDescription>
                <ItemFooter className="flex flex-col items-end">
                  <p className="text-purple-950 font-bold">
                    {formatCurrency(service.price)}
                  </p>
                  <span className="flex items-center gap-0.5 text-purple-600">
                    <TimerIcon className="h-5 w-5" />
                    {service.duration}
                  </span>
                </ItemFooter>
              </div>
              <ItemSeparator className="mt-2" />
            </div>
          );
        })}
      </ItemContent>
    </Item>
  );
}
