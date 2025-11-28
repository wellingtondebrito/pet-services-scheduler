"use client";


import { ProviderCard } from "./providerCard";
import { useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useProviderStore } from "@/store/useProviderStore";




export default function ProviderResultsList() {

  const {providers, isLoading, fetchAllProviders} = useProviderStore()


  useEffect(() => {
    if(providers.length ===0){
      fetchAllProviders()
    }
  },[])

  const ITEMS_PER_PAGE = 4;
  const totalProviders = providers.length;
  const totalPages = Math.ceil(totalProviders / ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const endIndex = currentPage * ITEMS_PER_PAGE;
  const startIndex = endIndex - ITEMS_PER_PAGE;
  const currentProviders = providers.slice(startIndex, endIndex);

  if (isLoading) {
    return <div className="text-center text-xl p-8">⏳ Carregando prestadores...</div>;
  }
  
  if (providers.length === 0) {
    return <div className="text-center text-xl p-8">Nenhum prestador encontrado.</div>;
  }

  return (
    <div className="space-y-4">
      {currentProviders.map(
        (
          provider // 👈 Iteramos sobre currentProviders
        ) => (
          <ProviderCard key={provider.id} provider={provider} />
        )
      )}
      <div className="flex justify-center mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
                className={
                  currentPage === 1
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1; // A página deve começar em 1, não em 0

              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "font-bold text-purple-600" : "text-purple-300"}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
