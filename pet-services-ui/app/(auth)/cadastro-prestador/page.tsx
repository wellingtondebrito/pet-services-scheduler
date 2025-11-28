// auth/login/page.tsx
"use client";

// Importações de bibliotecas e componentes.
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { petProviderSignUpSchema, PetProviderSignValues } from "@/schemas/authSchemas";
import { FaGoogle } from "react-icons/fa6";
import { useAuthStore } from "@/store/useAuthStore";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function RegisterPage() {
  // --- GERENCIAMENTO DO FORMULÁRIO DE PRESTADOR ---
  // Cria uma instância separada para o formulário de Prestador de Serviços.
  const providerForm = useForm<PetProviderSignValues>({
    resolver: zodResolver(petProviderSignUpSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      activity: undefined,
      description: "",
      phoneNumber: '',
    },
  });

  const register = useAuthStore((state) => state.registerPetProvider);
  const isLoading = useAuthStore((state) => state.isLoading);


  // Função chamada ao submeter o formulário de Prestador.
  // Ela só será executada se a validação do `serviceProviderRegisterSchema` passar.
  async function onProviderSubmit(
    data: PetProviderSignValues
  ) {
     try {
      await register({
        ...data,
        role: "PET_PROVIDER",
      });

      providerForm.reset();
      toast("Sua conta foi criada com sucesso!");
      console.log(data);
    
    } catch (error) {
      toast(
        error instanceof Error
          ? error.message
          : "Erro desconhecido ao cadastrar"
      );
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col overflow-hidden rounded-lg lg:flex-row">
        <div className="hidden lg:flex flex-col items-center justify-center p-12 lg:w-2/5">
          <h1 className="text-purple-700 text-5xl font-extrabold tracking-tight text-balance">
            Bem-vindo ao Pet.me
          </h1>
          <h4 className="mt-6 text-purple-700 text-2xl font-medium tracking-tight text-balance">
            Os serviços que o seu melhor amigo realmente merece.
          </h4>
          <Image
            src="/pet.me.png"
            alt="Ilustração de pets"
            width={400}
            height={300}
            className="mt-8 max-w-full h-auto"
          />
        </div>
        <div className="flex flex-1 items-center justify-center bg-gray-50 p-6 lg:w-3/5">
          <Card className="w-full max-w-lg ">
            <CardContent className="gap-3 pt-2">
              {/* Conteúdo da aba de Prestador. Só é visível quando a aba "PET_PROVIDER" está ativa. */}

              <Form {...providerForm}>
                <form
                  onSubmit={providerForm.handleSubmit(onProviderSubmit)}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-purple-800">
                    Cadastro de Prestador de Serviço
                  </h3>
                  <FormField
                    control={providerForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="Seu nome completo"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={providerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="seu@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={providerForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11"
                            placeholder="(XX) XXXXX-XXXX"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={providerForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Senha</FormLabel>
                          <FormControl>
                            <Input
                              className="h-11"
                              type="password"
                              placeholder="Sua senha"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={providerForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirme a Senha</FormLabel>
                          <FormControl>
                            <Input
                              className="h-11"
                              type="password"
                              placeholder="Confirme sua senha"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={providerForm.control}
                    name="activity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Serviço</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o serviço que você oferece" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="passeador">
                              Passeador (Dog Walker)
                            </SelectItem>
                            <SelectItem value="hospedagem">
                              Hospedagem
                            </SelectItem>
                            <SelectItem value="pet-shop">Pet Shop</SelectItem>
                            <SelectItem value="veterinaria">Veterinária</SelectItem>
                            <SelectItem value="adestramento">Adestramento</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={providerForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição da Experiência</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte-nos um pouco sobre sua experiência com pets."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full h-11 bg-purple-700 hover:bg-purple-800 cursor-pointer"
                  >
                    {isLoading ? <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Cadastrando...
                    </> : "Cadastrar"}
                  </Button>
                  <Button
                    className="bg-purple-100 w-full h-11 text-purple-700 cursor-pointer p-1.5"
                    variant="secondary"
                  >
                    <FaGoogle className="text-violet-700 mr-2 cursor-pointer" /> Entre com
                    google
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
