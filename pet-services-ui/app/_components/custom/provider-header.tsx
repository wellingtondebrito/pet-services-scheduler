import React from "react";
import { Provider } from "@/data/mock-providers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin } from "lucide-react";
import { FaStar } from "react-icons/fa6";

interface ProviderHeaderProps {
  provider: Provider;
}

export function ProviderHeader({ provider }: ProviderHeaderProps) {
  return (
    <div className="flex flex-row items-center">
      <div>
        <Avatar className="w-10 h-10 mr-2">
          <AvatarImage src={provider.avatarProvider} alt="Avatar do provedor" />
          <AvatarFallback>
            {provider.companyName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col">
        <p className="text-purple-900 font-medium text-lg">
          {provider.companyName}
        </p>
        <p className="text-gray-500 text-sm mb-1">{provider.providerType}</p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <MapPin className="h-5 w-5 text-purple-500" />
            <p className="text-gray-500 text-sm">
              {provider.address.neighborhood}, {provider.address.number} -{" "}
              {provider.address.city}, {provider.address.state}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FaStar className="h-5 w-5 text-amber-400" />
            <p className="text-gray-500 text-sm">{provider.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
