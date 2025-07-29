import type { Program } from "@/lib/programs-data";
import ProgramCard from "./ProgramCard";
import { Search } from "lucide-react";

interface ProgramContentProps {
  programs: Program[];
  searchQuery?: string;
}

export default function ProgramContent({
  programs,
  searchQuery,
}: ProgramContentProps) {
  if (programs.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Tidak ada program ditemukan
            </h3>
            <p className="text-muted-foreground">
              {searchQuery
                ? `Tidak ada program yang cocok dengan "${searchQuery}". Coba ubah kata kunci pencarian atau filter yang dipilih.`
                : "Coba ubah filter yang dipilih atau kata kunci pencarian Anda."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Results Info */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Program Kerja Kami
              </h2>
              <p className="text-muted-foreground">
                Menampilkan {programs.length} program
                {searchQuery && (
                  <span className="text-primary font-medium">
                    {" "}
                    untuk &ldquo;{searchQuery}&rdquo;
                  </span>
                )}
              </p>
            </div>

            {/* Sort Options (Future Enhancement) */}
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Urutkan:</span>
              <select className="border border-border rounded-lg px-3 py-2 bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none">
                <option value="newest">Terbaru</option>
                <option value="oldest">Terlama</option>
                <option value="status">Status</option>
                <option value="category">Kategori</option>
              </select>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* Load More Button (Future Enhancement) */}
        {programs.length >= 9 && (
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
