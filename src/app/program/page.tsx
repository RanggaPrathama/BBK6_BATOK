import { Trophy } from "lucide-react";
import { getPrograms } from "@/lib/programs-data";
import ProgramContainer from "@/components/program/ProgramContainer";
import { Suspense } from "react";

export default function ProgramsPage() {
  const allPrograms = getPrograms();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-orange-500/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto py-10 px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              PROGRAM KERJA
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Program Kerja{" "}
              <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                BBK6 Batok
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Berbagai inisiatif dan program inovatif yang kami jalankan untuk
              pemberdayaan masyarakat dan pengembangan Desa Batok yang
              berkelanjutan.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {allPrograms.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Program
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {allPrograms.filter((p) => p.status === "Selesai").length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Telah Selesai
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">
                  Kategori KKN
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      {/* <ProgramContainerWrapper allPrograms={allPrograms} /> */}

      <Suspense fallback={
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
      }>
        <ProgramContainer allPrograms={allPrograms} />
      </Suspense>
    </div>
  );
}
