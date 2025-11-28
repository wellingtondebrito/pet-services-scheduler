import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubscriptionPlan } from "@/types/types";
import Link from "next/link";
import { Check } from "lucide-react";
import { Separator } from "@radix-ui/react-select";
import { Badge } from "@/components/ui/badge";

interface SubscriptionPlanProps {
  subscription: SubscriptionPlan[];
}

export default function SubscriptionPlanProvider({
  subscription,
}: SubscriptionPlanProps) {
  console.log("planos de assinatura aqui", subscription);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {/* 👆 Container principal: Flexbox com quebra de linha e centralização */}
      {subscription.map((plan) => (
        <Card
          key={plan.id}
          className="
            relative w-full
            basis-full                
            sm:basis-[calc(50%-12px)] 
            lg:basis-[calc(33.333%-16px)] 
            xl:basis-[calc(25%-18px)] 
            h-full lg:h-[550px] flex flex-col
            shadow-lg hover:shadow-xl transition-shadow
            lg:gap-3
          "
        >
          {/* ... CardHeader, CardDescription, etc ... */}
          <CardHeader className="flex flex-col w-full">
            <CardTitle className="text-purple-600 text-sm font-bold">
              {plan.name}
            </CardTitle>
            <div>
              <p className="text-xl font-extrabold text-purple-900">
                {plan.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <Badge className="bg-purple-500 text-xs">
                {plan.recurrence === "MONTHLY"
                  ? "Mensal"
                  : plan.recurrence === "QUARTERLY"
                  ? "Trimestral"
                  : plan.recurrence === "YEARLY"
                  ? "Anual"
                  : undefined}
              </Badge>
            </div>
            <CardAction className="w-full">
              <Button className="bg-purple-900 hover:bg-purple-800 w-full cursor-pointer">
                Assinar
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col gap-1 w-full">
            <CardDescription className="text-gray-900 font-medium mb-2 text-xs">
              {plan.description}
            </CardDescription>
            {plan.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-0.5">
                <Check className="h-4 w-4 text-purple-700" />
                <p className="text-xs text-gray-600">{benefit}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
