import { addMinutes, format, isAfter, isBefore, parse } from 'date-fns';


const SERVICE_DURATION_MIN = 60; // 60 minutos fixos


/**
 * Filtra os horários disponíveis.
 * @param availableSlots Todos os horários de início possíveis no dia (Ex: ["08:00", "09:00", "10:00"])
 * @param existingAppointments Horários de início já agendados (Ex: ["09:00"])
 * @returns Lista de horários disponíveis.
 */
export const calculateAvailableTimes = (
  availableSlots: string[],
  existingAppointments: string[]
): string[] => {
  // Neste modelo simplificado de "slot-fixo",
  // o horário agendado simplesmente é removido dos horários disponíveis.

  const bookedSlots = new Set(existingAppointments);

  const availableTimes = availableSlots.filter(slot => !bookedSlots.has(slot));

  // Lógica de Slot Consumido:
  // Se um serviço de 60 min começa às 09:00 e termina às 10:00,
  // O *próximo* agendamento pode começar às 10:00.
  // A lógica de remoção é simples: remove-se o horário de início selecionado.
  // O que precisamos garantir é que os slots fornecidos em 'availableSlots' já respeitem
  // a grade de 60 em 60 minutos (08:00, 09:00, 10:00, etc.).

  return availableTimes;
};


/**
 * Gera uma lista de todos os horários possíveis entre uma hora de início e fim.
 * @param startString - Ex: "09:00"
 * @param endString - Ex: "18:00"
 * @param duration - Duração do serviço em minutos (Ex: 60)
 * @returns Array de strings de horários (Ex: ["09:00", "10:00", ...])
 */
export function generateTimeSlots(startString: string, endString: string, duration: number = 60): string[] {
  // O 'parse' converte o string HH:mm em um objeto Date válido.
  // Usamos 'HH:mm' como formato de referência.
  const startTime = parse(startString, 'HH:mm', new Date());
  const endTime = parse(endString, 'HH:mm', new Date());
  
  const slots: string[] = [];
  let currentTime = startTime;

  // 1. Loop: Enquanto a hora atual for ANTES da hora final
  while (isBefore(currentTime, endTime)) {
    // 2. Formata o horário atual e adiciona à lista
    slots.push(format(currentTime, 'HH:mm'));
    
    // 3. Incrementa a hora atual pela duração do serviço (Ex: adiciona 60 minutos)
    currentTime = addMinutes(currentTime, duration);
  }

  return slots;
}