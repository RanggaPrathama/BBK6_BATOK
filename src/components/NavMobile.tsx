"use client";

import Link from "next/link";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";

type NavigationItem = {
  name: string;
  href: string;
  //   onClick: () => void;
};

interface NavMobileProps {
  navigation: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function NavMobile({
  navigation,
  isOpen,
  onClose,
}: NavMobileProps) {
  const pathname = usePathname();

  
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
              onClick={onClose}
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
                  onClick={onClose}
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
                        onClick={onClose}
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
