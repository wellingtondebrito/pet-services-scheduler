import React from "react";
import { Button } from "@/components/ui/button";

export function ProviderActions() {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-2">
      <Button className="bg-purple-700 h-11 w-full cursor-pointer">
        Agendar Serviço
      </Button>
      <Button
        variant="outline"
        className="h-11 w-full bg-purple-50 border border-purple-500 text-purple-950 cursor-pointer"
      >
        Assinar Plano
      </Button>
    </div>
  );
}
