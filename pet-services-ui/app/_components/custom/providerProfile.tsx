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

interface ProviderProfileProps {
  provider: Provider;
}

export function ProviderProfile({ provider }: ProviderProfileProps) {
  const mapPosition = [
    provider.coordinates.latitude,
    provider.coordinates.longitude,
  ];

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto py-4">
          <section className="flex-1 border border-gray-100 rounded-sm shadow-sm p-4 space-y-4 overflow-x-hidden">
            <ProviderGallery gallery={provider.gallery} />
            <Separator />
            <div className="flex flex-row items-center">
              <div>
                <Avatar className="w-10 h-10 mr-2">
                  <AvatarImage src={provider.avatarProvider} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col">
                <p className="text-purple-900 font-medium text-lg">
                  {provider.companyName}
                </p>
                <p className="text-gray-500 text-sm mb-1">
                  {provider.providerType}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <MapPin className="h-5 w-5 text-purple-500" />
                    <p className="text-gray-500 text-sm">
                      {provider.address.neighborhood}, {provider.address.number}{" "}
                      - {provider.address.city}, {provider.address.state}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FaStar className="h-5 w-5 text-amber-400" />
                    <p className="text-gray-500 text-sm">{provider.rating}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">{provider.description}</p>
            </div>
            <Separator />
            <ReviewCarousel reviews={provider.reviews} />
            <Separator />
            <div className="flex flex-col md:flex-row justify-around gap-4 p-3">
              <div className="w-full md:w-1/2">
                <h3 className="text-1xl text-purple-950 font-bold mb-4">
                  Habilidades
                </h3>
                {provider.skills.map((skill, index) => {
                  return (
                    <div key={skill[index]} className="flex flex-col gap-3">
                      <p className="text-gray-600 text-sm mb-3">{skill}</p>
                    </div>
                  );
                })}
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-1xl text-purple-950 font-bold mb-4">
                  Informações sobre o espaço
                </h3>
                {provider.spaceFeatures.map((skill, index) => {
                  return (
                    <div key={skill[index]} className="flex flex-col gap-3">
                      <p className="text-gray-600 text-sm mb-3">{skill}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <Separator />
            <SubscriptionPlanProvider
              subscription={provider.subscriptionPlans}
            />
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
                {provider.services.map((service) => {
                  return (
                    <div key={service.id} className="w-full sm:w-[calc(50%-0.5rem)]">
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
                        <p className="text-purple-800 font-medium">
                          {service.name}
                        </p>
                      </ItemDescription>
                      <ItemFooter>
                        <p className="text-purple-950 font-bold">
                          {formatCurrency(service.price)}
                        </p>
                        <span className="flex gap-0.5 text-purple-600">
                          <TimerIcon className="h-5 w-5" />
                          {service.duration}
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
            <ProviderCalendar availabilityData={provider.availability} />
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
          <aside className="hidden lg:block lg:w-[320px] lg:border lg:border-gray-100 lg:rounded-sm lg:shadow-sm lg:p-4 lg:space-y-4 shrink-0">
            <Item>
              <ItemHeader>
                <ItemTitle className="text-purple-800 text-lg font-medium mb-4">
                  Serviços
                </ItemTitle>
              </ItemHeader>
              <ItemContent className="flex flex-wrap gap-4">
                {provider.services.map((service) => {
                  return (
                    <div key={service.id} className="w-full">
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
                        <p className="text-purple-800 font-medium">
                          {service.name}
                        </p>
                      </ItemDescription>
                      <ItemFooter>
                        <p className="text-purple-950 font-bold">
                          {formatCurrency(service.price)}
                        </p>
                        <span className="flex gap-0.5 text-purple-600">
                          <TimerIcon className="h-5 w-5" />
                          {service.duration}
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
                Agendar Serviço
              </Button>
              <Button
                variant="outline"
                className="h-11 w-full bg-purple-50 border border-purple-500 text-purple-950 cursor-pointer"
              >
                Assinar Plano
              </Button>
            </div>
            <Separator />
            <h3 className="text-purple-900">Disponibilidade</h3>
            <ProviderCalendar availabilityData={provider.availability} />
          </aside>
        </div>
      </main>
    </div>
  );
}
