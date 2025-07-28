"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Heart,
  ExternalLink,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // const quickLinks = [
  //   { name: "Beranda", href: "#home" },
  //   { name: "Tentang Kami", href: "#about" },
  //   { name: "Program", href: "#programs" },
  //   { name: "Tim", href: "#team" },
  //   { name: "Kontak", href: "#contact" },
  // ];

  // const programs = [
  //   { name: "A.K.U", href: "#aku" },
  //   { name: "P.R.O", href: "#pro" },
  //   { name: "S.I.P", href: "#sip" },
  //   { name: "Workshop", href: "#workshop" },
  //   { name: "Seminar", href: "#seminar" },
  // ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/bbk6unair_batok",
      icon: Instagram,
      color: "hover:text-pink-500",
    },
    {
      name: "Tiktok",
      href: "https://tiktok.com/@bbk6batok.unair",
      icon: FaTiktok,
      color: "hover:text-purple-500",
    },
   
  ];

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-orange-500 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Logo and Brand */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16">
                  <Image
                    src="/logo BBK6batok.png"
                    alt="BBK6 Batok Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    BBK6 Batok
                  </h3>
                  <p className="text-primary font-semibold">Madiun</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Kami hadir untuk menyalakan semangat, membangun mimpi, dan
                mewarnai masa depan dengan motivasi yang tak terbatas melalui
                program pengabdian masyarakat.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-5 h-5 text-primary flex-shrink-0">
                    <MapPin className="w-full h-full" />
                  </div>
                  <span className="text-sm">
                    Madiun Kecamatan Gemarang Desa Batok, Jawa Timur, Indonesia
                  </span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-5 h-5 text-primary flex-shrink-0">
                    <Phone className="w-full h-full" />
                  </div>
                  <span className="text-sm">+62 877-9441-3362</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-5 h-5 text-primary flex-shrink-0">
                    <Mail className="w-full h-full" />
                  </div>
                  <span className="text-sm">bbk6batok.unair@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div> */}

            {/* Programs */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-foreground mb-6">
                Program Kami
              </h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <Link
                      href={program.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {program.name}
                      </span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div> */}
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-card border border-primary/20 rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Subscribe Newsletter
                </span>
              </div>
            </div> */}
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} BBK6 Batok - Madiun.</span>
              <span>All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by</span>
              <span className="text-primary font-medium">BBK6 Batok Team</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 z-50 flex items-center justify-center group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
