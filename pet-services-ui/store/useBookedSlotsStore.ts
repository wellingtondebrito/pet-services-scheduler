import { create } from "zustand";

import { Appointment } from "@/types/types";
import { api } from "@/services/api";

interface BookedSlotsState {
  appointments: Appointment[] | null;
  isLoading: boolean;
  error: string | null;
}

interface BookedSlotsActions {
  fetchBookedSlots: (providerId: number, date: string) => Promise<void>;
  clearBookedSlots: () => void;
}

type BookedSlotsStore = BookedSlotsState & BookedSlotsActions;

const initialState: BookedSlotsState = {
  appointments: [],
  isLoading: false,
  error: null,
};

export const useBookedSlotsStore = create<BookedSlotsStore>((set, get) => ({
  ...initialState,

  fetchBookedSlots: async (providerId: number, date: string) => {
    set({ isLoading: true, error: null }); // 1. Inicia o carregamento

    try {
      const response = await api.get(
        `/appointments?providerId=${providerId}&date=${date}`
      );

      if(response.status !== 200) throw new Error("Falha ao buscar os agendamentos.");

      // 3. Sucesso: Atualiza a lista no estado
      set({ appointments: response.data, error: null });
    } catch (err) {
      // 4. Erro: Salva a mensagem de erro
      set({ error: `Falha ao buscar os agendamentos.` });
    } finally {
      // 5. Finaliza o carregamento
      set({ isLoading: false });
    }
  },
  clearBookedSlots() {
    set({ appointments: null });
  },
}));
