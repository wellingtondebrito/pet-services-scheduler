// src/app/agendar/[providerId]/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useBookingStore } from "@/store/useBookingStore";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AsideConfirmation } from "./asideConfirmation";
import { PetSelectionStep } from "./petSelectionStep";
import { EmployeeSelectionStep } from "./employeeSelectionStep";
import { format } from "date-fns";
import {
  calculateAvailableTimes,
  generateTimeSlots,
} from "@/services/time-slots";
import { useBookedSlotsStore } from "@/store/useBookedSlotsStore";
import { useProviderStore } from "@/store/useProviderStore";
import { Card } from "@/components/ui/card";
import { CalendarClock, ChevronLeft, ChevronRight, IdCardLanyard, PawPrint } from "lucide-react"; // Ícones para navegação
import {
  addDays,
  eachDayOfInterval,
  isSameDay,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { set } from "zod";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ServiceSelectionStep } from "./serviceSelectionStep copy";






interface ProviderProfileProps {
  providerId: number;
}

const NUMBER_TO_DAY_STRING: { [key: number]: string } = {
  0: "SUNDAY",
  1: "MONDAY",
  2: "TUESDAY",
  3: "WEDNESDAY",
  4: "THURSDAY",
  5: "FRIDAY",
  6: "SATURDAY",
};
const SERVICE_DURATION = 60;

