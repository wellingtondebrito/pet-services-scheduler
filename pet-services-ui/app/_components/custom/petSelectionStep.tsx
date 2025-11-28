// src/app/agendar/[providerId]/components/PetSelectionStep.tsx
"use client";

import { useState } from "react";
import { useBookingStore } from "@/store/useBookingStore";
import { Button } from "@/components/ui/button";
import { AddPetModal } from "../ui/addPetModal";
import { PlusCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Pet, PetType } from "@/types/types";

// Simulação de pets existentes do cliente
const mockPets: Pet[] = [
  {
    id: 1,
    name: "Rex",
    breed: "Labrador",
    age: 5,
    type: "DOG",
    height: 50,
    weight: 30,
    ownerId: 1,
  },
  {
    id: 2,
    name: "Juan",
    breed: "Golden Retriver",
    age: 5,
    type: "DOG",
    height: 50,
    weight: 30,
    ownerId: 1,
  },
  // ...
];

export function PetSelectionStep() {
  const selectedPet = useBookingStore((state) => state.selectedPet);
  const setPet = useBookingStore((state) => state.setPet);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pets, setPets] = useState(mockPets); // Estado dos pets do cliente

  const handlePetAdded = (newPet: Pet) => {
    // 1. Adiciona o novo pet à lista de pets do cliente
    setPets((prev) => [...prev, newPet]);
    // 2. Já seleciona o pet para o agendamento (Zustand)
    setPet(newPet);
  };

  return (
    <Card className="p-4 space-y-4 border-0 shadow-none">
      <div className="flex flex-wrap gap-3">
        {pets.map((pet) => (
          <Button
            key={pet.id}
            variant={selectedPet?.id === pet.id ? "default" : "outline"}
            onClick={() => setPet(pet)}
            className={
              selectedPet?.id === pet.id
                ? "border  bg-purple-200 border-purple-600 text-purple-800 cursor-pointer hover:bg-purple-200 hover:border-purple-800"
                : "border border-purple-500 text-purple-800 cursor-pointer hover:bg-purple-200 hover:border-purple-800"
            }
          >
            {pet.name}
          </Button>
        ))}

        {/* Botão para Abrir o Modal de Cadastro */}
        <Button
          variant="outline"
          onClick={() => setIsModalOpen(true)}
          className="text-purple-800 border-dashed border-purple-500 cursor-pointer hover:bg-purple-200 hover:border-purple-800"
        >
          <PlusCircle className="mr-2 h-4 w-4 text-purple-800" />
          Novo Pet
        </Button>
      </div>

      <AddPetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPetAdded={handlePetAdded}
      />
    </Card>
  );
}
