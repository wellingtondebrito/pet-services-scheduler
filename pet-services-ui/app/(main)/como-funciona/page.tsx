import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Dog,
  Heart,
  Home,
  Search,
  ShieldCheck,
  Star,
  Syringe,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative h-[80vh] flex items-center justify-start text-left text-white">
          <Image
            alt="Mulher jovem feliz brincando com seu animal de estimação, rindo e sorrindo, aproveitando o tempo com sua adorável"
            src="/cuidado-pet.jpg"
            fill
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          <div className="relative z-10 p-4 sm:p-8 md:p-12 lg:p-16 w-full max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tighter">
              Pet.me: Encontre o Cuidado Perfeito, Simples e Seguro.
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl">
              Descubra como o Pet.me conecta você a uma comunidade de cuidadores
              apaixonados e verificados.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-8 font-semibold text-lg w-full sm:w-auto"
              >
                <Link href="/#">Quero Encontrar Cuidado</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-purple-800 hover:bg-white hover:text-purple-700 h-12 px-8 font-semibold text-lg w-full sm:w-auto"
              >
                <Link href="/prestador">Quero Ser Prestador</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-12">
              Conheça os serviços disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardHeader>
                  <Home className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <CardTitle className="text-2xl font-bold">
                    Hospedagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6">
                    Seu pet fica em um ambiente familiar seguro enquanto você
                    viaja.
                  </CardDescription>
                  <Button asChild variant="link" className="text-purple-600">
                    <Link href="/#">Buscar Hospedagem</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Syringe className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <CardTitle className="text-2xl font-bold">
                    Pet shop e Veterinária
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6">
                    Tenha a saúde do seu pet em dia com acesso fácil a clínicas
                    e consultas. Receba todos os produtos essenciais (ração,
                    brinquedos) em casa, com comodidade.
                  </CardDescription>
                  <Button asChild variant="link" className="text-purple-600">
                    <Link href="/#">Explorar e Comprar</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Dog className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <CardTitle className="text-2xl font-bold">
                    Passeios e Companhia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6">
                    Cães com energia de sobra recebem passeios revigorantes e
                    carinho extra.
                  </CardDescription>
                  <Button asChild variant="link" className="text-purple-600">
                    <Link href="/#">Agendar Passeio</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Heart className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                  <CardTitle className="text-2xl font-bold">
                    Creche e Visitas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6">
                    Cuidados durante o dia ou visitas pontuais na sua casa para
                    pets que preferem a rotina.
                  </CardDescription>
                  <Button asChild variant="link" className="text-purple-600">
                    <Link href="/#">Encontrar Pet Sitter</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-12">
              Agendamento, Acompanhamento e Pagamento Simples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div className="flex flex-col items-center">
                <Search className="w-16 h-16 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Busque e Converse</h3>
                <p className="text-gray-600">
                  Filtre por localização, serviço e pet. Converse diretamente
                  com o prestador no chat da plataforma.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Wallet className="w-16 h-16 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Agende e Pague com Segurança
                </h3>
                <p className="text-gray-600">
                  Confirme o agendamento e pague online. O valor só é liberado
                  ao prestador após a conclusão do serviço.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/pet.me.png"
                  alt="Acompanhe a Diversão"
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Acompanhe a Diversão</h3>
                <p className="text-gray-600">
                  Receba fotos, vídeos e atualizações do seu pet em tempo real.
                  Avalie o prestador após o serviço.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Link href="/#">Quero Começar Agora</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Use Pet.me Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-12">
              Segurança e Qualidade que Encantam
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold">Verificação Rigorosa</h3>
                  <p className="text-gray-600">
                    Foco em qualidade: apenas os melhores candidatos a
                    prestadores são aprovados para o cadastro.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold">Suporte 24h</h3>
                  <p className="text-gray-600">
                    Estamos prontos para ajudar. Nosso suporte especializado
                    está disponível todos os dias.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold">Seguro Veterinário</h3>
                  <p className="text-gray-600">
                    Todo serviço contratado inclui seguro, garantindo que
                    imprevistos sejam cobertos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold">Experiência Comprovada</h3>
                  <p className="text-gray-600">
                    Confie em prestadores com histórico de avaliações e
                    classificações 5 estrelas de outros tutores.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold">Garantia Pet.me</h3>
                  <p className="text-gray-600">
                    Nossa garantia cobre danos e situações não cobertas pelo
                    seguro para você ter total tranquilidade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Wallet className="w-8 h-8 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold">Pagamento Transparente</h3>
                  <p className="text-gray-600">
                    Zero complicações: você paga apenas o valor do serviço, sem
                    taxas surpresas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
