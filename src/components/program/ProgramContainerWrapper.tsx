"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import type { Program } from "@/lib/programs-data";

// Dynamic import ProgramContainer untuk mengatasi SSR issues
const ProgramContainer = dynamic(
  () => import("@/components/program/ProgramContainer"),
  {
    ssr: false,
    loading: () => (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-32 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-card rounded-2xl p-6 space-y-4">
                    <div className="h-40 bg-muted rounded-xl"></div>
                    <div className="h-4 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }
);

interface ProgramContainerWrapperProps {
  allPrograms: Program[];
}

export default function ProgramContainerWrapper({
  allPrograms,
}: ProgramContainerWrapperProps) {
  return (
    <Suspense
      fallback={
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-muted rounded w-48 mx-auto mb-4"></div>
                <div className="h-4 bg-muted rounded w-32 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <ProgramContainer allPrograms={allPrograms} />
    </Suspense>
  );
}
