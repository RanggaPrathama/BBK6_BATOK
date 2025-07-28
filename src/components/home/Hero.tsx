"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Users, BookOpen, MapPin, ArrowRight, Mouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const features = [
    {
      icon: <Users className="w-5 h-5" />,
      text: "Kolaborasi Tim",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "Pendidikan",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Pengabdian Masyarakat",
    },
  ];

  const stats = [
    { number: "6", label: "Jenis Program Studi" },
    { number: "9", label: "Mahasiswa" },
    { number: "8", label: "Program Kerja" },
  ];

  return (
    <section className="relative py-10 lg:py-5  min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-champagne/20 dark:from-background dark:via-card dark:to-burnt/10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/30 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 pb-20 md:pb-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2  text-primary px-4 py-2 rounded-full text-sm font-medium border border-border"
            >
              <CheckCircle className="w-4 h-4" />
              KKN BBK6 UNAIR 2025
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              

              <h1 className="text-5xl font-bold">
                Kami hadir di Desa Batok untuk{" "}
                <span className="text-primary">
                  <Typewriter
                    words={[
                      "Memberdayakan UMKM",
                      "Menginspirasi Pelajar",
                      "Meningkatkan Kesehatan",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Kelompok KKN BBK 6 Universitas Airlangga hadir di Desa Batok,
              Madiun, sebagai bentuk pengabdian kepada masyarakat yang
              mengintegrasikan ilmu pengetahuan, empati sosial, dan inovasi.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-card/70 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm font-medium text-card-foreground"
                >
                  <span className="text-primary">{feature.icon}</span>
                  {feature.text}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
             
                <Button
                size="lg"
                onClick={()=>{
                  const aboutSection = document.getElementById("aboutUs");
                  aboutSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-to-r from-primary to-accent hover:from-bright hover:to-lava text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Lebih lanjut
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image & Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl transform rotate-6"></div>

              {/* Image placeholder with BBK6 Batok logo */}
              <div className="relative bg-gradient-to-br from-primary to-accent rounded-3xl p-3 shadow-xl">
                <div className="aspect-[3/2] bg-card/90 backdrop-blur rounded-2xl overflow-hidden">
                  <Image
                    src="/IMG_9097.png"
                    alt="BBK6 Batok Logo"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Stats Cards */}
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                  className={`absolute bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border ${
                    index === 0
                      ? "top-8 -left-4"
                      : index === 1
                      ? "top-32 -right-6"
                      : "bottom-8 -left-6"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-0 lg:bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
        <span className="text-sm py-2">Scroll untuk lebih lanjut</span>
          <Mouse className="w-9 h-9 animate-bounce text-primary" />
        </div>
      </motion.div>
    </section>
  );
}