export default  function ScheduleForm() {
  const pathname = usePathname();
  const id= pathname.split("/").pop() || "1";



  const providerId = parseInt(id);

  if (isNaN(providerId)) {
    return <h1> 404 | Provider not found</h1>;
  }

  const todayReference = new Date();

  const daysToShow = eachDayOfInterval({
    start: todayReference,
    end: addDays(todayReference, 6),
  });

  const { currentProvider, fetchProviderById, clearCurrentProvider } =
    useProviderStore();

  const {
    selectedDate,
    selectedTime,
    setSelectedDate,
    setSelectedTime,
    setProviderInfo,
  } = useBookingStore();

  const { appointments, fetchBookedSlots, isLoading } = useBookedSlotsStore();


  const daysOfWeekAvailable =
    currentProvider?.availabilities
      ?.map((day) => {
        let slotDay;
        switch (day.dayOfWeek) {
          case "MONDAY":
            slotDay = 1;
            break;
          case "TUESDAY":
            slotDay = 2;
            break;
          case "WEDNESDAY":
            slotDay = 3;
            break;
          case "THURSDAY":
            slotDay = 4;
            break;
          case "FRIDAY":
            slotDay = 5;
            break;
          case "SATURDAY":
            slotDay = 6;
            break;
          case "SUNDAY":
            slotDay = 0;
            break;
          default:
            slotDay = -1;
            break;
        }
        return slotDay;
      })
      .filter((day) => day !== -1) || [];

  useEffect(() => {
    const shouldFetch = !currentProvider || currentProvider.id !== providerId;

    if (shouldFetch && !isLoading) {
      fetchProviderById(providerId);     
    }  
    //
    return () => {
      clearCurrentProvider();
    };
    //
  }, [providerId]);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, "yyyy-MM-dd");
      fetchBookedSlots(providerId, formattedDate);
    }
  }, [selectedDate, providerId, fetchBookedSlots])

  const isDayAvailable = (date: Date) => {
    const dayOfWeek = date.getDay(); // 0 = Domingo, 6 = Sábado
    return daysOfWeekAvailable.includes(dayOfWeek);
  };

  const selectedDayString = selectedDate
    ? NUMBER_TO_DAY_STRING[selectedDate.getDay()]
    : "";

  const currentDayAvailability =
    // CORREÇÃO: Usamos '?.availabilities' e fornecemos '[]' como fallback
    (currentProvider?.availabilities || []).find(
      (slot) => slot.dayOfWeek === selectedDayString
    );

  const startHour = currentDayAvailability?.startTime || "08:00";
  const endHour = currentDayAvailability?.endTime || "17:00";

  // Exemplo de dados simulados de horários para um dia.
  // Em um caso real, você faria um fetch para buscar os slots de um dia específico.
  const allPossibleSlots =
    startHour && endHour
      ? generateTimeSlots(startHour, endHour, SERVICE_DURATION)
      : [];

  const bookedTimeSlots = appointments.map((app) => app.timeSlot);
  const availableTimes = calculateAvailableTimes(
    allPossibleSlots,
    bookedTimeSlots
  );

  const handleDaySelect = (date: Date) => {
    if (isDayAvailable(date)) {
      setSelectedDate(date);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    // Lógica para ir para a tela de Checkout
    // router.push('/checkout');
    console.log("Indo para o Checkout");
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl text-purple-950 font-bold mb-6">{`Agendar com ${currentProvider?.companyName}`}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna Principal de Seleção */}
        <div className="lg:col-span-2 space-y-8">
           <section className="mt-8 mb-8">
            <div className="flex gap-1">
                <PawPrint className="text-purple-800"/>
            <h2 className="text-1xl text-purple-800 font-medium mb-4">
              Selecione o serviço
            </h2>
            </div>
            <ServiceSelectionStep />
          </section>
            <Separator/>
          {/* Passo 1: Seleção de Dia e Horário */}
          <section>
            <div className="flex gap-1">
              <CalendarClock className="text-purple-800"/>
            <h2 className="text-1xl text-purple-800 font-medium mb-4">Selecione a data e a hora</h2>
            </div>
            <Card className="p-4 space-y-4 border-0 shadow-none">
              {/* Barra de Seleção de Dias */}
              <div className="flex items-center justify-center text-lg font-medium">
                <span className="text-purple-950 uppercase font-medium text-center">
                  {selectedDate
                    ? format(selectedDate, "MMMM", { locale: ptBR })
                    : format(todayReference, "MMMM", { locale: ptBR })}
                </span>
              </div>

              <div className="flex overflow-x-auto justify-center gap-2 pb-2 scrollbar-hide">
                {daysToShow.map((day) => (
                  <Button
                    key={day.toISOString()}
                    variant={
                      isSameDay(selectedDate || todayReference, day)
                        ? "secondary"
                        : "outline"
                    }
                    className={`flex flex-col p-2 h-auto bg-purple-400 text-purple-50 cursor-pointer  w-16 text-center shrink-0 ${
                      !isDayAvailable(day)
                        ? "opacity-50 bg-purple-50 text-gray-950 cursor-not-allowed"
                        : ""
                    } ${isSameDay(selectedDate, day)
                      ? "bg-purple-700 text-purple-50"
                      : ""}`}
                    onClick={() => handleDaySelect(day)}
                    disabled={!isDayAvailable(day)}
                  >
                    <span className="text-xs uppercase">
                      {format(day, "EEE", { locale: ptBR })}
                    </span>
                    <span className="text-lg font-bold">
                      {format(day, "dd")}
                    </span>
                  </Button>
                ))}
              </div>             
             
            </Card>
             <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-h-[300px] overflow-y-auto pr-2">
                {selectedDate ? (
                  availableTimes.length > 0 ? (
                    availableTimes.map((time) => (
                      <Badge
                        key={time}
                        //variant="ghost" // Sempre 'ghost' para a lista vertical
                        className={`flex items-center px-4 py-3 rounded-md cursor-pointer bg-purple-400 ${
                          selectedTime === time
                            ? "bg-purple-600 text-purple-50"
                            : "border-input hover:bg-purple-600 hover:text-purple-50"
                        }`}
                        onClick={() => handleTimeSelect(time)}
                      >
                        <span className="font-medium text-sm">{time}</span>
                        {/* Você pode adicionar um ícone de seta ou status aqui */}
                        <ChevronRight className="h-4 w-4 text-purple-50" />
                      </Badge>
                    ))
                  ) : (
                    <p className="text-gray-700 text-center py-4">
                      {isDayAvailable(selectedDate)
                        ? "Não há horários disponíveis para este dia."
                        : "Este dia não está disponível."}
                    </p>
                  )
                ) : (
                  <p className="text-text-gray-700 text-center py-4">
                    Selecione uma data para ver os horários.
                  </p>
                )}
              </div>
          </section>
              <Separator/>
          {/* Passo 2: Seleção de Pet */}
          <section className="mt-8 mb-8">
            <div className="flex gap-1">
                <PawPrint className="text-purple-800"/>
            <h2 className="text-1xl text-purple-800 font-medium mb-4">
              Selecione o Pet
            </h2>
            </div>
            <PetSelectionStep />
          </section>

          {/* Passo 3: Seleção de Funcionário */}
                <Separator/>

          <section>
            <div className="flex gap-1">
                <IdCardLanyard className="text-purple-800"/>
            <h2 className="text-1xl text-purple-800 font-medium mb-4">
              Selecione o funcionário
            </h2>
            </div>
            <EmployeeSelectionStep />
          </section>

          {/* Botão de Confirmação Final */}
          <Button
            size="lg"
            className="w-full cursor-pointer bg-purple-600 hover:text-purple-50"
            onClick={handleConfirm}
            disabled={
              !selectedDate ||
              !selectedTime ||
              !useBookingStore.getState().selectedPet ||
              !useBookingStore.getState().selectedEmployee
            }
          >
            Prosseguir para o Checkout
          </Button>
        </div>

        {/* Aside de Confirmação */}
        <AsideConfirmation />
      </div>
    </div>
  );
}
