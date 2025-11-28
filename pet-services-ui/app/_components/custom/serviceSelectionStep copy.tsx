// src/app/agendar/[providerId]/components/PetSelectionStep.tsx
"use client";

import { useState } from "react";
import { useBookingStore } from "@/store/useBookingStore";
import { Button } from "@/components/ui/button";
import { AddPetModal } from "../ui/addPetModal";
import { PlusCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Pet, PetType} from "@/types/types";

interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: number;
    providerId: number;
}

const mockServices: Service[] = [
   {
      id: 1,
      name: "Banho Completo (Cães Pequenos)",
      description: "Banho com shampoo hipoalergênico e secagem.",
      price: 50,
      duration: 60,
      providerId: 1,
    },
     {
      id: 2,
      name: "Banho Completo (Cães Grandes)",
      description: "Banho com shampoo hipoalergênico e secagem.",
      price: 150,
      duration: 60,
      providerId: 1,
    }
];

export function ServiceSelectionStep() {
  const selectedService = useBookingStore((state) => state.selectedService);
  const setSelectedService = useBookingStore((state) => state.setSelectedService);


  const [services, setServices] = useState(mockServices);

  console.log("Serviços: ", services)

 

  return (
    <Card className="p-4 space-y-4 border-0 shadow-none">
      <div className="flex flex-wrap gap-3">
        {services.map((service) => (
          <Button
            key={service.id}
            variant={selectedService?.id === service.id ? "default" : "outline"}
            onClick={() => setSelectedService(service)}
            className={
              selectedService?.id === service.id
                ? "border  bg-purple-200 border-purple-600 text-purple-800 cursor-pointer hover:bg-purple-200 hover:border-purple-800"
                : "border border-purple-500 text-purple-800 cursor-pointer hover:bg-purple-200 hover:border-purple-800"
            }
          >
            {service.name}
          </Button>
        ))}
      </div>
    </Card>
  );
}
