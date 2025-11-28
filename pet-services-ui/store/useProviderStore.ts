import { create } from "zustand";
import { PetProvider } from "@/types/types";
import { api } from "@/services/api";

interface ProviderState {
  providers: PetProvider[];
  currentProvider: PetProvider | null;
  isLoading: boolean;
  error: string | null;
}

interface ProviderActions {
  fetchAllProviders: () => Promise<void>;
  fetchProviderById: (id: number) => Promise<void>;
  clearCurrentProvider: () => void;
}

type ProviderStore = ProviderState & ProviderActions;

const initialState: ProviderState = {
  providers: [],
  currentProvider: null,
  isLoading: false,
  error: null,
};

export const useProviderStore = create<ProviderStore>((set, get) => ({
  ...initialState, // Inicia com o estado padrão

  // 🎯 Ação 1: Buscar Todos os Prestadores
  fetchAllProviders: async () => {
    set({ isLoading: true, error: null }); // 1. Inicia o carregamento

    try {
      // 2. Chamada mock para o JSON Server
      const response = await api.get("/petProviders");

      // 3. Sucesso: Atualiza a lista no estado
      set({ providers: response.data, error: null });
    } catch (err) {
      // 4. Erro: Salva a mensagem de erro no estado
      set({ error: "Falha ao buscar a lista de prestadores." });
    } finally {
      // 5. Finaliza: Define isLoading como false
      set({ isLoading: false });
    }
  },

  fetchProviderById: async (id: number) => {
    set({ isLoading: true, error: null }); // 1. Inicia o carregamento

    try {
      // 2. Chamada mock para o JSON Server buscando pelo ID
      const response = await api.get(
        `/petProviders/${id}?_embed=services&_embed=reviews&_embed=providerImages&_embed=subscriptionPlans&_embed=availabilities`
      );

      // 3. Sucesso: Salva o objeto Provider no currentProvider
      set({ currentProvider: response.data, error: null });

      console.log(response.data);
    } catch (err) {
      // 4. Erro: Salva a mensagem de erro
      set({ error: `Falha ao buscar o prestador com ID ${id}.` });
    } finally {
      // 5. Finaliza o carregamento
      set({ isLoading: false });
    }
  },

  // 🎯 Ação 3: Limpar Prestador Atual (clearCurrentProvider)
  clearCurrentProvider: () => {
    set({ currentProvider: null }); // Simplesmente reseta o objeto
  },
}));
