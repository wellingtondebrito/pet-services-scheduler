// data/mock-providers.ts

// --- Tipos para Arrays Aninhados ---

export type Service = {
  id: number;
  name: string;
  price: number;
  duration: string; // Ex: "1h", "24h", "8h"
};

export type Review = {
  id: number;
  name: string;
  avatar: string; // URL
  review: string;
  rating: number; // 4.1, 5.0, etc.
};

export interface SubscriptionPlan {
  id: number;
  planName: string;
  value: string; // Manter como string "R$130.00/mês" para fins de mock
  services: string;
  benefits: string;
}

// --- Tipos para Objetos Aninhados ---

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Address = {
  neighborhood: string;
  city: string;
  state: string; // Ex: "SC", "RJ", "SP"
  zip: string;
  complement: string;
  number: number;
};

export type Availability = {
  available: string[]; // Array de strings de data "AAAA-MM-DD"
  unavailable: string[]; // Array de strings de data "AAAA-MM-DD"
};

export type Preferences = {
  servicePreferences: string;
  petSizes: string[]; // Ex: ["Pequeno", "Médio"]
  acceptsCats: boolean;
};

// --- Tipo Principal (Prestador) ---

export type Provider = {
  id: number;
  nameResponsavel: string;
  companyName: string;
  averagePrice: number;
  services: Service[];
  coordinates: Coordinates;
  rating: number;
  reviews: Review[];
  subscriptionPlans: SubscriptionPlan[];
  address: Address;
  providerType: string; // Ex: "Veterinária", "Creche"
  cnpj: string;
  avatarProvider: string; // URL
  gallery: string[]; // Array de URLs
  achievements: string[];
  description: string;
  skills: string[];
  spaceFeatures: string[]; // Ex: "Área externa ampla", "Não possui crianças"
  availability: Availability;
  preferences: Preferences;
};

