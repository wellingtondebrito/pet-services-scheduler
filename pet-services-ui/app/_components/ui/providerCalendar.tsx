// ProviderCalendar.tsx

// Importe a interface Availability (ajuste o caminho se necessário)
import { Availability } from "@/data/mock-providers"; 
import { Matcher } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { ptBR } from 'date-fns/locale';

// 🎯 Defina a interface para aceitar o objeto Availability
interface ProviderCalendarProps {
  availabilityData: Availability; 
}

export function ProviderCalendar({ availabilityData }: ProviderCalendarProps) {
  
  // 1. Converte o array de strings (AAAA-MM-DD) para array de objetos Date
  const availableDates: Date[] = availabilityData.available.map(dateString => new Date(dateString));

  // 2. Define os modificadores usando os objetos Date convertidos
  const modifiers = {
    available: availableDates as Matcher[], 
  };
  
  // 3. Define os estilos (sem alterações)
  const modifiersClassNames = {
    available: "bg-purple-500 text-white font-bold rounded-full",
  };

  return (
    <Calendar
      mode="single" // Permite selecionar uma única data
      locale={ptBR}
      modifiers={modifiers}
      modifiersClassNames={modifiersClassNames}
      className="rounded-md border p-4"
      avaliabilityData={availabilityData}
    />
  );
}
