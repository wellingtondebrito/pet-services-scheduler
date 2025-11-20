import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  PawPrint,
  Home,
  Sun,
  ShieldCheck,
  Heart,
  Star,
  Search,
  Calendar,
  MessageSquare,
  CheckCircle,
  Syringe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OwnerLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative h-[80vh] flex items-center justify-start text-left text-white">
          <Image
            alt="Mulher jovem feliz brincando com seu animal de estimação, rindo e sorrindo, aproveitando o tempo com sua adorável"
            src="/tutor-pet.jpg"
            fill
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          <div className="relative z-10 p-4 sm:p-8 md:p-12 lg:p-16 w-full max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tighter">
              Encontre o cuidado perfeito para o seu melhor amigo, perto de
              você.
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl">
              Conecte-se com prestadores de serviços verificados e apaixonados
              por pets para hospedagem, passeios e creche.
            </p>
            <div id="buscar" className="mt-8 max-w-lg">
              <div className="flex gap-2 p-2 bg-white rounded-lg shadow-lg">
                <Input
                  id="search"
                  name="search"
                  value=""
                  type="text"
                  placeholder="Busque por cidade ou CEP"
                  className="flex-1 border-none focus:ring-0 text-base h-12 px-4 justify-center items-center"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 px-6 h-12">
                  <Search className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Soluções de cuidado feitas para a rotina do seu pet
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Home className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-2xl">
                    Hospedagem Domiciliar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Viaje com tranquilidade! Seu pet fica na casa de um
                    prestador verificado, com todo o conforto de um lar.
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="p-0 text-purple-600 font-semibold"
                  >
                    <Link href="#buscar">Verificar Prestadores →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Syringe className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-2xl">
                    Pet Shop e Veterinária
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    De consultas de urgência a produtos de rotina: encontre
                    veterinários 24h e compre rações e acessórios com entrega
                    rápida na sua região.
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="p-0 text-purple-600 font-semibold"
                  >
                    <Link href="#buscar">Ver Serviços Completos →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Sun className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-2xl">
                    Passeios Revigorantes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Garanta que seu cão se exercite e socialize. Passeios
                    individuais ou em grupo, agendados na hora que você precisa.
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="p-0 text-purple-600 font-semibold"
                  >
                    <Link href="#buscar">Agendar Passeio →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <PawPrint className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-2xl">
                    Pet Sitter e Creche
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Receba visitas em casa para cuidar do seu pet (gatos ou
                    cães) ou deixe-o em uma creche divertida durante o dia.
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="p-0 text-purple-600 font-semibold"
                  >
                    <Link href="#buscar">Encontrar Pet Sitter →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Cuidado Profissional e Segurança em Primeiro Lugar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-4">
                <CardHeader>
                  <ShieldCheck className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                  <CardTitle>Prestadores Verificados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Todos os nossos prestadores passam por um rigoroso processo
                    de verificação e treinamento.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardHeader>
                  <Heart className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                  <CardTitle>Suporte 24 Horas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nossa equipe de suporte está disponível a qualquer hora para
                    auxiliar você e seu pet.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardHeader>
                  <PawPrint className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                  <CardTitle>Seguro Veterinário</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tranquilidade garantida: todo serviço contratado inclui
                    seguro veterinário Pet.me.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardHeader>
                  <Star className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                  <CardTitle>Avaliações Reais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Escolha seu prestador com base em avaliações e depoimentos
                    de outros tutores.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="como-funciona"
          className="py-12 md:py-20 lg:py-24 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Encontrar seu prestador perfeito é simples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-purple-600 text-white rounded-full p-4 mb-6">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  1. Busque por Localização
                </h3>
                <p className="text-gray-600 px-4">
                  Encontre prestadores disponíveis na sua região e filtre por
                  serviço e pet.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-600 text-white rounded-full p-4 mb-6">
                  <Calendar className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  2. Agende e Converse
                </h3>
                <p className="text-gray-600 px-4">
                  Converse com o prestador, defina os detalhes e agende o
                  serviço de forma segura na plataforma.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-600 text-white rounded-full p-4 mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  3. Acompanhe e Avalie
                </h3>
                <p className="text-gray-600 px-4">
                  Receba atualizações do seu pet e deixe uma avaliação para
                  ajudar a comunidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Dê o próximo passo para o cuidado ideal.
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg">
              Comece sua busca agora e encontre o prestador de serviços ideal
              para o seu pet.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-200 h-12 px-8 font-semibold text-lg w-full sm:w-auto"
              >
                <Link href="#buscar">Buscar Prestadores Agora</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
