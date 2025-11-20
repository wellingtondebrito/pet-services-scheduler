
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Home, Sun, Heart, Shield, DollarSign, Calendar, UserPlus, CheckCircle, Syringe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function ProviderLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative h-[70vh] flex items-center justify-start text-left text-white" >
          <Image
            alt="Mulheres morenas brincam com cachorro em fundo roxo Meninas encantado"
            src="/prestador.jpg"
            fill
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          <div className="relative z-10 p-4 sm:p-8 md:p-12 lg:p-16 w-full max-w-4xl mx-auto">
            <h1 className="font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Transforme seu amor por pets em  renda extra com o Pet.me!
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl">
              Conecte-se a tutores de pets na sua região, ofereça seus serviços e faça a diferença na vida dos animais.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-8 font-semibold text-lg w-full sm:w-auto">
                <Link href="/auth/cadastro?type=provider">Comece a Ganhar Agora</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-purple-800 hover:bg-white hover:text-purple-700 h-12 px-8 font-semibold text-lg w-full sm:w-auto">
                <a href="#como-funciona">Saiba Mais</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Explore as oportunidades para cuidar de pets no Pet.me
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Home className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-2xl">Hospedagem Familiar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ofereça um lar temporário e carinhoso para pets enquanto seus tutores viajam. Tenha flexibilidade de horários.
                  </p>
                  <Button asChild variant="link" className="p-0 text-purple-600 font-semibold">
                    <Link href="/auth/cadastro?type=provider">Oferecer Hospedagem →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Syringe className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-2xl">Pet shop e Veterinária</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Agende consultas e serviços de banho e tosa. Tenha todo o seu planejamento na palma de sua mão;
                  </p>
                  <Button asChild variant="link" className="p-0 text-purple-600 font-semibold">
                    <Link href="/auth/cadastro?type=provider">Oferecer Serviços →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <Sun className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-2xl">Passeios e Companhia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Leve cães para passear, proporcione exercícios e carinho. Ideal para quem busca flexibilidade e ama interagir com pets.
                  </p>
                  <Button asChild variant="link" className="p-0 text-purple-600 font-semibold">
                    <Link href="/auth/cadastro?type=provider">Ser Passeador →</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex-row items-center gap-4">
                  <PawPrint className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-2xl">Creche e Visitas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Cuide de pets durante o dia ou faça visitas para alimentação e brincadeiras no conforto do lar do animal.
                  </p>
                  <Button asChild variant="link" className="p-0 text-purple-600 font-semibold">
                    <Link href="/auth/cadastro?type=provider">Oferecer Creche/Visita →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Vantagens exclusivas para quem oferece serviços no Pet.me
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-4">
                <CardHeader>
                  <Heart className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                  <CardTitle>Flexibilidade Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Defina seus próprios horários e preços. Trabalhe quando e como quiser, de acordo com sua disponibilidade.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardHeader>
                  <Shield className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                  <CardTitle>Segurança e Suporte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Conte com nosso suporte 24h e seguro veterinário para cada serviço, garantindo tranquilidade para você e os pets.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardHeader>
                  <Calendar className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                  <CardTitle>Visibilidade e Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Alcance milhares de tutores na sua região sem esforço. Sua agenda sempre cheia com novos clientes.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardHeader>
                  <DollarSign className="w-10 h-10 mx-auto text-purple-600 mb-4" />
                  <CardTitle>Pagamento Garantido</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Receba seus pagamentos de forma segura e pontual. Gerencie suas finanças diretamente pela plataforma.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-12 md:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              Começar é fácil: Seu caminho para se tornar um prestador Pet.me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-purple-600 text-white rounded-full p-4 mb-6">
                  <UserPlus className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">1. Crie Seu Perfil Grátis</h3>
                <p className="text-gray-600 px-4">
                  Cadastre-se rapidamente, conte sobre sua experiência e os serviços que deseja oferecer.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-600 text-white rounded-full p-4 mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">2. Personalize Seus Serviços</h3>
                <p className="text-gray-600 px-4">
                  Defina sua disponibilidade, preços e raio de atendimento. Seu perfil será visível para tutores próximos.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-600 text-white rounded-full p-4 mb-6">
                  <PawPrint className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">3. Comece a Atender e Ganhar</h3>
                <p className="text-gray-600 px-4">
                  Receba solicitações, aceite as que desejar e comece a transformar seu amor em renda.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-purple-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Pronto para ser um herói Pet.me?</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg">
              Junte-se à nossa comunidade de cuidadores apaixonados e comece a fazer a diferença hoje.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-100 h-12 px-8 font-semibold text-lg w-full sm:w-auto">
                <Link href="/auth/cadastro?type=provider">Quero Ser Prestador</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
