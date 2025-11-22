import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Provider } from "@/data/mock-providers";
import { MapPin, Star } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

interface ProviderCardProps {
  provider: Provider;
}

export function ProviderCard({ provider }: ProviderCardProps) {

    const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };


  return (
    <Card className="shadow-sm p-4 gap-4 transition-shadow">
      <CardHeader className="flex flex-row items-center p-0 pr-4">
        <Image
          src="/avatar.jpg"
          alt={provider.companyName}
          width={60}
          height={60}
          className="rounded-full mr-4"
        />
       <div className="flex flex-col justify-center">
          <CardTitle className="text-lg font-bold p-0 text-purple-950">{provider.companyName}</CardTitle>
          <p className="text-sm text-gray-600 font-medium">
             {provider.providerType}
          </p>
        </div>
      </CardHeader>
      <CardDescription className="flex-1 space-y-1 text-gray-900">{provider.description}</CardDescription>
      <CardContent className="flex-1 flex-col space-y-1 gap-8">
        <div className="flex flex-row gap-2 mb-1">
          <MapPin className="h-5 w-5 text-purple-500" />
          <p className="text-purple-900">
            {provider.address.neighborhood}, {provider.address.number} -{" "}
            {provider.address.city}, {provider.address.state}
          </p>
        </div>
        <div className="flex flex-row gap-2 mt-2">
            <FaStar className="text-yellow-500 h-5 w-5"/>
            <p className="text-purple-900">{provider.rating}</p>
        </div>
         <div className="flex flex-row gap-2 mt-2">
            <Badge className="text-purple-100 p-1 rounded-lg pl-2 pr-2 bg-purple-500">A patir de {formatCurrency(provider.averagePrice)}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex-1 space-y-1 justify-end">
        
        <Button className="bg-purple-700">Ver detalhes</Button>
      </CardFooter>
    </Card>
  );
}
