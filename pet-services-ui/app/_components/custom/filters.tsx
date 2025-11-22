"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";
import { Home, Sun, PawPrint, Syringe, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";


export default function FilterContent() {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [location, setLocation] = useState("");
  const [petSize, setPetSize] = useState<string[]>([]);
  const [service, setService] = useState("");
  const [hasYard, setHasYard] = useState(false);
  const [hasSpecialNeeds, setSpecialNeeds] = useState(false);
  const [hasOtherPets, setHasOtherPets] = useState(false);
const [hasChildren, setHasChildren] = useState(false);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="space-y-6 p-4">
      <div>
        <h3 className="text-sm font-semibold mb-3 text-purple-950">
          Qual serviço você procura?
        </h3>
        <ToggleGroup
          type="single"
          variant={"default"}
          spacing={2}
          size={"default"}
          className="flex flex-wrap gap-2"
          value={service}
          onValueChange={setService}
        >
          <ToggleGroupItem
            value="hospedagem"
            aria-label="Toggle Hospedagem"
            className="bg-purple-200  p-4  w-auto flex items-center justify-center cursor-pointer hover:bg-purple-500 hover:text-purple-50 data-[state=on]:bg-purple-700 data-[state=on]:text-purple-50"
          >
            <Home />
            Hospedagem
          </ToggleGroupItem>
          <ToggleGroupItem
            value="passeador"
            aria-label="Toggle Passeador"
            className="bg-purple-200  p-4 w-auto flex items-center justify-center  cursor-pointer hover:bg-purple-500 hover:text-purple-50 data-[state=on]:bg-purple-700 data-[state=on]:text-purple-50"
          >
            <Sun />
            Passeador
          </ToggleGroupItem>
          <ToggleGroupItem
            value="creche"
            aria-label="Toggle Creche"
            className="bg-purple-200  p-4  w-auto flex items-center justify-center  cursor-pointer hover:bg-purple-500 hover:text-purple-50 data-[state=on]:bg-purple-700 data-[state=on]:text-purple-50"
          >
            <PawPrint />
            Creche
          </ToggleGroupItem>
          <ToggleGroupItem
            value="saude-animal"
            aria-label="Toggle Saúde Animal"
            className="bg-purple-200  p-4  w-auto flex items-center justify-center  cursor-pointer hover:bg-purple-500 hover:text-purple-50 data-[state=on]:bg-purple-700 data-[state=on]:text-purple-50"
          >
            <Syringe />
            Saúde Animal
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <Separator />
      <div className="gap-2 flex-col">
        <h3 className="text-sm font-semibold mb-3 text-purple-950">
          Faixa de preço
        </h3>
        <p className="text-purple-800 font-semibold mb-1">
          {formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])}
        </p>
        <Slider
          value={priceRange}
          max={300}
          step={10}
          aria-label="Faixa de preço"
          onValueChange={setPriceRange}
        />
      </div>

      <Separator />
      <div>
        <h3 className="text-sm font-semibold mb-3 text-purple-950">
          Localização
        </h3>
        <div className="flex gap-2">
          <Input
            value={location}
            placeholder="Buscar pela cidade ou bairro"
            className="flex-1"
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button
            size={"icon"}
            variant={"outline"}
            className="bg-purple-800 hover:bg-purple-900 cursor-pointer text-purple-50 hover:text-purple-50"
          >
            <MapPin className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="text-sm font-semibold mb-3 text-purple-950">
          Tamanho do Pet
        </h3>
        <ToggleGroup
          type="multiple"
          variant={"default"}
          spacing={2}
          size={"default"}
          className="flex flex-wrap gap-2"
          value={petSize}
          onValueChange={setPetSize}
        >
          <ToggleGroupItem
            value="pequeno"
            aria-label="Toggle Pequeno"
            className="bg-purple-200  p-4  w-auto flex items-center justify-center cursor-pointer hover:bg-purple-500 hover:text-purple-50 data-[state=on]:bg-purple-700 data-[state=on]:text-purple-50"
          >
            Pequeno
          </ToggleGroupItem>
          <ToggleGroupItem
            value="medio"
            aria-label="Toggle Médio"
            className="bg-purple-200  p-4 w-auto flex items-center justify-center  cursor-pointer hover:bg-purple-500 hover:text-purple-50 data-[state=on]:bg-purple-700 data-[state=on]:text-purple-50"
          >
            Médio
          </ToggleGroupItem>
          <ToggleGroupItem
            value="Grande"
            aria-label="Toggle Grande"
            className="bg-purple-200  p-4  w-auto flex items-center justify-center  cursor-pointer hover:bg-purple-500 hover:text-purple-50 data-[state=on]:bg-purple-700 data-[state=on]:text-purple-50"
          >
            Grande
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <Separator />
      <div>
        <h3 className="text-sm font-semibold mb-3 text-purple-950">
          Comodidade do local
        </h3>
        <div>
          <Label
            htmlFor="area-externa"
            className="font-medium text-sm text-purple-900"
          >
            Possui área externa/Quintal?
          </Label>
          <Switch
            id="area-externa"
            checked={hasYard}
            onCheckedChange={() => {
              setHasYard(!hasYard);
            }}
          />
        </div>
        <div>
          <Label
            htmlFor="pets-com-necessidades-especiais"
            className="font-medium text-sm text-purple-900"
          >
            Aceita pets com necessidades especiais?
          </Label>
          <Switch
            id="pets-com-necessidades-especiais"
            checked={hasSpecialNeeds}
            onCheckedChange={() => {
              setSpecialNeeds(!hasSpecialNeeds);
            }}
          />
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="text-sm font-semibold mb-3 text-purple-950">
          Ambiente do local
        </h3>
        <div>
          <Label
            htmlFor="outros-animais"
            className="font-medium text-sm text-purple-900"
          >
            Possuí outros animais?
          </Label>
          <Switch
            id="outros-animais"
            checked={hasOtherPets}
            onCheckedChange={() => {
              setHasOtherPets(!hasOtherPets);
            }}
          />
        </div>
        <div>
          <Label
            htmlFor="criancas-pequenas"
            className="font-medium text-sm text-purple-900"
          >
            Tem crianças pequenas?
          </Label>
          <Switch
            id="criancas-pequenas"
            checked={hasChildren}
            onCheckedChange={() => {
              setHasChildren(!hasChildren);
            }}
          />
        </div>
      </div>
    </div>
  );
}
