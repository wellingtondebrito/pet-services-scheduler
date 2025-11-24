import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Review } from "@/data/mock-providers";
import { FaStar } from "react-icons/fa";

interface ReviewProps {
  reviews: Review[];
}

export default function ReviewCarousel({ reviews }: ReviewProps) {
  return (
    <div className="relative overflow-hidden">
      {" "}
      {/* 👈 Necessário para posicionar os botões de navegação */}
      <h3 className="text-1xl text-purple-950 font-bold mb-4">Avaliações dos Clientes</h3>
      <Carousel
        // 1. Configura para alinhar o primeiro item à esquerda
        opts={{
          align: "start",
        }}
        className="w-auto relative"
      >
        <CarouselContent className="pl-4">
          {reviews.map((review) => (
            // 2. Define a largura responsiva de cada card
            <CarouselItem
              key={review.id}
              className="
                        basis-full           /* Mobile: 100% de largura (1 card) */
                        md:basis-1/2         /* Tablet: 50% de largura (2 cards) */
                        lg:basis-1/3         /* Desktop: 33.3% de largura (3 cards) */
                        pl-4                 /* Espaçamento entre os cards */
                    "
            >
              <div className="p-1">
                {/* 3. Aqui entra o conteúdo do seu Card de Avaliação (ex: Card do Shadcn) */}
                <Card className="h-full p-6 ">
                  <CardContent className="flex flex-col justify-between h-70 p-3">
                    <div className="mb-2">
                      <img
                        src='https://avatar.iran.liara.run/public'
                        alt={`foto de perfil de ${review.name}`}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                    </div>
                    <span className="text-sm italic mb-4">{review.review}</span>
                    <div className="">
                      <p className="text-base text-purple-950 font-medium">{review.name}</p>
                      <span className="flex flex-row gap-2 mt-1">
                        <FaStar className="text-yellow-600"/>
                      <p className="text-purple-900 text-sm">
                        {review.rating}
                      </p>

                      </span>
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
