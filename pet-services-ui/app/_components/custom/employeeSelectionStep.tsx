"use client";

import { useBookingStore } from "@/store/useBookingStore";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// --- Simulação de dados ---
// Em um projeto real, esses dados viriam de uma API,
// buscando os funcionários disponíveis do prestador.
const mockEmployees = [
  { id: "func1", name: "João ", avatar: "https://i.pravatar.cc/150?img=60" },
  { id: "func2", name: "Maria", avatar: "https://i.pravatar.cc/150?img=40" },
  { id: "func3", name: "Pedro", avatar: "https://i.pravatar.cc/150?img=12" },
  { id: "func4", name: "Ana", avatar: "https://i.pravatar.cc/150?img=16" },
];

export function EmployeeSelectionStep() {
  // 1. Acessa o estado e a função do Zustand para gerenciar o funcionário selecionado.
  const { selectedEmployee, setSelectedEmployee } = useBookingStore();

  return (
    <Card className="p-4 space-y-4 border-0 shadow-none">
      <p className="text-sm text-muted-foreground">
        Escolha o profissional que você prefere para o atendimento.
      </p>

      <div className="flex flex-wrap gap-3">
        {mockEmployees.map((employee) => (
          // 2. Itera sobre os funcionários disponíveis para criar os botões.

          <Button
            key={employee.id}
            // 3. Define a aparência (variant) do botão baseado no estado do Zustand.
            // Se o ID do funcionário for o selecionado, o botão fica com a aparência 'default' (principal).
            variant="outline"
            // 4. Ao clicar, atualiza o estado global com o ID do funcionário.
            onClick={() => setSelectedEmployee(employee)}
            className={
              selectedEmployee?.id === employee.id
                ? "h-auto flex flex-col flex-wrap shadow-none cursor-pointer hover:border hover:border-purple-800 text-purple-800 border border-purple-800"
                : "h-auto flex flex-col flex-wrap shadow-none cursor-pointer border-none hover:border-2 hover:bg-white hover:border-purple-800 text-purple-800"
            }
          >
            <img
              src={employee.avatar}
              alt={employee.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            {employee.name}
          </Button>
        ))}
      </div>
    </Card>
  );
}
