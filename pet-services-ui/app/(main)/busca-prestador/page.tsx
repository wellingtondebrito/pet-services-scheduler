import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import FilterContent from "@/app/_components/custom/filters";
import ProviderResultsList from "@/app/_components/custom/providerResultsList";

export default function SearchProviderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-8">
          <aside className="hidden lg:block lg:w-1/4 lg:border lg:border-gray-100 lg:rounded-sm lg:shadow-sm lg:p-4 lg:space-y-4">
                <FilterContent/>
          </aside>
          <section className="flex-1 border border-gray-100 rounded-sm shadow-sm p-4 space-y-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="block lg:hidden">
                  <Filter />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-4/5 sm:max-w-xs">
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
                </SheetHeader>
                <FilterContent/>
              </SheetContent>
            </Sheet>
            <ProviderResultsList/>          
          </section>
        </div>
      </main>
    </div>
  );
}
