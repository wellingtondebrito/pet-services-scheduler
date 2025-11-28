"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}

//import { Review } from "@/types/types";
import { FaStar } from "react-icons/fa";

export interface Review {
  id: number; // Necessário para a key prop do React
  name: string;
  avatarUrl: string;
  comment: string;
  rating: number; // Por exemplo, de 1 a 5
}

interface ReviewProps {
  reviews: Review[];
}

const MOCK_REVIEWS: Review[] = [
  {
    id: 1,
    rating: 5,
    name: "João Silva",
    avatarUrl: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    comment:
      "Ótimo serviço, recomendo! Trataram os meus pets com muito carinho e atenção. Recomendo",
  },
  {
    id: 2,
    rating: 5,
    name: "João Silva",
    avatarUrl: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    comment: "Ótimo serviço, recomendo!",
  },
  {
    id: 3,
    rating: 5,
    name: "João Silva",
    avatarUrl: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    comment: "Ótimo serviço, recomendo!",
  },
  {
    id: 4,
    rating: 5,
    name: "João Silva",
    avatarUrl: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    comment: "Ótimo serviço, recomendo!",
  },
];

export default function ReviewCarousel() {
  return (
    <div className="relative overflow-hidden">
      {" "}
      {/* 👈 Necessário para posicionar os botões de navegação */}
      <h3 className="text-1xl text-purple-950 font-bold mb-4">
        Avaliações dos Clientes
      </h3>
      <Carousel
        // 1. Configura para alinhar o primeiro item à esquerda
        opts={{
          align: "center",
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          })
        ]}
        className="relative"
      >
        <CarouselContent className="pl-4">
          {MOCK_REVIEWS.map((review) => (
            // 2. Define a largura responsiva de cada card
            <CarouselItem key={review.id} className="p-2">
              <div>
                {/* 3. Aqui entra o conteúdo do seu Card de Avaliação (ex: Card do Shadcn) */}
                <Card className="flex flex-col gap-4 shadow-sm p-4">
                  <CardContent className="h-auto p-3 flex flex-col justify-center items-center gap-4">
                    <div className="mb-2 flex flex-col items-center gap-3">
                      <img
                        src={review.avatarUrl}
                        alt={`foto de perfil de ${review.name}`}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                      <span className="text-sm text-center italic mb-4">
                        {review.comment}
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <span className="flex flex-row gap-2 mt-1">
                        <FaStar className="text-yellow-600" />
                        <p className="text-purple-900 text-sm">
                          {review.rating}
                        </p>
                      </span>
                      <p className="text-base text-purple-950 font-medium">
                        {review.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* 4. Botões de Navegação */}
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 text-purple-600" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 text-purple-600" />
      </Carousel>
    </div>
  );
}
