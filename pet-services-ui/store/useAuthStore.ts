import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User, UserRole, PetOwner, PetProvider } from "../types/types";
import { api } from "@/services/api";
import { generateMockToken } from "@/utils/auth";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterDataPetOwner {
  email: string;
  password: string;
  fullName: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  cep?: string;
  cpf?: string;
  role: UserRole;
}

interface RegisterDataPetProvider {
  email: string;
  password: string;
  fullName: string;
  phoneNumber?: string;
  activity: string;
  description: string;
  role: UserRole;
}

interface AuthState {
  token: string | null;
  user: User | null;
  petOwner: PetOwner | null;
  petProvider: PetProvider | null;
  isAuthenticated: boolean;
  role: UserRole | null;
  isLoading: boolean;

  // Funções de Ação
  login: (credentials: LoginCredentials) => Promise<void>;
  registerPetOwner: (data: RegisterDataPetOwner) => Promise<void>;
  registerPetProvider: (data: RegisterDataPetProvider) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Estados Iniciais
      token: null,
      user: null,
      petOwner: null,
      petProvider: null,
      isAuthenticated: false,
      role: null,
      isLoading: false,

      // 🎯 Ação 1: Login (Simulando chamada API para obter token/usuário)
      login: async (credentials) => {
        set({ isLoading: true });
        try {
          // ⚠️ Simulação de API Call com o JSON Server (POST para /login)
          // Você precisará de um endpoint /login customizado no JSON Server

          const response = await api.get(
            `/users?email=${credentials.email}&password=${credentials.password}`
          );
          const registeredUser = response.data[0];

          if (!registeredUser) {
            throw new Error("Usuário não encontrado");
          }

          if (registeredUser.password !== credentials.password) {
            throw new Error("Senha incorreta.");
          }

          const token = generateMockToken(registeredUser);

          console.log("Data login: ", registeredUser, " e ", token)

          set({
            token: token,
            user: registeredUser,
            isAuthenticated: true,
            role: registeredUser.role,
          });

        } catch (error) {
          console.error("Login falhou:", error);
          set({ token: null, user: null, isAuthenticated: false });
          throw new Error("Credenciais inválidas ou falha de conexão.");
        } finally {
          set({ isLoading: false });
        }
      },

      // 🎯 Ação 2: Cadastro (Simulando POST para /register)
      registerPetOwner: async (data) => {
        set({ isLoading: true });

        const userData = {
          email: data.email,
          password: data.password,
          fullName: data.fullName,
          role: data.role, // 'PET_OWNER'
          status: "ACTIVE",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        try {
          // ⚠️ Simulação: POST para /users no JSON Server ou endpoint customizado
          // O JSON Server criará um novo recurso e retornará o objeto.
          const response = await api.post("/users", userData);

          // Mock de Sucesso:
          const registeredUser: User = response.data;
          const petOwnerData: Omit<PetOwner, "id"> = {
            name: response.data.fullName || data.fullName,
            userId: response.data.id,
            phoneNumber: data.phoneNumber,
            address: data.address,
            city: data.city,
            uf: data.state,
            cep: data.cep,
            cpf: data.cpf,
          };

          const petOwnerResponse = await api.post("/petOwners", petOwnerData);
          const registeredPetOwner: PetOwner = petOwnerResponse.data;

          set({
            token: generateMockToken(registeredUser),
            user: registeredUser,
            petOwner: registeredPetOwner,
            isAuthenticated: true,
            role: registeredUser.role,
          });
          // Após o cadastro, você pode fazer login automaticamente ou apenas redirecionar
          // Vamos manter o estado simples por enquanto, sem logar após o cadastro.
        } catch (error) {
          console.error("Cadastro falhou:", error);
          throw new Error("Erro ao tentar cadastrar novo usuário.");
        } finally {
          set({ isLoading: false });
        }
      },

      registerPetProvider: async (data) => {
        set({ isLoading: true });

        const userData = {
          email: data.email,
          password: data.password,
          fullName: data.fullName,
          role: data.role, // 'PET_OWNER'
          status: "ACTIVE",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        try {
          // ⚠️ Simulação: POST para /users no JSON Server ou endpoint customizado
          // O JSON Server criará um novo recurso e retornará o objeto.
          const response = await api.post("/users", userData);

          // Mock de Sucesso:
          const registeredUser: User = response.data;
          const petProviderData: Omit<PetProvider, "id"> = {
            name: response.data.fullName || data.fullName,
            userId: response.data.id,
            description: data.description,
            activity: data.activity,
            phoneNumber: data.phoneNumber,
          };

          const petOwnerResponse = await api.post(
            "/petProviders",
            petProviderData
          );
          const registeredPetOwner: PetOwner = petOwnerResponse.data;

          set({
            token: generateMockToken(registeredUser),
            user: registeredUser,
            petOwner: registeredPetOwner,
            isAuthenticated: true,
            role: registeredUser.role,
          });
          // Após o cadastro, você pode fazer login automaticamente ou apenas redirecionar
          // Vamos manter o estado simples por enquanto, sem logar após o cadastro.
        } catch (error) {
          console.error("Cadastro falhou:", error);
          throw new Error("Erro ao tentar cadastrar novo usuário.");
        } finally {
          set({ isLoading: false });
        }
      },

      // 🎯 Ação 3: Logout
      logout: () =>
        set({ token: null, user: null, isAuthenticated: false, role: null }),
    }),
    {
      name: "auth-storage", // Nome da chave no localStorage
      storage: createJSONStorage(() => localStorage), // Armazenar no localStorage
    }
  )
);
