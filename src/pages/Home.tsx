import { motion } from "framer-motion";
import {
  FaServer,
  FaGraduationCap,
  FaUsers,
  FaGlobe,
  FaWhatsapp,
  FaShoppingCart,
  FaStar,
  FaInfoCircle,
  FaWifi,
  FaNetworkWired,
  FaBolt,
  FaBuilding,
  FaHeadset,
} from "react-icons/fa";
import Hero from "@/components/Hero";

// ================= TYPE DEFINITIONS =================
interface NodeProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

interface StarNodeProps {
  title: string;
  price: string;
  setup?: string;
  description: string;
  features: string[];
  position: "top" | "top-right" | "right" | "bottom-right" | "bottom" | "bottom-left" | "left" | "top-left";
  popular?: boolean;
  isEcommerce?: boolean;
}

interface LineProps {
  angle: number;
  length?: string;
  className?: string;
}

// ================= COMPONENTS =================
const Node = ({ icon, title, text }: NodeProps) => (
  <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md border border-sky-100 hover:shadow-lg transition-all duration-300">
    <div className="text-sky-600 text-xl">{icon}</div>
    <div>
      <h3 className="text-sm font-bold text-sky-900">{title}</h3>
      <p className="text-xs text-gray-500">{text}</p>
    </div>
  </div>
);

const StarNode = ({
  title,
  price,
  setup,
  description,
  features,
  position,
  popular = false,
  isEcommerce = false,
}: StarNodeProps) => {
  const positionClasses = {
    top: "top-[-60px] left-1/3 -translate-x-1/2",
    "top-right": "top-[8%] right-[6%]",
    right: "right-[-60px] top-1/2 -translate-y-1/2",
    "bottom-right": "bottom-[8%] right-[8%]",
    bottom: "bottom-[-60px] left-1/2 -translate-x-1/2",
    "bottom-left": "bottom-[8%] left-[8%]",
    left: "left-[-60px] top-1/2 -translate-y-1/2",
    "top-left": "top-[8%] left-[2%]",
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} z-20 w-64`}
      initial={{ opacity: 0, scale: 0.7, y: 20, x: 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className={`bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
          popular
            ? "border-amber-400 ring-2 ring-amber-200"
            : isEcommerce
            ? "border-emerald-300"
            : "border-sky-200"
        } p-4 relative overflow-hidden`}
      >
        {popular && (
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg whitespace-nowrap z-10">
            <FaStar size={10} /> MOST POPULAR
          </div>
        )}
        {isEcommerce && (
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg whitespace-nowrap z-10">
            <FaShoppingCart size={10} /> COMING SOON
          </div>
        )}

        <div className="text-center mt-1">
          <h3 className="font-bold text-sky-800 text-lg">{title}</h3>
          <div className="mt-1">
            <span className="text-2xl font-black text-sky-700">{price}</span>
            {price !== "Tailored" && price !== "Coming Soon" && price !== "Quote Based" && (
              <span className="text-xs text-gray-500">
                {price.includes("/month") ? "" : price.includes("From") ? "" : "/project"}
              </span>
            )}
          </div>
          {setup && setup !== "Coming Soon" && (
            <p className="text-xs text-gray-500 mt-0.5 leading-tight">
              <span className="font-medium">Includes:</span> {setup}
            </p>
          )}
          <p className="text-xs text-gray-600 mt-2 border-t border-gray-100 pt-2">
            {description}
          </p>
        </div>

        <ul className="text-xs text-gray-600 mt-2 space-y-1">
          {features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span className="text-sky-500 mt-0.5 flex-shrink-0">✓</span>
              <span className="leading-tight">{feat}</span>
            </li>
          ))}
          {features.length > 3 && (
            <li className="text-sky-500 text-[10px] text-center mt-1">
              + {features.length - 3} more features
            </li>
          )}
        </ul>

        {/* CTA Button */}
        {!isEcommerce && price !== "Tailored" && price !== "Quote Based" && (
          <a
            href={`https://wa.me/27672033731?text=Hi!%20I'm%20interested%20in%20${title}%20(${price}).%20Please%20send%20me%20more%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white text-sm font-semibold py-2 rounded-xl transition-all duration-200"
          >
            <FaWhatsapp size={14} /> Get Started
          </a>
        )}
        {price === "Tailored" && (
          <a
            href="https://wa.me/27672033731?text=Hi!%20I'm%20interested%20in%20a%20custom%20solution.%20Please%20contact%20me%20to%20discuss%20my%20requirements."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-semibold py-2 rounded-xl transition-all duration-200"
          >
            <FaWhatsapp size={14} /> Request Quote
          </a>
        )}
        {price === "Quote Based" && (
          <a
            href="https://wa.me/27672033731?text=Hi!%20I'm%20interested%20in%20${title}.%20Please%20provide%20a%20quote%20for%20my%20business%20requirements."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-semibold py-2 rounded-xl transition-all duration-200"
          >
            <FaWhatsapp size={14} /> Request Quote
          </a>
        )}
        {isEcommerce && (
          <button
            disabled
            className="mt-3 w-full bg-gray-200 text-gray-500 text-sm font-semibold py-2 rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
          >
            <FaShoppingCart size={14} /> Coming Soon
          </button>
        )}
      </div>
    </motion.div>
  );
};

