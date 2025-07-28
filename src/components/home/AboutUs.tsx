import Image from "next/image";

import { Lightbulb, Shield, Users, Eye, Heart} from "lucide-react";

export default function AboutUs() {
  const values = [
    { icon: <Lightbulb className="w-5 h-5" />, text: "Inovasi" },
    { icon: <Shield className="w-5 h-5" />, text: "Integritas" },
    { icon: <Users className="w-5 h-5" />, text: "Kolaborasi" },
    { icon: <Eye className="w-5 h-5" />, text: "Transparansi" },
    { icon: <Heart className="w-5 h-5" />, text: "Empati" },
  ];

  return (
    <>
      <section  className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images Grid */}
            <div className="relative"> 
              <div className="grid grid-cols-12 grid-rows-8 gap-4 h-150">
                {/* Image 1 - Large */}
                <div className="col-span-8 row-span-5 relative rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg">
                  <Image
                    src="/IMG_9097.png"
                    alt="Kegiatan utama BBK 6 UNAIR"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Image 2 - Top Right */}
                <div className="col-span-4 row-span-3 relative rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg">
                  <Image
                    src="/IMG_9097.png"
                    alt="Kelompok belajar"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Image 3 - Bottom Left */}
                <div className="col-span-4 row-span-5 relative rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg">
                  <Image
                    src="/IMG_9097.png"
                    alt="Diskusi kelompok"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Image 4 - Bottom Right */}
                <div className="col-span-8 row-span-3 relative rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-lg">
                  <Image
                    src="/IMG_9097.png"
                    alt="Kolaborasi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br z-0 from-orange-400/30 to-orange-600/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br z-0 from-orange-400/20 to-orange-600/20 rounded-full blur-xl"></div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 border border-border  text-primary  px-4 py-2 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4" />
                  TENTANG KAMI
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
                  Wujudkan Masa Depan Lebih Baik dengan{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Program KKN Terpadu
                  </span>
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-md">
                  Didirikan dengan visi merevolusi pendekatan pengabdian masyarakat, kami adalah Kelompok BBK 6 Universitas Airlangga yang berdedikasi menghadirkan solusi inovatif dan berkelanjutan untuk pemberdayaan masyarakat di Kota Madiun dan sekitarnya. Kami percaya bahwa kolaborasi dan inovasi adalah kunci untuk menciptakan perubahan positif yang nyata.
                </p>

                <p className="text-md">
                  Sebagai bagian dari komitmen kami, kami telah merancang berbagai program kerja strategis yang berfokus pada peningkatan kualitas hidup dan pengembangan potensi masyarakat Madiun. Kami berupaya untuk membantu masyarakat terkait dalam setiap inisiatif, demi masa depan Madiun yang lebih cerah
                </p>
              </div>

              {/* Values */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Nilai-Nilai dan Visi Kami
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-3 hover:bg-secondary/50 transition-colors"
                    >
                      <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 p-2 rounded-lg flex-shrink-0">
                        <span className="text-primary">{value.icon}</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {value.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              {/* <div className="pt-4">
                <button className="bg-gradient-to-r from-primary to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Pelajari Program Kami
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-orange-600 p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Selamat Datang di BBK6 Batok
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Temukan berbagai informasi, program unggulan, dan kegiatan
                    menarik yang akan membawa dampak positif bagi masyarakat dusun Batok Kecamatan Gemarang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
