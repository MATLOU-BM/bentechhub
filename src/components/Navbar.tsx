import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "@/assets/Logo.svg";

interface NavbarProps {
  setLoading?: (loading: boolean) => void;
}

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Academy", path: "/academy" },
  { label: "Talent", path: "/talent" },
  { label: "About", path: "/about" },
];

export default function Navbar({ setLoading }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (path: string) => {
    if (setLoading) {
      setLoading(true);
      setTimeout(() => {
        navigate(path);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, 300);
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
       <button
  onClick={() => handleNavigation("/")}
  className="flex items-center cursor-pointer"
>
  <motion.img
    src={logo}
    alt="BenTechHub Logo"
    className="h-20 md:h-24 w-auto object-contain"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
  />
</button>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex gap-2 text-sm relative bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <div key={link.path} className="relative">
                {/* 🔥 Animated Active Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-sky-500/20 rounded-full border border-sky-400/30"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                {/* Button */}
                <button
                  onClick={() => handleNavigation(link.path)}
                  className={`
            relative px-4 py-1.5 rounded-full transition-all duration-300
            ${isActive ? "text-blue-800" : "text-black/80 hover:text-sky-300"}
          `}
                >
                  {link.label}
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <button
          onClick={() => handleNavigation("/contact")}
          className="hidden md:block bg-sky-500 text-white px-5 py-2 rounded-full text-sm cursor-pointer hover:bg-sky-600 transition"
        >
          Contact
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE NAV MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 absolute w-full top-full left-0 shadow-lg"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavigation(link.path)}
                    className={`transition-colors duration-300 text-left cursor-pointer ${
                      isActive
                        ? "text-sky-400 font-medium"
                        : "text-white/80 hover:text-sky-400"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavigation("/contact")}
                className="bg-sky-500 text-white px-5 py-2 rounded-full text-sm text-center cursor-pointer hover:bg-sky-600 transition"
              >
                Contact
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
