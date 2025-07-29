import Link from "next/link";
import Image from "next/image";
import { Users, MapPin, ArrowRight, Clock, User } from "lucide-react";
import type { Program } from "@/lib/programs-data";

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Berlangsung":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Selesai":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "Akan Datang":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Pendidikan:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-200 border-purple-200 dark:border-purple-800",
      Teknologi:
        "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-200 border-cyan-200 dark:border-cyan-800",
      Kesehatan:
        "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200 border-red-200 dark:border-red-800",
      Sosial:
        "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-200 border-pink-200 dark:border-pink-800",
      Budaya:
        "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-200 border-amber-200 dark:border-amber-800",
      Lingkungan:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800",
      Ekonomi:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  return (
    <div>
      <Link href={`/program/${program.slug}`}>
        <div className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                  program.category
                )}`}
              >
                {program.category}
              </span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  program.status
                )}`}
              >
                {program.status}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {program.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
              {program.description}
            </p>

            {/* Meta Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{program.timeline}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{program.participants}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <User className="w-4 h-4" />
                <span>Koordinator: {program.coordinator}</span>
              </div>
              {program.location && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{program.location}</span>
                </div>
              )}
            </div>

            {/* Achievements Preview */}
            <div className="mb-4">
              <div className="text-xs font-medium text-muted-foreground mb-2">
                Pencapaian:
              </div>
              <div className="text-xs text-muted-foreground line-clamp-2">
                {program.achievements[0]}
              </div>
            </div>

            {/* Read More Button */}
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-muted-foreground">
                Baca selengkapnya
              </span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
