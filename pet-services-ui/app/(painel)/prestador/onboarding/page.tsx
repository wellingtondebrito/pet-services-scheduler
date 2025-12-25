"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  OnboardingProviderValues,
  providerOnboardingSchema,
} from "@/schemas/providerOnboardingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function OnboardingPage() {
  const onboardingForm = useForm<OnboardingProviderValues>({
    resolver: zodResolver(providerOnboardingSchema),
    mode: "onBlur",
    defaultValues: {
      companyName: "",
      cnpj: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  async function onOnboardingSubmit(data: OnboardingProviderValues) {
    console.log(data);
  }

  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <section className="hidden lg:flex flex-col justify-center bg-purple-950 p-12 text-white">
       <div className="max-w-lg space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Bem-vindo ao Painel do Prestador!
        </h1>
        <p className="text-lg text-purple-50">
          Complete o cadastro da sua empresa para começar a oferecer seus
          serviços e alcançar mais clientes.
        </p>
       
       </div>
      </section>
     <section className="flex justify-center p-8 lg:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h2 className="text-2xl font-semibold tracking-tight">
              Cadastro da Empresa
            </h2>
            <p className="text-sm text-muted-foreground">
              Por favor, preencha as informações abaixo para criar o perfil da
              sua empresa.
            </p>
          </div>
           <Card className="w-full max-w-lg ">
            <CardContent className="gap-3 ">
              <Form {...onboardingForm}>
                <form
                  onSubmit={onboardingForm.handleSubmit(onOnboardingSubmit)}
                   className="space-y-4"
                >
                  <FormField
                    control={onboardingForm.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da empresa</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="Nome de sua empresa"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                      
                    )}
                  />
                   <FormField
                    control={onboardingForm.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CPF/CNPJ</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="Digite o CPF ou CNPJ"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                      
                    )}
                  />
                   <FormField
                    control={onboardingForm.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="Digite o telefone de contato"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                      
                    )}
                  />
                   <FormField
                    control={onboardingForm.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="Digite o email de contato"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                      
                    )}
                  />
                   <FormField
                    control={onboardingForm.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Endreço</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="Digite o endereço da empresa"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                      
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <FormField
                    control={onboardingForm.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CEP</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="Digite o CEP"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                      
                    )}
                  />
                    <FormField
                    control={onboardingForm.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bairro</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="Digite o bairro"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                      
                    )}
                  />
                  </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <FormField
                    control={onboardingForm.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="Digite a cidade"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                      
                    )}
                  />
                    <FormField
                    control={onboardingForm.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>UF</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="Digite o estado"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                      
                    )}
                  />
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
     </section>
    </main>
  );
}
