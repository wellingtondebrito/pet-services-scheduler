// auth/login/page.tsx
"use client";

// Importações de bibliotecas e componentes.
import * as z from "zod";
import { useForm, Control, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  petOwnerRegisterSchema,
  serviceProviderRegisterSchema,
} from "../schema/registerSchema";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function RegisterPage() {
  const ownerForm = useForm<z.infer<typeof petOwnerRegisterSchema>>({
    // `resolver` integra o Zod com o React Hook Form para validação.
    resolver: zodResolver(petOwnerRegisterSchema),
    // `mode: "onBlur"` faz com que a validação seja acionada quando o usuário sai de um campo.
    mode: "onBlur",
    // Valores iniciais do formulário.
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      phone: "",
      cpf: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  // --- GERENCIAMENTO DO FORMULÁRIO DE PRESTADOR ---
  // Cria uma instância separada para o formulário de Prestador de Serviços.
  const providerForm = useForm<z.infer<typeof serviceProviderRegisterSchema>>({
    resolver: zodResolver(serviceProviderRegisterSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      phone: "",
      serviceType: undefined,
      experienceDescription: "",
    },
  });

  // Função chamada ao submeter o formulário de Tutor.
  // Ela só será executada se a validação do `petOwnerRegisterSchema` passar.
  async function onOwnerSubmit(data: z.infer<typeof petOwnerRegisterSchema>) {
    console.log(data);
  }

  // Função chamada ao submeter o formulário de Prestador.
  // Ela só será executada se a validação do `serviceProviderRegisterSchema` passar.
  async function onProviderSubmit(
    data: z.infer<typeof serviceProviderRegisterSchema>
  ) {
    console.log(data);
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
          <Card className="w-full max-w-lg shadow-2xl">
            <CardContent className="gap-3 pt-6">
              {/* O componente Tabs gerencia a troca entre os formulários. */}
              <Tabs defaultValue="PET_OWNER" className="w-full">
                {/* TabsList contém os botões que ativam cada aba. */}
                <TabsList className="grid w-full grid-cols-2">
                  {/* O `value` de cada Trigger corresponde ao `value` do seu TabsContent. */}
                  <TabsTrigger value="PET_OWNER">Tutor</TabsTrigger>
                  <TabsTrigger value="PET_PROVIDER">
                    Prestador de Serviço
                  </TabsTrigger>
                </TabsList>

                {/* Conteúdo da aba de Tutor. Só é visível quando a aba "PET_OWNER" está ativa. */}
                <TabsContent value="PET_OWNER">
                  {/* O `Form` do shadcn/ui é um provedor de contexto para o `react-hook-form`. */}
                  <Form {...ownerForm}>
                    <form
                      // `handleSubmit` do react-hook-form valida os dados antes de chamar `onOwnerSubmit`.
                      onSubmit={ownerForm.handleSubmit(onOwnerSubmit)}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-semibold text-purple-800 mt-4">
                        Cadastro de Tutor
                      </h3>
                      {/* Chamada da função que renderiza os campos comuns, passando o controle do formulário de tutor. */}
                      {renderBaseFields(ownerForm.control)}

                      {/* Campos específicos do Tutor */}
                      <FormField
                        control={ownerForm.control}
                        name="cpf"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CPF</FormLabel>
                            <FormControl>
                              <Input
                                className="h-11"
                                placeholder="Seu CPF"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={ownerForm.control}
                          name="street"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Endereço</FormLabel>
                              <FormControl>
                                <Input
                                  className="h-11"
                                  placeholder="Rua, Número"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={ownerForm.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cidade</FormLabel>
                              <FormControl>
                                <Input
                                  className="h-11"
                                  placeholder="Sua cidade"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={ownerForm.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Estado (UF)</FormLabel>
                              <FormControl>
                                <Input
                                  className="h-11"
                                  placeholder="Ex: SP"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={ownerForm.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CEP</FormLabel>
                              <FormControl>
                                <Input
                                  className="h-11"
                                  placeholder="Seu CEP"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-11 bg-purple-700 hover:bg-purple-800"
                      >
                        Cadastrar como Tutor
                      </Button>
                    </form>
                  </Form>
                </TabsContent>

                {/* Conteúdo da aba de Prestador. Só é visível quando a aba "PET_PROVIDER" está ativa. */}
                <TabsContent value="PET_PROVIDER">
                  <Form {...providerForm}>
                    <form
                      onSubmit={providerForm.handleSubmit(onProviderSubmit)}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-semibold text-purple-800 mt-4">
                        Cadastro de Prestador de Serviço
                      </h3>
                      {/* Reutilização da função, mas agora passando o controle do formulário de prestador. */}
                      {renderBaseFields(providerForm.control)}

                      {/* Campos específicos do Prestador */}
                      <FormField
                        control={providerForm.control}
                        name="serviceType"
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
                                <SelectItem value="banho">
                                  Banho e Tosa
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={providerForm.control}
                        name="experienceDescription"
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
                        className="w-full h-11 bg-purple-700 hover:bg-purple-800"
                      >
                        Cadastrar como Prestador
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function renderBaseFields(
  control: Control<FieldValues>
) {
  return (
    <>
      <FormField
        control={control}
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
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input className="h-11" placeholder="seu@email.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="phone"
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
          control={control}
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
          control={control}
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
    </>
  );
}
