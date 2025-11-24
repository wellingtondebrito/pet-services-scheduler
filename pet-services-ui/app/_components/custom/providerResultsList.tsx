"use client";

import { MOCK_PROVIDERS } from "@/data/MOCK_PROVIDERS";
import { ProviderCard } from "./providerCard";
import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const providers = MOCK_PROVIDERS;

export default function ProviderResultsList() {
  const ITEMS_PER_PAGE = 4;
  const totalProviders = providers.length;
  const totalPages = Math.ceil(totalProviders / ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const endIndex = currentPage * ITEMS_PER_PAGE;
  const startIndex = endIndex - ITEMS_PER_PAGE;
  const currentProviders = providers.slice(startIndex, endIndex);

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
