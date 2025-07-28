"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";
import Image from "next/image";


export default function ProgramCarousel(){

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 
  const programImages = [
    {
      src: "/asset/program/cakap_1.jpg",
      alt: "Kegiatan A.K.U - Pengenalan Diri",
      title: "Sesi A.K.U",
      description: "Peserta sedang melakukan pengisian form RIASEC Pengenalan Diri",
    },
    {
      src: "/asset/program/cakap_2.jpg",
      alt: "Kegiatan P.R.O - Komunikasi",
      title: "Sesi Games P.R.O",
      description: "Permainan untuk meningkatkan komunikasi dan kepercayaan diri",
    },
    {
      src: "/asset/program/cakap_3.jpg", 
      alt: "Kegiatan P.R.O - Public Speaking",
      title: "Sesi Public Speaking P.R.O",
      description: "Latihan public speaking untuk meningkatkan kemampuan berbicara di depan umum",
    },
    {
      src: "/asset/program/cakap_4.png",
      alt: "Foto Bersama Dengan OSIS",
      title: "Foto Bersama Dengan OSIS",
      description: "Foto bersama dengan OSIS MTS",
    },
    {
      src: "/asset/program/cakap_5.png", 
      alt: "Foto Bersama dengan Siswa MTS",
      title: "Foto Bersama dengan Siswa MTS",
      description: "Foto bersama dengan siswa MTS setelah materi",
    },
    {
      src: "/asset/program/cakap_6.jpg", 
      alt: "Kegiatan S.I.P - Diskusi Kelompok",
      title: "Kegiatan S.I.P - Diskusi Kelompok",
      description: "Diskusi kelompok untuk membahas materi",
    },
  ];


    const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === programImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? programImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

    return (
        <div className="pt-20">
        {/* Image Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-5xl md:text-4xl font-bold text-foreground mb-4">
              Galeri Kegiatan{" "}
              <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                AIRLANGGA CAKAP
              </span>
            </h3>
            <p className="text-muted-foreground">
              Lihat momen-momen berharga selama program berlangsung
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 shadow-lg mx-auto">
            {/* Main Image Display */}
            <div className="relative  h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={programImages[currentImageIndex].src}
                    alt={programImages[currentImageIndex].alt}
                    fill
                    className="object-cover"
                  />

                  {/* Image Overlay with Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold mb-2">
                      {programImages[currentImageIndex].title}
                    </h4>
                    <p className="text-white/90">
                      {programImages[currentImageIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:text-white transition-all duration-300 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:text-white transition-all duration-300 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center space-x-3 overflow-x-auto pb-2">
              {programImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                    index === currentImageIndex
                      ? "border-primary shadow-lg shadow-primary/30"
                      : "border-border hover:border-primary/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-primary/20" />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {programImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-primary shadow-lg"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        </div>
    )
}