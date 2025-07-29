"use client";

import { motion} from "framer-motion";
import {
  Calendar,
  Users,
  Lightbulb,
  Target,
  Heart,
  Star,
  
} from "lucide-react";
import VideoDialog from "./videoDialog";

import ProgramCarousel from "./carouselProgram";

export default function Programs() {



  const programs = [
    {
      day: "DAY 1",
      title: "A.K.U.",
      subtitle: "Akui dirimu, Kenali potensimu, Ukir masa depanmu",
      description:
        "Hari pertama fokus pada pengenalan diri dan eksplorasi potensi yang dimiliki setiap peserta.",
      icon: <Target className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-950",
      textColor: "text-red-600 dark:text-red-400",
    },
    {
      day: "DAY 2",
      title: "P.R.O.",
      subtitle: "Pede berbicara, Rangkai semangat, Optimalkan dirimu",
      description:
        "Hari kedua mengembangkan kemampuan komunikasi dan membangun kepercayaan diri yang kuat.",
      icon: <Users className="w-6 h-6" />,
      color: "from-primary to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      textColor: "text-primary",
    },
    {
      day: "DAY 3",
      title: "S.I.P.",
      subtitle: "Siap berkarya, Inspirasi diri, Pintar bersama",
      description:
        "Hari ketiga mempersiapkan peserta untuk berkarya dan menginspirasi lingkungan sekitar.",
      icon: <Star className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950",
      textColor: "text-yellow-600 dark:text-yellow-400",
    },
  ];

  const features = [
    { icon: <Calendar className="w-5 h-5" />, text: "3 Hari Intensif" },
    { icon: <Users className="w-5 h-5" />, text: "Pendekatan Personal" },
    { icon: <Lightbulb className="w-5 h-5" />, text: "Metode Inovatif" },
    { icon: <Heart className="w-5 h-5" />, text: "Dampak Berkelanjutan" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-orange-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-primary/50 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              PROGRAM UNGGULAN
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Temukan Dampak Nyata dari{" "}
              <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                AIRLANGGA CAKAP
              </span>
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Ini adalah program unggulan kelompok kami pelatihan berbasis keterampilan dan pengembangan potensi diri. Dirancang dalam tiga hari kegiatan dengan pendekatan berbeda, program ini bertujuan menciptakan dampak positif yang signifikan untuk siswa MTS Miftahul Ulum.
            </p>
          </motion.div>

          {/* Video/Story Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <VideoDialog title="Video Program AIRLANGGA CAKAP" linkVideo="https://drive.google.com/file/d/1uRfgPUSeUT4kOrkJgPJv3cE8_pnTeifv/preview" />
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border-2 border-primary/20 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2 hover:border-primary/40"
            >
              {/* Program Icon & Day */}
              <div className="flex items-center justify-between mb-6">
                <div className={`${program.bgColor} p-3 rounded-xl`}>
                  <span className={program.textColor}>{program.icon}</span>
                </div>
                <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {program.day}
                </span>
              </div>

              {/* Program Content */}
              <div className="space-y-4">
                <div>
                  <h3
                    className={`text-2xl font-bold ${program.textColor} mb-2`}
                  >
                    {program.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-foreground leading-tight">
                    {program.subtitle}
                  </h4>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>

                {/* Progress Indicator */}
                <div className="pt-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${program.color} h-2 rounded-full`}
                      style={{ width: `${(2 + 1) * 33.33}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    Progress: {Math.round((2 + 1) * 33.33)}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Mengapa AIRLANGGA CAKAP?
            </h3>
            <p className="text-muted-foreground">
              Program yang dirancang khusus untuk mengembangkan potensi dan
              memberikan dampak nyata
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                  <span className="text-primary">{feature.icon}</span>
                </div>
                <span className="text-foreground font-medium text-sm">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="space-y-4">
              <p className="text-foreground text-lg font-medium">
                Bersama MTS Miftahul Ulum, kami hadir untuk menyalakan semangat,
                membangun mimpi, dan mewarnai masa depan dengan motivasi yang
                tak terbatas.
              </p>
            </div>
          </div>
        </motion.div>

        <ProgramCarousel />

        
      </div>
    </section>
  );
}
