"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Program } from "@/lib/programs-data";
import FilterProgram, { type FilterProgramState } from "./FilterProgram";
import ProgramContent from "./ProgramContent";

interface ProgramContainerProps {
  allPrograms: Program[];
}

export default function ProgramContainer({
  allPrograms,
}: ProgramContainerProps) {
  const [filters, setFilters] = useState<FilterProgramState>({
    category: "Semua",
    status: "Semua",
    search: "",
  });

  // Extract unique categories and statuses
  const categories = [
    "Semua",
    ...Array.from(new Set(allPrograms.map((p) => p.category))),
  ];
  const statuses = ["Semua", "Berlangsung", "Selesai", "Akan Datang"];

  // Filter programs based on current filters
  const filteredPrograms = useMemo(() => {
    return allPrograms.filter((program) => {
      const matchesCategory =
        filters.category === "Semua" || program.category === filters.category;
      const matchesStatus =
        filters.status === "Semua" || program.status === filters.status;
      const matchesSearch =
        filters.search === "" ||
        program.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        program.description
          .toLowerCase()
          .includes(filters.search.toLowerCase()) ||
        program.coordinator
          .toLowerCase()
          .includes(filters.search.toLowerCase());

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [allPrograms, filters]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Filter Section */}
      <FilterProgram
        categories={categories}
        statuses={statuses}
        onFilterChange={setFilters}
      />

      {/* Programs Content */}
      <ProgramContent
        programs={filteredPrograms}
        searchQuery={filters.search}
      />
    </motion.div>
  );
}
