import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket, FaHandshake, FaLightbulb, FaInfoCircle, FaUsers, FaGlobe, FaChartLine, FaQuoteLeft, FaGraduationCap } from "react-icons/fa";
import Hero from "@/components/Hero";

const values = [
  {
    icon: FaRocket,
    title: "Innovation",
    text: "Pushing boundaries with cutting-edge technology solutions that transform how businesses operate and grow.",
    fullDesc: "We constantly explore emerging technologies to bring innovative solutions that give our clients a competitive edge. From AI integration to advanced networking, we stay ahead of the curve.",
  },
  {
    icon: FaHandshake,
    title: "Empowerment",
    text: "Building capacity and developing African tech talent through education and mentorship.",
    fullDesc: "We believe in creating opportunities for aspiring IT professionals. Through our academy and mentorship programs, we're building the next generation of tech leaders across Africa.",
  },
  {
    icon: FaLightbulb,
    title: "Excellence",
    text: "Delivering world-class services with integrity, precision, and unwavering commitment.",
    fullDesc: "Quality is at the heart of everything we do. We ensure every solution we deliver meets the highest standards of reliability, security, and performance.",
  },
];

const stats = [
  { number: "0+", label: "Businesses Served", icon: FaUsers },
  { number: "0+", label: "Graduates Trained", icon: FaGraduationCap },
  { number: "0%", label: "Client Satisfaction", icon: FaChartLine },
  { number: "0+", label: "Years Experience", icon: FaGlobe },
];

// Circular Value Card Component
const ValueCircle = ({ value, index, onClick }: any) => {
  const Icon = value.icon;
  
  return (
    <motion.button
      onClick={() => onClick(value)}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col items-center gap-3 group"
    >
      {/* Circular Icon Container */}
      <div className="relative">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
          <Icon className="text-white text-3xl md:text-4xl mb-1" />
          <span className="text-white text-xs font-medium">Core Value</span>
        </div>
        {/* Pulse ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-sky-400"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
        />
      </div>
      
      {/* Title below */}
      <div className="text-center">
        <h3 className="font-bold text-sky-800 text-lg">{value.title}</h3>
        <p className="text-xs text-gray-500 max-w-[180px]">{value.text.substring(0, 50)}...</p>
      </div>
    </motion.button>
  );
};

// Stat Circle Component
const StatCircle = ({ stat, index }: any) => {
  const Icon = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2"
    >
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex flex-col items-center justify-center shadow-md">
        <Icon className="text-sky-600 text-2xl mb-1" />
        <span className="text-sky-700 font-bold text-xl">{stat.number}</span>
      </div>
      <p className="text-xs text-gray-600 font-medium text-center">{stat.label}</p>
    </motion.div>
  );
};

// Modal Component for Value Details
const ValueModal = ({ value, onClose }: any) => {
  if (!value) return null;
  const Icon = value.icon;

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
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 p-6 text-white text-center">
          <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3">
            <Icon className="text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-bold">{value.title}</h3>
          <p className="text-sky-100 text-sm mt-1">Core Value</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h4 className="font-semibold text-sky-900 mb-2 flex items-center gap-2">
              <FaQuoteLeft className="text-sky-500 text-sm" />
              What it means
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">{value.fullDesc}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-sky-900 mb-2">Why it matters</h4>
            <p className="text-sm text-gray-600">
              {value.title === "Innovation" && "Innovation drives progress. By embracing new technologies, we help businesses stay competitive and adapt to changing market demands."}
              {value.title === "Empowerment" && "Empowerment creates opportunity. By developing local talent, we're building a sustainable tech ecosystem that benefits everyone."}
              {value.title === "Excellence" && "Excellence builds trust. Our commitment to quality ensures that clients receive reliable solutions that perform consistently."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="mt-2 w-full text-gray-500 text-sm py-2 hover:text-gray-700 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

function About() {
  const [selectedValue, setSelectedValue] = useState<any>(null);

  return (
    <section className="bg-white">
      {/* HERO SECTION - Imported */}
      <Hero />

      {/* CONTENT */}
      <div className="container mx-auto px-6 mt-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-700 mb-4">
            BenTechHub is a technology hub providing networking solutions, IT services and cybersecurity innovation.
          </p>

          <p className="text-gray-600 mb-4">
            We specialize in enterprise networking, system support, and secure infrastructure for the digital world.
          </p>

          <p className="text-gray-600">
            Our mission is to empower businesses and learners with practical technology solutions and digital skills that drive innovation and growth across Africa.
          </p>
        </motion.div>
      </div>

      {/* STATS SECTION - Circular Stats */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900">
            Our Impact
          </h2>
          <p className="text-gray-500 text-sm mt-2">Making a difference across Africa</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatCircle key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>

      {/* VALUES SECTION - Circular Cards */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900">
            Our Values
          </h2>
          <p className="text-gray-500 text-sm mt-2">What drives us every day</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {values.map((value, i) => (
            <ValueCircle 
              key={i} 
              value={value} 
              index={i} 
              onClick={setSelectedValue}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-gray-400 mt-8 flex items-center justify-center gap-1"
        >
          <FaInfoCircle size={10} />
          Click on any value to learn more
        </motion.p>
      </div>

      {/* MISSION VISION SECTION */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-100"
          >
            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
              <FaRocket className="text-sky-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-sky-800 mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600">
              To deliver reliable, secure, and innovative technology solutions that empower businesses and individuals to thrive in the digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-100"
          >
            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
              <FaGlobe className="text-sky-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-sky-800 mb-2">Our Vision</h3>
            <p className="text-sm text-gray-600">
              To be Africa's leading technology hub, driving digital transformation and creating opportunities for the next generation of tech leaders.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Value Modal */}
      <AnimatePresence>
        {selectedValue && (
          <ValueModal
            value={selectedValue}
            onClose={() => setSelectedValue(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;