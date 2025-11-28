// auth/login/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaGoogle } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image'
import Link from "next/link";
import { LoginValues, loginSchema } from "@/schemas/authSchemas";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  

  async function onSubmit(data: LoginValues) {
    try{
      login(data)
      form.reset()
      router.push('/busca-prestador')
    }catch(error){
      console.log(error);
    }
    // O retorno implícito de 'Promise<void>' satisfaz o TypeScript
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="text-purple-700" htmlFor="email">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-11 w-full"
                            placeholder="Digite o seu e-mail"
                            id="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="gap-2.5">
                        <FormLabel className="text-purple-700" htmlFor="password">
                          Senha
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="w-full h-11"
                            type="password"
                            placeholder="Digite a sua senha"
                            id="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Separator className="my-4" />
                  <CardFooter className="flex-col gap-4">
                    <Button
                      className="bg-purple-700 w-full p-1.5 cursor-pointer h-11 hover:bg-purple-900"
                      type="submit"
                    >
                      Entrar
                    </Button>
                    <Button
                      className="text-purple-700 w-full h-11 p-1.5 cursor-pointer outline-0 hover:underline"
                      variant="link"
                    >
                      Esqueci minha senha
                    </Button>
                    <Separator className="my-4" />
                    <Button
                      className="bg-purple-100 w-full h-11 text-purple-700 cursor-pointer p-1.5"
                      variant="secondary"
                    >
                      <FaGoogle className="text-violet-700 mr-2" /> Entre com google
                    </Button>
                    <div className="flex flex-col w-full justify-between gap-2 md:flex-row ">
                    <Button
                      variant={"default"}
                      className="text-purple-50 bg-purple-500  w-full h-11 border-purple-900 p-1.5 cursor-pointer md:w-1/2"
                    >
                      <Link href="/cadastro-tutor">Cadastrar como Tutor</Link>
                    </Button>
                    <Button
                      variant={"outline"}
                      className="text-purple-700 w-full h-11 border-purple-500 p-1.5 cursor-pointer md:w-1/2"
                    >
                      <Link href="/cadastro-prestador">Cadastrar como Prestador</Link>
                    </Button>

                    </div>
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