const RadialLine = ({ angle, length = "200px", className = "" }: LineProps) => {
  return (
    <div
      className={`absolute h-[2px] bg-gradient-to-r from-sky-400 via-sky-300 to-transparent origin-left opacity-60 ${className}`}
      style={{
        top: "50%",
        left: "50%",
        width: length,
        transform: `rotate(${angle}deg) translateY(-50%)`,
        transformOrigin: "0% 50%",
      }}
    />
  );
};

// ================= MAIN HOME COMPONENT =================
export default function Home() {
  // Updated service packages based on new requirements
  const packages = {
    networkFix: {
      title: "Network Performance Fix",
      price: "From R500",
      setup: "Basic: R500–R900 | Advanced: R1000–R1500",
      description: "Fix slow internet, unstable connections, and poor network performance.",
      features: [
        "Fix slow speeds & random disconnections",
        "Identify bad configurations and overloaded networks",
        "Optimize entire network for speed and reliability",
        "Eliminate connectivity issues",
        "Faster internet, smoother operations",
      ],
      position: "top" as const,
    },
    wifiCoverage: {
      title: "WiFi Coverage Solutions",
      price: "From R1500",
      setup: "Small: R1500–R2500 | Medium: R2500–R4000 | Large: R4000–R8000+",
      description: "Eliminate dead zones and improve signal across your entire business.",
      features: [
        "Full coverage with no dead zones",
        "Strong, consistent signal throughout",
        "Designed for multiple users",
        "Professional access point installation",
        "Reliable WiFi everywhere in your business",
      ],
      position: "top-left" as const,
      popular: true,
    },
    businessContinuity: {
      title: "Business Continuity",
      price: "From R800",
      setup: "UPS: R800–R2000 | LTE: R1500–R3500 | Failover: R3000–R6000+",
      description: "Keep your business online during outages and loadshedding.",
      features: [
        "Router + ONT UPS power backup",
        "LTE backup internet setup",
        "Automatic failover systems",
        "Stay online when others go offline",
        "Prevent costly downtime",
      ],
      position: "bottom-right" as const,
    },
    networkSetup: {
      title: "Business Network Setup",
      price: "From R3000",
      setup: "Basic: R3000–R5000 | Advanced: R5000–R10,000+ | Custom: Quoted",
      description: "Professional network installation for offices and business environments.",
      features: [
        "Office & warehouse network installations",
        "Structured and scalable systems",
        "Router & access point installation",
        "Clean, professional infrastructure",
        "Stable network built for growth",
      ],
      position: "bottom-left" as const,
    },
    managedIT: {
      title: "Managed IT Support",
      price: "From R999/month",
      setup: "Basic: R999 | Standard: R1500–R2500 | Premium: R3000–R6000+",
      description: "Ongoing support and maintenance for your business.",
      features: [
        "Monthly support and maintenance",
        "Ongoing monitoring and troubleshooting",
        "Fast support when issues arise",
        "Preventative maintenance",
        "Peace of mind — your IT is handled",
      ],
      position: "top-right" as const,
    },
  };

  return (
    <>
      <Hero />

      {/* ================= ECOSYSTEM SECTION ================= */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="text-center mb-12 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-sky-900 mb-2"
          >
            BenTechHub Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 max-w-md mx-auto text-sm"
          >
            We don't just build tech — we build people, ideas, and real
            opportunities across Africa.
          </motion.p>
        </div>

        <div className="relative flex items-center justify-center min-h-[460px] md:min-h-[520px]">
          {/* CENTER HUB */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-28 h-28 bg-gradient-to-br from-sky-700 to-sky-800 text-white flex flex-col items-center justify-center rounded-full z-10 shadow-xl font-bold text-xl"
          >
            HUB
            <span className="text-[8px] font-normal opacity-80">innovation</span>
          </motion.div>

          {/* OUTER DASHED CIRCLE */}
          <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] border border-dashed border-sky-300 rounded-full animate-pulse" />

          {/* ECOSYSTEM NODES */}
          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 md:-translate-y-12"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Node icon={<FaNetworkWired />} title="Network Services" text="Performance & reliability" />
            </motion.div>

            <motion.div
              className="absolute right-0 top-1/2 translate-x-10 md:translate-x-12 -translate-y-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Node icon={<FaGraduationCap />} title="Skills Academy" text="Hands-on IT training" />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10 md:translate-y-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Node icon={<FaUsers />} title="Talent Platform" text="Connecting talent to opportunities" />
            </motion.div>

            <motion.div
              className="absolute left-0 top-1/2 -translate-x-10 md:-translate-x-12 -translate-y-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Node icon={<FaGlobe />} title="Strategic Initiatives" text="Business solutions" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION - STAR TOPOLOGY ================= */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-10 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        </div>

        <div className="text-center mb-16 px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-sky-900 mb-3"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-xl mx-auto text-base"
          >
            We help businesses eliminate slow internet, improve network performance, and stay connected — so your operations never stop.
          </motion.p>
        </div>

        {/* STAR NETWORK VISUALIZATION */}
        <div className="relative flex items-center justify-center min-h-[900px] lg:min-h-[1000px] max-w-7xl mx-auto">
          {/* CENTRAL START NODE */}
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-sky-600 to-sky-700 text-white flex flex-col items-center justify-center rounded-full z-30 shadow-2xl border-4 border-white"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-black tracking-wide">IT</span>
            <span className="text-[9px] opacity-90">Solutions Hub</span>
            <a
              href="https://wa.me/27672033731?text=Hi!%20I%20need%20help%20with%20my%20business%20IT%20and%20network.%20Please%20assist%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[8px] mt-1 underline hover:no-underline bg-white/20 px-2 py-0.5 rounded-full transition"
            >
              Talk to expert →
            </a>
          </motion.div>

          {/* RADIAL CONNECTION LINES - Full star topology */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <RadialLine angle={0} length="280px" />
            <RadialLine angle={45} length="320px" />
            <RadialLine angle={90} length="280px" />
            <RadialLine angle={135} length="320px" />
            <RadialLine angle={180} length="280px" />
            <RadialLine angle={225} length="320px" />
            <RadialLine angle={270} length="280px" />
            <RadialLine angle={315} length="320px" />
          </div>

          {/* Outer ring for positioning reference */}
          <div className="absolute w-[680px] h-[680px] lg:w-[800px] lg:h-[800px] rounded-full border border-sky-200/50 pointer-events-none" />

          {/* SERVICE NODES - Properly spaced around the star */}
          <div className="absolute w-[750px] h-[750px] lg:w-[880px] lg:h-[880px]">
            {/* Network Performance Fix - Top */}
            <StarNode
              title={packages.networkFix.title}
              price={packages.networkFix.price}
              setup={packages.networkFix.setup}
              description={packages.networkFix.description}
              features={packages.networkFix.features}
              position={packages.networkFix.position}
            />
            
            {/* WiFi Coverage Solutions - Top Left */}
            <StarNode
              title={packages.wifiCoverage.title}
              price={packages.wifiCoverage.price}
              setup={packages.wifiCoverage.setup}
              description={packages.wifiCoverage.description}
              features={packages.wifiCoverage.features}
              position={packages.wifiCoverage.position}
              popular={packages.wifiCoverage.popular}
            />
            
            {/* Managed IT Support - Top Right */}
            <StarNode
              title={packages.managedIT.title}
              price={packages.managedIT.price}
              setup={packages.managedIT.setup}
              description={packages.managedIT.description}
              features={packages.managedIT.features}
              position={packages.managedIT.position}
            />
            
            {/* Business Continuity Solutions - Bottom Right */}
            <StarNode
              title={packages.businessContinuity.title}
              price={packages.businessContinuity.price}
              setup={packages.businessContinuity.setup}
              description={packages.businessContinuity.description}
              features={packages.businessContinuity.features}
              position={packages.businessContinuity.position}
            />
            
            {/* Business Network Setup - Bottom Left */}
            <StarNode
              title={packages.networkSetup.title}
              price={packages.networkSetup.price}
              setup={packages.networkSetup.setup}
              description={packages.networkSetup.description}
              features={packages.networkSetup.features}
              position={packages.networkSetup.position}
            />
          </div>
        </div>

        {/* Quick contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-3">Need help choosing the right solution?</p>
          <a
            href="https://wa.me/27672033731?text=Hi!%20I%20need%20help%20with%20my%20business%20IT%20and%20network.%20Please%20assist%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={18} />
            Book a Network Assessment Today
          </a>
          <p className="text-xs text-gray-400 mt-3">
            Get a Free Network Check — Find out how to improve your internet performance
          </p>
        </div>

        {/* Additional info note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
            <FaInfoCircle size={12} />
            Final pricing may vary depending on business size, equipment, and complexity
          </p>
        </div>
      </section>
    </>
  );
}