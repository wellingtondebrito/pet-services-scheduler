// =========================================================
// Enums (Tipos de União de String Literais)
// Mapeando os 'enums' do Prisma para 'types' em TypeScript
// =========================================================

export type StatusUser =
  | "ACTIVE"
  | "INACTIVE"
  | "BLOCKED"
  | "DELETED"
  | "PENDING_VERIFICATION"
  | "PENDING_RESET_PASSWORD";
export type UserRole = "PET_OWNER" | "PET_PROVIDER" | "ADMIN" | "EMPLOYEE";
export type PetType = "DOG" | "CAT" | "BIRD" | "RODENT" | "REPTILE" | "OTHER";
export type StatusAppointment =
  | "PENDING"
  | "CONFIRMED"
  | "COMPLETED"
  | "CANCELLED";
export type Recurrence = "MONTHLY" | "QUARTERLY" | "YEARLY";
export type StatusSignatures =
  | "PENDING"
  | "ACCEPTED"
  | "REJECTED"
  | "CANCELLED"
  | "PAST_DUE"
  | "EXPIRED";
export type DayOfWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";

// =========================================================
// Interfaces de Dados
// Mapeando os 'models' do Prisma para 'interfaces' em TypeScript
// Usando 'number' para Decimal e 'string' para DateTime (ISO String)
// =========================================================

export interface User {
  id: number;
  email: string;
  password?: string;
  fullName?: string;
  resetToken?: string;
  resetTokenExpiresAt?: string; // DateTime
  role: UserRole;
  createdAt: string; // DateTime
  updatedAt: string; // DateTime
  status: StatusUser;
  deletedAt?: string; // DateTime
  googleId?: string;

  // Relações (opcionais, dependendo do que a API retorna)
  petOnerProfile?: PetOwner;
  providerProfile?: PetProvider;
  adminProfile?: Admin;
  employeeProfile?: Employee;
}

export interface Admin {
  id: number;
  name: string;
  avatarUrl?: string;
  userId: number;

  // Relação
  user?: User;
}

export interface Availabilities{
  id: number;
  dayOfWeek: DayOfWeek;
  startTime: string; // Time
  endTime: string; // Time
  petProviderId: string;

  // Relação
  provider?: PetProvider;
}

export interface PetOwner {
  id: number;
  name: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  uf?: string;
  cep?: string;
  cpf?: string;
  avatarUrl?: string;
  userId: number;

  // Relações
  user?: User;
  pets?: Pet[];
  appointments?: Appointment[];
  reviews?: Review[];
  signatures?: Signatures[];
  favoriteProviders?: FavoriteProviders[];
}

export interface Employee {
  id: number;
  name: string;
  avatarUrl?: string;
  userId: number;
  petProviderId: number;

  // Relações
  user?: User;
  provider?: PetProvider;
}

export interface Pet {
  id: number;
  name: string;
  breed: string;
  age: number;
  type: PetType;
  weight: number; // Decimal
  height: number; // Decimal
  ownerId: number;

  // Relações
  owner?: PetOwner;
  appointments?: Appointment[];
}

export interface ServiceType {
  id: number;
  name: string;

  // Relações
  services?: Service[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number; // Decimal
  durationMinutes: number;
  providerId: number;
  serviceTypeId: number;

  // Relações
  provider?: PetProvider;
  serviceType?: ServiceType;
  appointments?: Appointment[];
  planServices?: PlanService[];
}

export interface PetProvider {
  id: number;
  companyName?: string;
  description: string;
  latitude?: number; // Decimal
  longitude?: number; // Decimal
  avatarUrl?: string;
  name: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  uf?: string;
  cep?: string;
  cnpj?: string;
  cpf?: string;
  userId: number;
  activity: string;
  rating?: number;

  // Relações
  user?: User;
  employees?: Employee[];
  services?: Service[];
  appointments?: Appointment[];
  reviews?: Review[];
  providerImages?: ProviderImages[];
  subscriptionPlans?: SubscriptionPlan[];
  favoriteProviders?: FavoriteProviders[];
  availabilities?: Availabilities[]
}

export interface ProviderImages {
  id: number;
  url: string;
  altText: string;
  isCover: boolean;
  providerId: number;

  // Relação
  provider?: PetProvider;
}

export interface Appointment {
  id: number;
  date: string; // DateTime
  timeSlot: string;
  status: StatusAppointment;
  price: number; // Decimal
  totalPrice: number; // Decimal
  providerId: string;
  petOwnerId: string;
  serviceId: string;
  petId: string;
  employeeId: string;

  // Relações
  provider?: PetProvider;
  owner?: PetOwner;
  service?: Service;
  pet?: Pet;
}

export interface Review {
  id: number;
  rating: number;
  name?: string;
  avatarUrl?: string;
  comment: string;
  createdAt: string; // DateTime
  petOwnerId: number;
  providerId: number;

  // Relações
  owner?: PetOwner;
  provider?: PetProvider;
}

export interface SubscriptionPlan {
  id: number;
  name: string;
  description: string;
  services: Service[];
  price: number; // Decimal
  durationMonths: number;
  recurrence: Recurrence;
  providerId: number;
  benefits: string[];

  // Relações
  provider?: PetProvider;
  planServices?: PlanService[];
  signatures?: Signatures[];
}

export interface PlanService {
  planId: number;
  serviceId: number;

  // Relações
  plan?: SubscriptionPlan;
  service?: Service;
}

export interface Signatures {
  id: number;
  ownerId: number;
  planId: number;
  createdAt: string; // DateTime
  updatedAt: string; // DateTime
  status: StatusSignatures;
  nextBillingDate: string; // DateTime
  paymentGatewayId: string;

  // Relações
  owner?: PetOwner;
  plan?: SubscriptionPlan;
}

export interface FavoriteProviders {
  id: number;
  petOwnerId: number;
  petProviderId: number;
  createdAt: string; // DateTime
  updatedAt: string; // DateTime

  // Relações
  owner?: PetOwner;
  providers?: PetProvider;
}
