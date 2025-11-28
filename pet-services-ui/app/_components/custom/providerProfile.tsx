"use client";

import React from "react";
import dynamic from "next/dynamic";

import { Provider } from "@/data/mock-providers";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ProviderGallery } from "../ui/providerGallery";
import { Separator } from "@/components/ui/separator";
import { MapPin, Timer, TimerIcon } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import ReviewCarousel from "../ui/reviewCarousel";
import SubscriptionPlanProvider from "../ui/subscriptionPlan";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Item,
  ItemHeader,
  ItemSeparator,
  ItemFooter,
  ItemGroup,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ProviderCalendar } from "../ui/providerCalendar";
import Link from "next/link";
import { useEffect } from "react";
import { useProviderStore } from "@/store/useProviderStore";
import DynamicMap from "./dynamicMap";

interface ProviderProfileProps {
  providerId: number;
}

export function ProviderProfile({ providerId }: ProviderProfileProps) {
  const {
    currentProvider,
    isLoading,
    fetchProviderById,
    clearCurrentProvider,
  } = useProviderStore();

  useEffect(() => {
    // 1. Lógica de Busca:
    // Se o providerId mudou (navegação) OU se o currentProvider não existe/não corresponde ao ID atual,
    // E NÃO estiver carregando, então buscamos os dados.
    const shouldFetch = !currentProvider || currentProvider.id !== providerId;

    if (shouldFetch && !isLoading) {
      fetchProviderById(providerId);
    }

    // 2. Lógica de Limpeza:
    // Opcional: Quando o componente é desmontado (ex: o usuário navega para outra página),
    // limpamos o estado global para liberar memória.
    return () => {
      clearCurrentProvider();
    };

    // 3. Dependências: Garantimos que o fetch ocorra se o ID mudar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providerId]);

  console.log("Provider aqui!", currentProvider);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  if (isLoading) {
    return (
      <div className="text-center text-xl p-8">
        ⏳ Carregando perfil do prestador...
      </div>
    );
  }

  // 🔑 CORREÇÃO: Converte o ID do prestador (se existir) para garantir que é um número.
  const fetchedIdAsNumber = currentProvider ? Number(currentProvider.id) : null;

  // Agora, verificamos se o ID buscado é diferente do ID esperado (providerId)
  if (!currentProvider || fetchedIdAsNumber !== providerId) {
    return (
      <div className="text-center text-xl p-8">
        Nenhum prestador encontrado.
      </div>
    );
  }

  const provider = currentProvider;

  const position = [provider.latitude, provider.longitude];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto py-4">
          <section className="flex-1 border border-gray-100 rounded-sm shadow-sm p-4 space-y-4 overflow-x-hidden">
            <ProviderGallery gallery={provider.providerImages} />
            <Separator />
            <div className="flex flex-row items-center">
              <div>
                <Avatar className="w-10 h-10 mr-2">
                  <AvatarImage src={provider.avatarUrl} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col">
                <p className="text-purple-900 font-medium text-lg">
                  {provider.companyName}
                </p>
                <p className="text-gray-500 text-sm mb-1">
                  {provider.activity}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <MapPin className="h-5 w-5 text-purple-500" />
                    <p className="text-gray-500 text-sm">
                      {provider.address}, - {provider.city}, {provider.uf}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FaStar className="h-5 w-5 text-amber-400" />
                    <p className="text-gray-500 text-sm">
                      {provider.rating === undefined
                        ? "Sem avaliação"
                        : provider.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">{provider.description}</p>
            </div>
            <Separator />
            <ReviewCarousel />
            <Separator />
            <div>
              <h3 className="text-1xl text-purple-950 font-bold mb-4">
                Planos & Beneficios
              </h3>
              <SubscriptionPlanProvider
                subscription={provider.subscriptionPlans}
              />
            </div>
            <Separator />
            <DynamicMap center={position} />
          </section>
          {/*aqui irá entrar o mobile*/}
          <section className="block flex-1 border border-gray-100 rounded-sm shadow-sm p-4 space-y-4 lg:hidden">
            <Item>
              <ItemHeader>
                <ItemTitle className="text-purple-800 text-lg font-medium mb-4">
                  Serviços
                </ItemTitle>
              </ItemHeader>
              <ItemContent className="flex flex-wrap gap-4">
                {provider.services?.map((service) => {
                  return (
                    <div
                      key={service.id}
                      className="w-full sm:w-[calc(50%-0.5rem)]"
                    >
                      <ItemDescription className="flex w-40 items-center gap-2 mb-2">
                        {service.name === "Veterinária" ? (
                          <Image
                            src="/icons/veterinaria.png"
                            alt="serviço de veterinária"
                            width={40}
                            height={40}
                          />
                        ) : service.name === "Hospedagem" ? (
                          <Image
                            src="/icons/hospedagem.png"
                            alt="serviço de hospedagem"
                            width={40}
                            height={40}
                          />
                        ) : service.name === "Adestramento" ? (
                          <Image
                            src={"/icons/adastramento.png"}
                            alt="serviço de adestramento"
                            width={40}
                            height={40}
                          />
                        ) : service.name === "Passeio" ? (
                          <Image
                            src={"/icons/passeio.png"}
                            alt="serviço de passeio"
                            width={40}
                            height={40}
                          />
                        ) : service.name === "Pet Shop" ? (
                          <Image
                            src={"/icons/pet-shop.png"}
                            alt="serviço de pet shop"
                            width={40}
                            height={40}
                          />
                        ) : undefined}
                        {service.name}
                      </ItemDescription>
                      <ItemFooter>
                        <p className="text-purple-950 font-bold">
                          {formatCurrency(service.price)}
                        </p>
                        <span className="flex gap-0.5 text-purple-600">
                          <TimerIcon className="h-5 w-5" />
                          {service.durationMinutes}
                        </span>
                      </ItemFooter>
                      <ItemSeparator />
                    </div>
                  );
                })}
              </ItemContent>
            </Item>
            <Separator />
            <h3 className="text-purple-900">Disponibilidade</h3>
            <ProviderCalendar />
          </section>
          <div className="flex flex-row border items-center justify-center fixed bottom-0 left-0 w-full space-x-4 p-4 lg:hidden z-10 bg-white shadow-lg">
            <Button className="bg-purple-700 h-11 w-1/2 cursor-pointer">
              Agendar Serviço
            </Button>
            <Button
              variant="outline"
              className="h-11 w-1/2 bg-purple-50 border border-purple-500 text-purple-950 cursor-pointer"
            >
              Assinar Plano
            </Button>
          </div>
          <aside className="hidden h-1/3 lg:block lg:w-[320px] lg:border lg:border-gray-100 lg:rounded-sm lg:shadow-sm lg:p-4 lg:space-y-4 shrink-0">
            <Item>
              <ItemHeader>
                <ItemTitle className="text-purple-800 text-lg font-medium mb-4">
                  Serviços
                </ItemTitle>
              </ItemHeader>
              <ItemContent className="flex flex-wrap gap-4">
                {provider.services?.map((service) => {
                  return (
                    <div key={service.id} className="w-full">
                      <ItemDescription className="flex w-40 items-center gap-2 mb-2">
                        {service.name}
                      </ItemDescription>
                      <ItemFooter>
                        <p className="text-purple-950 font-bold">
                          {formatCurrency(service.price)}
                        </p>
                        <span className="flex gap-0.5 text-purple-600">
                          <TimerIcon className="h-5 w-5" />
                          {service.durationMinutes}/min
                        </span>
                      </ItemFooter>
                      <ItemSeparator />
                    </div>
                  );
                })}
              </ItemContent>
            </Item>
            <div className="flex flex-col gap-2">
              <Button className="bg-purple-700 h-11 w-full cursor-pointer">
                <Link href={`/agendar-servico/${provider.id}`}>
                  Agendar Serviço
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-11 w-full bg-purple-50 border border-purple-500 text-purple-950 cursor-pointer"
              >
                Assinar Plano
              </Button>
            </div>
            <ProviderCalendar />
          </aside>
        </div>
      </main>
    </div>
  );
}
