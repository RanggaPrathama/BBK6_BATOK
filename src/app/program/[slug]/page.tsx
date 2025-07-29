"use client";

import { useEffect, useState, use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Users,
  User,
  Clock,
  Target,
  Trophy,
  MapPin,
  Share2,
  BookOpen,
  CheckCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPrograms, getProgramBySlug } from "@/lib/programs-data";
import type { Program } from "@/lib/programs-data";
import ProgramGallery from "@/components/program/ProgramGallery";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProgramDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const [program, setProgram] = useState<Program | null>(null);
  const [relatedPrograms, setRelatedPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const foundProgram = getProgramBySlug(resolvedParams.slug);
        if (!foundProgram) {
          notFound();
          return;
        }

        setProgram(foundProgram);

        // Get related programs (same category, excluding current)
        const allPrograms = getPrograms();
        const related = allPrograms
          .filter(
            (p) =>
              p.category === foundProgram.category &&
              p.slug !== foundProgram.slug
          )
          .slice(0, 3);
        setRelatedPrograms(related);
      } catch (error) {
        console.error("Error fetching program:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchProgram();
  }, [resolvedParams.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4"></div>
          <div className="text-muted-foreground">Memuat program...</div>
        </div>
      </div>
    );
  }

  if (!program) {
    notFound();
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Berlangsung":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Selesai":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Akan Datang":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Pendidikan:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      Teknologi:
        "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      Kesehatan: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      Sosial: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      Budaya:
        "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
      Lingkungan:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
      Ekonomi:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-15 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link href="/program">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Program
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-orange-500/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-10 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                    program.category
                  )}`}
                >
                  {program.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    program.status
                  )}`}
                >
                  {program.status}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {program.title}
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {program.description}
              </p>

              {/* Action Buttons */}
              {/* <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Gabung Program
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5 mr-2" />
                  Bagikan
                </Button>
              </div> */}
            </motion.div>

            {/* Program Gallery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ProgramGallery
                title={program.title}
                mainImage={program.image}
                images={program.images || []}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Program Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    Tujuan Program
                  </h2>
                  <div className="space-y-4">
                    {program.objectives.map((objective, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          {objective}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Program Content */}
                {program.content && program.content.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-card border border-border rounded-2xl p-8"
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Detail Program
                    </h2>
                    <div className="space-y-6">
                      {program.content.map((section, index) => (
                        <div key={index}>
                          <h3 className="text-lg font-semibold text-foreground mb-3">
                            {section.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-primary" />
                    Pencapaian
                  </h2>
                  <div className="space-y-4">
                    {program.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Program Details */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-card border border-border rounded-2xl p-6 sticky top-32"
                >
                  <h3 className="text-lg font-bold text-foreground mb-6">
                    Detail Program
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Timeline
                        </div>
                        <div className="text-sm font-medium text-foreground">
                          {program.timeline}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Peserta
                        </div>
                        <div className="text-sm font-medium text-foreground">
                          {program.participants}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Koordinator
                        </div>
                        <div className="text-sm font-medium text-foreground">
                          {program.coordinator}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Lokasi
                        </div>
                        <div className="text-sm font-medium text-foreground">
                          {program.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="border-t border-border mt-6 pt-6">
                    <Button className="w-full" size="lg">
                      Daftar Sekarang
                    </Button>
                  </div> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      {relatedPrograms.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Program Terkait
                </h2>
                <p className="text-muted-foreground">
                  Eksplorasi program lain dalam kategori {program.category}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPrograms.map((relatedProgram, index) => (
                  <motion.div
                    key={relatedProgram.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/program/${relatedProgram.slug}`}>
                      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group h-full">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={relatedProgram.image}
                            alt={relatedProgram.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                relatedProgram.status
                              )}`}
                            >
                              {relatedProgram.status}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {relatedProgram.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                            {relatedProgram.description}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{relatedProgram.timeline}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
