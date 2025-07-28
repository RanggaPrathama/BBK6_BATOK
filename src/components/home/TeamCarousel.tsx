"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Users } from "lucide-react";
import Image from "next/image";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function TeamCarousel() {
  const teamMembers = [
    {
      id: 1,
      name: "Anya",
      role: "Ketua Kelompok",
      division: "Ilmu Komunikasi",
      photo: "/asset/kelompok/anya.JPG", 
    },
    {
      id: 2,
      name: "Raras",
      role: "Humas",
      division: "Hubungan Internasional",
      photo: "/asset/kelompok/raras.webp",
    },
    {
      id: 3,
      name: "Rangga",
      role: "Perlengkapan",
      division: "Teknik Informatika",
      photo: "/asset/kelompok/rangga.jpg",
    },
    {
      id: 4,
      name: "Clarissa",
      role: "Bendahara",
      division: "Gizi",
      photo: "/asset/kelompok/clarissa.jpg", 
    },
    {
      id: 5,
      name: "Velicia",
      role: "Acara",
      division: "Hubungan Internasional",
      photo: "/asset/kelompok/velicia.jpg", 
    },
    {
      id: 6,
      name: "Icha",
      role: "Acara",
      division: "Management",
      photo: "/asset/kelompok/icha.JPG", 
    },
    {
      id: 7,
      name: "Karina",
      role: "Sekretaris",
      division: "Keperawatan",
      photo: "/asset/kelompok/karina.png", 
    },
    {
      id: 8,
      name: "Elsa",
      role: "Perlengkapan",
      division: "Keperawatan",
      photo: "/asset/kelompok/elsa.jpeg", 
    },
    {
      id: 9,
      name: "Abdul",
      role: "PDD",
      division: "Sosiologi",
      photo: "/asset/kelompok/abdul.jpg",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            KELOMPOK KAMI
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Tim{" "}
            <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
              BBK6 UNAIR BATOK MADIUN
            </span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Kenali lebih dekat tim kami sekelompok mahasiswa/i Universitas Airlangga yang berdedikasi tinggi, siap berkolaborasi untuk mengoptimalkan potensi dan membawa dampak positif melalui setiap program pengabdian di masyarakat.
          </p>
        </motion.div>

        {/* Team Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 35,
              },
            }}
            className="team-swiper pb-12"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={member.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group h-full"
                >
                  {/* Profile Photo */}
                  <div className="relative mb-6">
                    <div className="relative w-50 h-50 mx-auto">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-md">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-md">
                      {member.division}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/20 hover:bg-primary/30 backdrop-blur-md border border-primary/30 text-primary rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110">
            ←
          </div>
          <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-primary/20 hover:bg-primary/30 backdrop-blur-md border border-primary/30 text-primary rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110">
            →
          </div>
        </motion.div>

        {/* Team Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground"> Jenis Program Studi</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">
                Total Pengalaman
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">
                Peserta Terlatih
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Awards</div>
            </div>
          </div>
        </motion.div> */}
      </div>

      <style jsx global>{`
        .team-swiper .swiper-pagination-bullet {
          background-color: hsl(var(--primary));
          opacity: 0.3;
        }

        .team-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
