import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWifi,
  FaVideo,
  FaGlobe,
  FaNetworkWired,
  FaTools,
  FaShieldAlt,
  FaHeadset,
  FaServer,
  FaStar,
  FaPaperPlane,
  FaCode,
  FaPhp,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import Hero from "@/components/Hero";

// Service data with domain registration properly included
const services = [
  {
    icon: FaWifi,
    title: "Network Performance Fix",
    price: "From R500",
    shortTitle: "Fix",
    desc: "Fix slow internet, unstable connections, and poor network performance.",
    fullDesc:
      "Is your internet slow even though you have fibre? We identify and fix the real cause of poor performance — from bad configurations to overloaded networks — so your connection becomes fast, stable, and reliable.",
    features: [
      "Fix slow speeds",
      "Eliminate disconnections",
      "Network diagnostics",
      "Configuration optimization",
      "Performance testing",
    ],
  },
  {
    icon: FaWifi,
    title: "WiFi Coverage Solutions",
    price: "From R1500",
    shortTitle: "WiFi",
    desc: "Eliminate dead zones and improve signal across your entire business.",
    fullDesc:
      "Struggling with weak signal or dead zones? We design and install proper WiFi coverage so your entire business stays connected — no matter the size of your space.",
    features: [
      "Full coverage design",
      "No dead zones",
      "Multi-user optimization",
      "Access point setup",
      "Signal strength testing",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Business Continuity Solutions",
    price: "From R800",
    shortTitle: "Uptime",
    desc: "Keep your business online during outages and loadshedding.",
    fullDesc:
      "Does your internet go down during loadshedding or outages? We implement backup internet and power solutions to ensure your business stays connected at all times.",
    features: [
      "LTE backup internet",
      "Failover configuration",
      "Router & ONT UPS setup",
      "Automatic switching",
      "Downtime prevention",
    ],
  },
  {
    icon: FaNetworkWired,
    title: "Business Network Setup",
    price: "From R3000",
    shortTitle: "Setup",
    desc: "Professional network installation for offices and business environments.",
    fullDesc:
      "Setting up a new office or upgrading your current network? We build structured, secure, and scalable networks designed for performance and growth.",
    features: [
      "Office network setup",
      "Structured cabling",
      "Router & switch config",
      "Access point installation",
      "Scalable infrastructure",
    ],
  },
  {
    icon: FaTools,
    title: "Managed IT Support",
    price: "From R999/month",
    shortTitle: "Support",
    desc: "Ongoing support and maintenance for your business systems.",
    fullDesc:
      "Tired of recurring IT and network issues? We provide ongoing monitoring, maintenance, and fast support to keep your business running smoothly.",
    features: [
      "Ongoing monitoring",
      "Remote & onsite support",
      "Preventative maintenance",
      "Fast issue resolution",
      "Business continuity support",
    ],
  },
];

// Animated Bus Node Component - moves along the bus
const AnimatedBusNode = ({
  service,
  index,
  totalNodes,
  onClick,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: any) => {
  const padding = 8;
  const usableWidth = 100 - padding * 2;
  const basePosition = padding + (index / (totalNodes - 1)) * usableWidth;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="absolute flex flex-col items-center"
      style={{
        left: `${basePosition}%`,
        transform: "translateX(-50%)",
        top: "50%",
        marginTop: "-45px",
      }}
    >
      {/* Animated Dropline */}
      <motion.div
        className="w-0.5 h-12 bg-gradient-to-b from-sky-400 to-sky-300 mb-1"
        animate={{ height: [12, 16, 12] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
      />

      {/* Node Circle - with floating animation */}
      <motion.button
        onClick={() => onClick(service)}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        animate={{
          y: [0, -5, 0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
        whileHover={{ scale: 1.15, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all cursor-pointer group relative"
      >
        <service.icon className="text-lg mb-0.5" />
        <span className="text-[8px] font-semibold text-center px-1">
          {service.shortTitle}
        </span>

        {/* Hover tooltip */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap pointer-events-none z-30"
          initial={{ opacity: 0, y: 5 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          {service.title}
        </motion.div>
      </motion.button>

      {/* Service Price Label with pulse animation */}
      <motion.div
        className="mt-1 text-center"
        animate={{ scale: isHovered ? 1.05 : 1 }}
      >
        <p className="text-[9px] font-medium text-gray-500 whitespace-nowrap">
          {service.price}
        </p>
      </motion.div>
    </motion.div>
  );
};

// Orbiting Node Component - moves in a circle around the center
const OrbitingNode = ({
  title,
  price,
  setup,
  features,
  highlight,
  index,
  totalNodes,
  onClick,
  isRotating,
  radius = 180,
}: any) => {
  const [angle, setAngle] = useState((index / totalNodes) * 360);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (isRotating) {
      const duration = 20000; // 20 seconds for full rotation
      let startTime: number;
      let startAngle = angle;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % duration) / duration;
        const newAngle = startAngle + progress * 360;
        setAngle(newAngle);
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isRotating, angle]);

  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.button
      onClick={() =>
        onClick({ title, price, setup, features, highlight, type: "hosting" })
      }
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className={`absolute w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg transition-all cursor-pointer z-20 ${
        highlight
          ? "bg-gradient-to-br from-amber-500 to-orange-500 ring-4 ring-amber-300"
          : "bg-gradient-to-br from-sky-500 to-sky-600"
      } text-white`}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <span className="text-base font-bold">{title}</span>
      <span className="text-[10px] font-semibold">{price}</span>
      {highlight && <FaStar className="text-[8px] mt-0.5" />}
    </motion.button>
  );
};

// Floating Tech Icons Component
const FloatingTechIcons = () => {
  const techIcons = [
    { icon: FaPhp, x: -80, y: -60, color: "text-indigo-400", delay: 0 },
    { icon: FaNodeJs, x: 80, y: -50, color: "text-green-400", delay: 1 },
    { icon: FaPython, x: -70, y: 70, color: "text-blue-400", delay: 2 },
    { icon: FaCode, x: 75, y: 65, color: "text-purple-400", delay: 1.5 },
    { icon: FaServer, x: 0, y: -100, color: "text-cyan-400", delay: 0.5 },
    { icon: FaGlobe, x: 100, y: 0, color: "text-emerald-400", delay: 2.5 },
  ];

  return (
    <>
      {techIcons.map((tech, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${tech.color} opacity-30`}
          animate={{
            y: [tech.y - 5, tech.y + 5, tech.y - 5],
            x: [tech.x - 3, tech.x + 3, tech.x - 3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: tech.delay,
            ease: "easeInOut",
          }}
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(calc(-50% + ${tech.x}px), calc(-50% + ${tech.y}px))`,
          }}
        >
          <tech.icon size={32} />
        </motion.div>
      ))}
    </>
  );
};

// Modal Component
const ServiceModal = ({ service, onClose }: any) => {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sky-100 text-sm">{service.price}</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-700 mb-4">
            {service.fullDesc || service.desc}
          </p>

          <h4 className="font-semibold text-sky-900 mb-3 flex items-center gap-2">
            <FaTools className="text-sky-500" size={14} />
            What's Included:
          </h4>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            {service.features.map((feature: string, idx: number) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="text-sky-500">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/27672033731?text=Hi!%20I'm%20interested%20in%20your%20${service.title}%20service%20(${service.price}).%20Please%20send%20me%20more%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <FaPaperPlane size={16} /> Get a Quote on WhatsApp
          </a>

          <button
            onClick={onClose}
            className="mt-3 w-full text-gray-500 text-sm py-2 hover:text-gray-700 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Hosting Modal Component
const HostingModal = ({ packageData, onClose }: any) => {
  if (!packageData) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`p-6 ${packageData.highlight ? "bg-gradient-to-r from-amber-500 to-orange-500" : "bg-gradient-to-r from-sky-600 to-sky-700"} text-white`}
        >
          <h3 className="text-2xl font-bold">{packageData.title}</h3>
          <p className="text-xl font-semibold mt-2">
            {packageData.price}
            <span className="text-sm">/month</span>
          </p>
          <p className="text-sm opacity-90">Setup: {packageData.setup}</p>
        </div>

        <div className="p-6">
          <ul className="space-y-2 mb-6">
            {packageData.features.map((feature: string, idx: number) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="text-sky-500">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/27672033731?text=Hi!%20I'm%20interested%20in%20the%20${packageData.title}%20hosting%20package%20(${packageData.price}/month).%20Please%20send%20me%20more%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <FaPaperPlane size={16} /> Get Started on WhatsApp
          </a>

          <button
            onClick={onClose}
            className="mt-3 w-full text-gray-500 text-sm py-2 hover:text-gray-700 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isHoveringRing, setIsHoveringRing] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const hostingPackages = [
    {
      title: "Starter",
      price: "From R199",
      setup: "From R800",
      features: [
        "Business Website (1–3 Pages)",
        "Reliable Managed Hosting",
        "Free .co.za Domain",
        "1 Business Email Account",
        "SSL Security (HTTPS)",
        "Basic Support",
      ],
      highlight: false,
    },
    {
      title: "Business",
      price: "From R349",
      setup: "From R1200",
      features: [
        "Up to 5 Pages Website",
        "Premium High-Speed Hosting",
        "Free Domain + Setup",
        "Up to 5 Business Emails",
        "WhatsApp Integration",
        "Monthly Updates & Support",
        "Performance Optimization",
      ],
      highlight: true,
    },
    {
      title: "Premium",
      price: "From R599",
      setup: "From R2000",
      features: [
        "Unlimited Pages Website",
        "Cloud Hosting (High Performance)",
        "Free Domain + Advanced Setup",
        "Unlimited Business Emails",
        "SEO Optimization",
        "Priority Support",
        "Ongoing Performance Monitoring",
      ],
      highlight: false,
    },
  ];

  return (
    <>
      {/* HERO SECTION - Imported from Hero component */}
      <Hero />

      {/* BUS TOPOLOGY SERVICES SECTION - Animated Nodes */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-3">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We help businesses eliminate slow internet, improve network
              performance, and stay connected — so your operations never stop.
            </p>
          </motion.div>

          {/* BUS TOPOLOGY VISUALIZATION */}
          <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12 overflow-hidden">
            {/* Background Data Flow Animation */}
            <motion.div
              className="absolute inset-0 pointer-events-none overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
            >
              <motion.div
                className="absolute top-1/2 h-[2px] bg-gradient-to-r from-sky-400 to-transparent"
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ width: "100px", transform: "translateY(-50%)" }}
              />
              <motion.div
                className="absolute top-1/2 h-[2px] bg-gradient-to-r from-sky-400 to-transparent"
                animate={{ left: ["100%", "0%"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1,
                }}
                style={{ width: "100px", transform: "translateY(-50%)" }}
              />
            </motion.div>

            {/* Bus Topology Structure */}
            <div className="relative min-h-[260px] md:min-h-[320px] w-full">
              {/* Backbone Coaxial Cable (Main Bus) */}
              <div className="absolute top-1/2 left-0 right-0 h-3 bg-gradient-to-r from-slate-600 via-sky-500 to-slate-600 rounded-full shadow-md transform -translate-y-1/2">
                {/* Terminator Left */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-6 bg-red-600 rounded-l-full shadow-md"></div>
                {/* Terminator Right */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-6 bg-red-600 rounded-r-full shadow-md"></div>
              </div>

              {/* Animated Nodes with Droplines */}
              {services.map((service, index) => (
                <AnimatedBusNode
                  key={index}
                  service={service}
                  index={index}
                  totalNodes={services.length}
                  onClick={setSelectedService}
                  isHovered={hoveredNode === index}
                  onHoverStart={() => setHoveredNode(index)}
                  onHoverEnd={() => setHoveredNode(null)}
                />
              ))}
            </div>
          </div>

          {/* Service Tags Summary */}
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((service, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedService(service)}
                className="px-4 py-2 bg-white border border-sky-200 rounded-full text-sm text-sky-700 hover:bg-sky-50 hover:border-sky-400 transition-all"
              >
                {service.title}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* RING TOPOLOGY - HOSTING & WEBSITE PACKAGES with Orbiting Nodes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-sky-900 mb-3"
            >
              Hosting & Website Packages
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-xl mx-auto"
            >
             Professional website & hosting solutions designed for performance, reliability, and business growth.
            </motion.p>
          </div>

          {/* Ring Topology Visualization */}
          <div className="relative flex items-center justify-center py-8">
            <div className="relative w-[700px] h-[700px]">
              {/* Outer Static Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full border-4 border-sky-300 shadow-xl bg-gradient-to-br from-sky-50 to-white">
                {/* Decorative outer ring details */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-6 h-6 bg-sky-400 rounded-full shadow-lg"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 w-6 h-6 bg-sky-400 rounded-full shadow-lg"></div>
                <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 w-6 h-6 bg-sky-400 rounded-full shadow-lg"></div>
                <div className="absolute right-0 top-1/2 translate-x-3 -translate-y-1/2 w-6 h-6 bg-sky-400 rounded-full shadow-lg"></div>
              </div>

              {/* Inner Ring Guide - This is what triggers the pause on hover */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full cursor-pointer"
                onMouseEnter={() => setIsHoveringRing(true)}
                onMouseLeave={() => setIsHoveringRing(false)}
              >
                {/* Dashed ring visual */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-400/60 pointer-events-none">
                  {/* Decorative dots on inner ring */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-sky-500 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-sky-500 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-sky-500 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 w-2 h-2 bg-sky-500 rounded-full"></div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <FloatingTechIcons />

              {/* Central Hub with Tech Stack - Now independent from ring hover */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-gradient-to-br from-sky-700 to-sky-800 rounded-full flex flex-col items-center justify-center text-white shadow-2xl z-20"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0px 0px 20px rgba(0,0,0,0.3)",
                    "0px 0px 40px rgba(0,150,255,0.5)",
                    "0px 0px 20px rgba(0,0,0,0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaGlobe className="text-4xl" />
                <span className="text-base font-bold mt-2">Hosting Hub</span>
                <div className="flex gap-2 mt-2">
                  <FaPhp size={14} className="text-indigo-300" />
                  <FaNodeJs size={14} className="text-green-300" />
                  <FaPython size={14} className="text-blue-300" />
                </div>
                <span className="text-[9px] mt-1">PHP • Node.js • Python</span>
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-sky-400/50"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Orbiting Nodes - Hosting Packages */}
              {hostingPackages.map((pkg, index) => (
                <OrbitingNode
                  key={index}
                  title={pkg.title}
                  price={pkg.price}
                  setup={pkg.setup}
                  features={pkg.features}
                  highlight={pkg.highlight}
                  index={index}
                  totalNodes={hostingPackages.length}
                  onClick={setSelectedPackage}
                  isRotating={!isHoveringRing}
                  radius={180}
                />
              ))}
            </div>
          </div>

          {/* Custom & eCommerce Note */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Need a custom solution or e‑Commerce store?{" "}
              <a
                href="https://wa.me/27672033731"
                className="text-sky-600 font-medium hover:underline"
              >
                Contact us for a tailored quote
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE MODAL */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
        {selectedPackage && (
          <HostingModal
            packageData={selectedPackage}
            onClose={() => setSelectedPackage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}