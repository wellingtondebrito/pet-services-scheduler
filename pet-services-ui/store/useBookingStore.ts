
import { create } from "zustand";

export interface Pet {
    id: number;
    name: string;
    breed: string;
    age: number;
    type: string;
    weight: number;
    height: number;
    ownerId: number;
}

export interface Employee {
    id: string;
    name: String;
    avatar: string;
}

interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: number;
    providerId: number;
}


interface BookingState {
    providerId: string | null;
    companyName: string | null;
    selectedDate: Date | null;
    selectedTime: string | null;
    selectedPet: Pet | null;
    selectedEmployee: Employee | null;
    selectedService: Service | null;
    serviceDuration: number;
    price: number;
    totalPrice: number;   

}

interface BookingActions {
    setProviderInfo: (providerId: string, companyName: string) => void;
    setSelectedDate: (selectedDate: Date) => void;
    setSelectedTime: (selectedTime: string) => void;
    setSelectedService: (selectedService: Service) => void;
    setPet: (selectedPet: Pet) => void;
    setSelectedEmployee: (selectedEmployee: Employee) => void;
    resetBooking: () => void;
}

type BookingStore = BookingState & BookingActions;

const initialState: BookingState = {
    providerId: null,
    companyName: null,
    selectedDate: null,
    selectedTime: null,
    selectedPet: null,
    selectedService: null,
    selectedEmployee: null,
    serviceDuration: 60,
    price: 0,
    totalPrice: 0,
}


export const useBookingStore = create<BookingStore>((set, get) => ({
   ...initialState,

    setProviderInfo:(id, companyName) => set({providerId: id, companyName: companyName}),
    setSelectedDate:(selectedDate) => set({selectedDate: selectedDate}),
    setSelectedTime:(selectedTime) => set({selectedTime: selectedTime}),
    setSelectedService:(selectedService) => set({selectedService: selectedService}),
    setPet:(selectedPet) => set({selectedPet: selectedPet}),
    setSelectedEmployee:(selectedEmployee) => set({selectedEmployee: selectedEmployee}),
    resetBooking:() => set({...initialState})
}))