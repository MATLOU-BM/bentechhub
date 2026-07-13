import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import logo from "@/assets/Logo.svg";

interface NavbarProps {
  setLoading?: (loading: boolean) => void;
}

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Academy", path: "/academy" },
  { label: "Talent", path: "/talent" },
  { label: "Contact", path: "/contact" },
];

const serviceLinks = [
  {
    title: "Network Infrastructure",
    path: "/services/network-infrastructure",
    description: "Enterprise LAN, WAN & Structured Cabling",
  },
  {
    title: "Business WiFi",
    path: "/services/business-wifi",
    description: "Reliable Wireless Solutions",
  },
  {
    title: "CCTV Solutions",
    path: "/services/cctv",
    description: "Smart Security & Surveillance",
  },
  {
    title: "Managed IT Services",
    path: "/services/managed-it",
    description: "24/7 ICT Support & Maintenance",
  },
];

export default function Navbar({ setLoading }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigateTo = (path: string) => {
    if (setLoading) {
      setLoading(true);

      setTimeout(() => {
        navigate(path);

        setTimeout(() => {
          setLoading(false);
        }, 400);
      }, 250);
    } else {
      navigate(path);
    }

    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}

        <button
          onClick={() => navigateTo("/")}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-16 object-contain"
          />
        </button>

        {/* DESKTOP NAV */}

        <nav className="hidden lg:flex items-center gap-8">

          <button
            onClick={() => navigateTo("/")}
            className={`transition ${
              location.pathname === "/"
                ? "text-green-700 font-semibold"
                : "text-gray-700 hover:text-green-700"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => navigateTo("/about")}
            className={`transition ${
              location.pathname === "/about"
                ? "text-green-700 font-semibold"
                : "text-gray-700 hover:text-green-700"
            }`}
          >
            About Us
          </button>

          {/* SERVICES */}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 hover:text-green-700 transition">
              Services
              <FiChevronDown />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: .2 }}
                  className="absolute top-full left-0 mt-4 w-96 rounded-xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
                >
                  {serviceLinks.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => navigateTo(service.path)}
                      className="w-full text-left px-6 py-5 hover:bg-gray-50 transition border-b last:border-none"
                    >
                      <h3 className="font-semibold text-gray-900">
                        {service.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {service.description}
                      </p>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((item) => (
            <button
              key={item.path}
              onClick={() => navigateTo(item.path)}
              className={`transition ${
                location.pathname === item.path
                  ? "text-green-700 font-semibold"
                  : "text-gray-700 hover:text-green-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}

        <button
          onClick={() => navigateTo("/contact")}
          className="hidden lg:block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium transition"
        >
          Request Assessment
        </button>

        {/* MOBILE BUTTON */}

        <button
          className="lg:hidden text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="lg:hidden bg-white shadow-xl"
          >

            <div className="px-6 py-6 flex flex-col">

              <button
                onClick={() => navigateTo("/")}
                className="py-4 text-left"
              >
                Home
              </button>

              <button
                onClick={() => navigateTo("/about")}
                className="py-4 text-left"
              >
                About Us
              </button>

              {/* MOBILE SERVICES */}

              <button
                onClick={() =>
                  setMobileServicesOpen(!mobileServicesOpen)
                }
                className="flex justify-between items-center py-4"
              >
                Services

                {mobileServicesOpen ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </button>

              <AnimatePresence>

                {mobileServicesOpen && (

                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden pl-5"
                  >
                    {serviceLinks.map((service) => (
                      <button
                        key={service.path}
                        onClick={() => navigateTo(service.path)}
                        className="block py-3 text-left w-full text-gray-600"
                      >
                        {service.title}
                      </button>
                    ))}
                  </motion.div>

                )}

              </AnimatePresence>

              <button
                onClick={() => navigateTo("/academy")}
                className="py-4 text-left"
              >
                Academy
              </button>

              <button
                onClick={() => navigateTo("/talent")}
                className="py-4 text-left"
              >
                Talent
              </button>

              <button
                onClick={() => navigateTo("/contact")}
                className="py-4 text-left"
              >
                Contact
              </button>

              <button
                onClick={() => navigateTo("/contact")}
                className="mt-6 bg-green-700 text-white py-3 rounded-md"
              >
                Request Assessment
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}