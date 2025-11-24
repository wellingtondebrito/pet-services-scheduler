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
import { SubscriptionPlan } from "@/data/mock-providers";
import Link from "next/link";

interface SubscriptionPlanProps {
  subscription: SubscriptionPlan[];
}

export default function SubscriptionPlanProvider({
  subscription,
}: SubscriptionPlanProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {/* 👆 Container principal: Flexbox com quebra de linha e centralização */}

      {subscription.map((plan) => (
        <Card
          key={plan.id}
          className="
            relative w-full
            basis-full                 /* Mobile: Ocupa 100% */
            sm:basis-[calc(50%-12px)]  /* Tablet (sm): Ocupa ~50% (2 por linha) */
            lg:basis-[calc(33.333%-16px)] /* Desktop (lg): Ocupa ~33% (3 por linha) */
            xl:basis-[calc(25%-18px)]    /* Desktop maior (xl): Ocupa ~25% (4 por linha) */
            h-full lg:h-[500px] flex flex-col justify-between 
            shadow-lg hover:shadow-xl transition-shadow
          "
        >
          {/* ... CardHeader, CardDescription, etc ... */}
          <CardHeader className="flex flex-col items-center p-6">
            <h3 className="text-xl font-bold text-purple-700">
              {plan.planName}
            </h3>
            <p className="text-xl font-extrabold mt-2 text-purple-900">
              {plan.value}
            </p>
          </CardHeader>

          <CardDescription className="flex-1 space-y-3 p-6 pt-0 text-gray-700">
            <p className="font-semibold">{plan.services}</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {/* Você pode mapear benefits se for um array */}
              <li>{plan.benefits}</li>
            </ul>
          </CardDescription>

          <CardFooter className="flex justify-center p-6 border-t">
            <Button className="bg-purple-700 hover:bg-purple-800 w-full">
              Assinar
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
