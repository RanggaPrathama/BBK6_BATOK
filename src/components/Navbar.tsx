"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);


  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b shadow-lg"
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo BBK6batok.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  className="h-8 w-8"
                />
                <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  BBK6 Batok
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative text-sm font-medium transition-colors duration-200 ${
                        pathname === item.href
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-[60] bg-background/80 backdrop-blur-sm border"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-50 h-full w-[280px] bg-background/95 backdrop-blur-md border-l shadow-2xl md:hidden"
            >

               <div className="flex items-center p-4 border-b justify-end">
                  <motion.div
                      key="close"
                      onClick={()=>setIsOpen(false)}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-8 w-8" />
                    </motion.div>
               </div>

              <div className="flex flex-col p-6 pt-10 ">
                
                <div className="flex flex-col space-y-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`text-lg font-medium transition-all duration-200 block py-2 ${
                          pathname === item.href
                            ? "text-orange-500 border-l-4 border-orange-500 pl-4"
                            : "text-foreground hover:text-orange-500 hover:pl-2"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                    
                  ))}

                  {/* Theme Toggle */}
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
