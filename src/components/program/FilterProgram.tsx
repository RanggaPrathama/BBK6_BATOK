"use client";

import React, { useEffect, useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface FilterProgramProps {
  categories: string[];
  statuses: string[];
  onFilterChange: (filters: FilterProgramState) => void;
}

export interface FilterProgramState {
  category: string;
  status: string;
  search: string;
}

export default function FilterProgram({
  categories,
  statuses,
  onFilterChange,
}: FilterProgramProps) {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [selectedStatus, setSelectedStatus] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const category = searchParams.get("category") || "Semua";
    const status = searchParams.get("status") || "Semua";
    const search = searchParams.get("search") || "";

    setSelectedCategory(category);
    setSelectedStatus(status);
    setSearchQuery(search);
  }, [searchParams]);

  useEffect(() => {
    // Notify parent component of filter changes
    onFilterChange({
      category: selectedCategory,
      status: selectedStatus,
      search: searchQuery,
    });

    const params = new URLSearchParams(searchParams.toString());
    if (selectedCategory !== "Semua") params.set("category", selectedCategory);
    else params.delete("category");

    if (selectedStatus !== "Semua") params.set("status", selectedStatus);
    else params.delete("status");

    if (searchQuery) params.set("search", searchQuery);
    else params.delete("search");

    const newUrl = params.toString()
      ? `?${params.toString()}`
      : window.location.pathname;
    window.history.replaceState({}, "", newUrl);
  }, [
    selectedCategory,
    selectedStatus,
    searchQuery,
    onFilterChange,
    searchParams,
  ]);

  const clearAllFilters = () => {
    setSelectedCategory("Semua");
    setSelectedStatus("Semua");
    setSearchQuery("");
  };

  const hasActiveFilters =
    selectedCategory !== "Semua" || selectedStatus !== "Semua" || searchQuery;

  return (
    <section className="py-8 border-b border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Cari program kerja..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-300"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-border rounded-xl px-4 py-3 bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none min-w-[140px] transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-border rounded-xl px-4 py-3 bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none min-w-[140px] transition-all duration-300"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            {/* Clear All Button */}
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl text-sm transition-all duration-300"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="text-sm text-muted-foreground mr-2">
              Active filters:
            </span>

            {selectedCategory !== "Semua" && (
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("Semua")}
                  className="ml-1 hover:bg-primary/20 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedStatus !== "Semua" && (
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">
                {selectedStatus}
                <button
                  onClick={() => setSelectedStatus("Semua")}
                  className="ml-1 hover:bg-primary/20 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">
                &ldquo;{searchQuery}&rdquo;
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-1 hover:bg-primary/20 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
