'use client'

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { useProviderStore } from "@/store/useProviderStore";
import { ptBR } from 'date-fns/locale';

export function ProviderCalendar() {
  const { currentProvider } = useProviderStore()
  const [date, setDate] = useState<Date | undefined>(new Date());

  console.log("currentProvider", currentProvider?.availabilities)

  const daysOfWeekAvailable =
    currentProvider?.availabilities?.map((day) => {
      let slotDay;
      switch (day.dayOfWeek) {
        case "MONDAY": slotDay = 1; break;
        case "TUESDAY": slotDay = 2; break;
        case "WEDNESDAY": slotDay = 3; break;
        case "THURSDAY": slotDay = 4; break;
        case "FRIDAY": slotDay = 5; break;
        case "SATURDAY": slotDay = 6; break;
        case "SUNDAY": slotDay = 0; break;
        default: slotDay = -1; break; // Retorna -1 para dias inválidos
      }
      return slotDay;
    }).filter((day) => day !== -1) || [];


  // Novo objeto para definir o modificador 'availableDays'
  const availableDaysModifier = { dayOfWeek: daysOfWeekAvailable };
  // Novo objeto para definir o modificador 'pastDays'
  const pastDaysModifier = { before: new Date() };


  console.log("Dias da semana", daysOfWeekAvailable)
  //Lógica para desabilitar os dias em que o prestador NÃO trabalha
 const allDaysOfWeek = [0, 1, 2, 3, 4, 5, 6];
  const unavailableDays = allDaysOfWeek.filter(
    (day) => !daysOfWeekAvailable.includes(day)
  );

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      locale={ptBR}
      
      // Aplicando a restrição dos dias da semana e datas passadas
      disabled={[
        {before: new Date()},
        {dayOfWeek: unavailableDays}
      ]}
      modifiers={{ 
        availableDays: availableDaysModifier,
        pastDays: pastDaysModifier 
      }}
      className="rounded-md border shadow w-full"
    />
  );
}