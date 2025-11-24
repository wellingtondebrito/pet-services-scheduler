"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Este hook vai nos ajudar a sincronizar
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export function ProviderGallery({ gallery }: { gallery: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 2. APIs para ambos os carrosséis
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();

  // 3. Efeito de sincronização
  useEffect(() => {
    if (!mainApi || !thumbApi) {
      return;
    }
    // Função de atualização:
    const onSelect = () => {
      const selectedIndex = mainApi?.selectedScrollSnap();
      setSelectedIndex(selectedIndex);
      thumbApi?.scrollTo(selectedIndex); // Sincroniza o carrossel de miniaturas
    };

    mainApi.on("select", onSelect); // Remove o listener quando o componente desmonta

    return () => {
      mainApi.off("select", onSelect);
    };
  }, [mainApi, thumbApi]);

  return (
    <div className="flex flex-col gap-4">
      {/* CARROSSEL PRINCIPAL */}
      <Carousel setApi={setMainApi} className="w-full">
        <CarouselContent>
          {/* AQUI: Mapeie o array 'gallery' */}
          {gallery.map((url, index) => (
            <CarouselItem key={index}>
              {/* Exemplo de imagem responsiva, ajuste as classes conforme necessário */}
              <img
                src={url}
                alt={`Galeria Imagem ${index + 1}`}
                className="w-full h-80 lg:h-[500px] object-cover rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Adiciona navegação para telas grandes */}
        <div className="hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      {/* O próximo bloco é o Carrossel de Miniaturas */}
      <Carousel
        setApi={setThumbApi} // 👈 Captura a API do Thumbnail
        className="w-full"
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className="-ml-1">
          {gallery.map((url, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/5 sm:basis-1/6 md:basis-1/8 lg:basis-1/10 cursor-pointer"
            >
              <div
                onClick={() => {
                  if (mainApi) {
                    mainApi.scrollTo(index); // 👈 Sincroniza o carrossel principal
                  }
                }}
                className={`p-1 border-2 rounded-lg transition-all duration-300 ${
                  selectedIndex === index
                    ? "border-purple-600 ring-4 ring-purple-200" // Estilo Ativo
                    : "border-transparent opacity-60 hover:opacity-100" // Estilo Inativo
                }`}
              >
                <img
                  src={url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-16 object-cover rounded" // Altura fixa para miniaturas
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
