"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { newPetSchema, NewPetFormData } from "@/schemas/newPetSchema";
import { Pet } from "@/types/types";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface NewPetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPetAdded: (pet: Pet) => void;
}

export function AddPetModal({ isOpen, onClose, onPetAdded }: NewPetModalProps) {
  const form = useForm<NewPetFormData>({
    resolver: zodResolver(newPetSchema),
    mode: "onBlur",
    defaultValues: {
      type: undefined,
      name: "",
      age: "",
      breed: "",
      height: 0,
      weight: 0,
    },
  });

  const onSubmit = (data: NewPetFormData) => {
    console.log("Novo Pet Cadastrado:", data);
    // 1. Chamar a API para cadastrar o pet (JSON Server)
    // 2. Simulando retorno de sucesso com um ID
    const newPet = {
      id: Math.random(),
      type: data.type,
      name: data.name,
      age: data.age,
      breed: data.breed,
      height: data.height,
      weight: data.weight,
      ownerId: 1,
    };

    onPetAdded(newPet);
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cadastrar Novo Pet 🐾</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 py-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="text-purple-700" htmlFor="name">
                    Nome do seu bixinho!
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="h-11 w-full"
                      placeholder="Digite o seu e-mail"
                      id="name"
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="mb-6 w-full">
                  <FormLabel className="text-purple-700" htmlFor="type">
                    Selecione qual a especie do seu bixinho!
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}                  
                  >
                    <FormControl>
                      <SelectTrigger className="w-full" id="type">
                        <SelectValue placeholder="Selecione a espécie"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="border w-full">
                      <SelectGroup className="w-full">
                        <SelectItem value="DOG">Cachorro</SelectItem>
                        <SelectItem value="CAT">Gato</SelectItem>
                        <SelectItem value="BIRD">Pássaro</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <div className="flex align-center justify-center gap-2">
               <FormField
              control={form.control}
              name="breed"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="text-purple-700" htmlFor="breed">
                    Raça do seu bixinho
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="h-11 w-auto"
                      placeholder="Digite a raça do seu bixinhos"
                      id="breed"
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]"/>
                </FormItem>
              )}
            />
              <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="text-purple-700" htmlFor="age">
                    Idade do seu bixinho
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="h-11 w-auto"
                      id="age"
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            </div>
             <div className="flex align-center justify-center gap-2">
               <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="text-purple-700" htmlFor="weight">
                    Peso do seu bixinho (kg)
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="h-11 w-auto"
                      placeholder="Digite a raça do seu bixinhos"
                      id="weight"
                      type="number"
                      min={1}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
              <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="text-purple-700" htmlFor="height">
                    Altura do seu bixinho (cm)
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="h-11 w-auto"
                      id="height"
                      type="number"
                      min={1}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            </div>
            <DialogFooter className="pt-4 w-full cursor-pointer">
              <Button type="submit">Cadastrar e Selecionar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
