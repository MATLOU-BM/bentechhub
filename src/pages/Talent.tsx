import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaWhatsapp,
  FaLinkedin,
  FaStar,
  FaNetworkWired,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";
import Hero from "@/components/Hero";

// Talent data
const talent = [
  {
    name: "Ltebatso",
    email: "28.ltebatso11@gmail.com",
    role: "BenTechHub Graduate",
    bio: "Completed Cybersecurity and Networking Basics courses. Passionate about network security and infrastructure.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
  {
    name: "Mmapitsi",
    email: "29.Mmapitsi57@gmail.com",
    role: "Cybersecurity Student",
    bio: "Enrolled in Cybersecurity course. Focused on threat detection and security best practices.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
    ],
    experience: "Student",
    availability: "Part-time",
  },
  {
    name: "Wissem Kaouss",
    email: "30.wissem.kaouss@efrei.net",
    role: "Cybersecurity Graduate",
    bio: "Completed Cybersecurity course. Skilled in security analysis and risk assessment.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
  {
    name: "Aicha Dao",
    email: "31.daoaicha179@gmail.com",
    role: "BenTechHub Graduate",
    bio: "Completed both Cybersecurity and Networking Basics courses. Strong foundation in IT security.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
  {
    name: "Deadmurto",
    email: "32.deadmurto@gmail.com",
    role: "BenTechHub Graduate",
    bio: "Completed both Cybersecurity and Networking Basics courses. Interested in network administration.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
  {
    name: "Karan Mahrani",
    email: "33.karanmahrani2004@gmail.com",
    role: "Networking Student",
    bio: "Enrolled in Networking Basics course. Focused on network configuration and troubleshooting.",
    skills: [
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "Student",
    availability: "Part-time",
  },
  {
    name: "Berlin Aditlakala",
    email: "34.berlinaditlakala@gmail.com",
    role: "BenTechHub Graduate",
    bio: "Completed both Cybersecurity and Networking Basics courses. Ready for entry-level IT roles.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
  {
    name: "Mpholeon",
    email: "35.Mpholeon47@gmail.com",
    role: "Networking Graduate",
    bio: "Completed Networking Basics course. Skilled in network setup and maintenance.",
    skills: [
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
  {
    name: "Simphiwe Mbatha",
    email: "36.simphiwembatha020@gmail.com",
    role: "BenTechHub Graduate",
    bio: "Completed both Cybersecurity and Networking Basics courses. Strong problem-solving skills.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
  {
    name: "Mamadou Max Junior",
    email: "37.mamadoumaxjunior@gmail.com",
    role: "Cybersecurity & Networking Student",
    bio: "Completed Cybersecurity and enrolled in Networking Basics. Eager to learn and grow.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "Student",
    availability: "Part-time",
  },
  {
    name: "Rone Wavhulahani",
    email: "38.Ronewavhulahani123@gmail.com",
    role: "Networking Graduate",
    bio: "Completed Networking Basics course. Passionate about network infrastructure.",
    skills: [
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
  {
    name: "Mamphela Mogashoa",
    email: "39.mamphelamogashoa@gmail.com",
    role: "BenTechHub Graduate",
    bio: "Completed both Cybersecurity and Networking Basics courses. Ready to contribute.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
  {
    name: "Katleyn Qandela",
    email: "40.Katleynqandela@gmail.com",
    role: "BenTechHub Graduate",
    bio: "Completed both Cybersecurity and Networking Basics courses. Detail-oriented and dedicated.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
  {
    name: "Khanyisa Shikwambana",
    email: "41.khanyisashikwambana@outlook.com",
    role: "Cybersecurity Graduate",
    bio: "Completed Cybersecurity course. Interested in security operations.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
  {
    name: "Baloyi Joseph",
    email: "42.Baloyijoseph722@gmail.com",
    role: "BenTechHub Graduate",
    bio: "Completed both Cybersecurity and Networking Basics courses. Ready for IT opportunities.",
    skills: [
      { label: "Cybersecurity", icon: FaShieldAlt },
      { label: "Networking Basics", icon: FaNetworkWired },
    ],
    experience: "0-1 years",
    availability: "Immediate",
  },
];

// Circular Profile Card Component
const ProfileCircle = ({ talent: t, onClick }: any) => {
  // Get initials for avatar
  const initials = t.name.split(" ").map((n: string) => n[0]).join("").toUpperCase();

  return (
    <motion.button
      onClick={() => onClick(t)}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col items-center gap-2 group"
    >
      {/* Circular Avatar */}
      <div className="relative">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
          <span className="text-white text-xl md:text-2xl font-bold">
            {initials}
          </span>
        </div>
        {/* Network indicator light */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      
      {/* Name below */}
      <div className="text-center">
        <p className="font-semibold text-gray-800 text-sm md:text-base">{t.name}</p>
        <p className="text-xs text-gray-500">{t.role}</p>
        <div className="flex gap-1 justify-center mt-1">
          {t.skills.slice(0, 2).map((skill: any, idx: number) => (
            <span key={idx} className="text-[8px] px-1.5 py-0.5 rounded-full bg-sky-100 text-sky-600">
              {skill.label.split(" ")[0]}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
};

// Modal Component for Talent Details
const TalentModal = ({ talent: t, onClose }: any) => {
  if (!t) return null;

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
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 p-6 text-white text-center relative">
          <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3">
            <span className="text-white text-3xl font-bold">
              {t.name.split(" ").map((n: string) => n[0]).join("").toUpperCase()}
            </span>
          </div>
          <h3 className="text-xl font-bold">{t.name}</h3>
          <p className="text-sky-100 text-sm">{t.role}</p>
          
          {/* Availability badge */}
          <div className="absolute top-4 right-4">
            <span className={`text-xs px-2 py-1 rounded-full ${
              t.availability === "Immediate" 
                ? "bg-green-500 text-white" 
                : "bg-yellow-500 text-white"
            }`}>
              {t.availability}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Bio */}
          <div className="mb-4">
            <h4 className="font-semibold text-sky-900 mb-2 flex items-center gap-2">
              <FaUserCircle className="text-sky-500" />
              About
            </h4>
            <p className="text-sm text-gray-600">{t.bio}</p>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h4 className="font-semibold text-sky-900 mb-2 flex items-center gap-2">
              <FaGraduationCap className="text-sky-500" />
              Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {t.skills.map((skill: any, idx: number) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-sky-100 text-sky-700 flex items-center gap-1"
                >
                  <skill.icon size={12} />
                  {skill.label}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <h4 className="font-semibold text-sky-900 mb-2 flex items-center gap-2">
              <FaBriefcase className="text-sky-500" />
              Experience Level
            </h4>
            <p className="text-sm text-gray-600">{t.experience}</p>
          </div>

          {/* Contact Buttons */}
          <div className="space-y-2 mt-4">
            <a
              href={`mailto:${t.email}`}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <FaEnvelope size={14} /> {t.email}
            </a>
            <a
              href={`https://wa.me/${t.email.split("@")[0]}?text=Hi!%20I'm%20interested%20in%20your%20profile%20from%20BenTechHub%20Talent.%20Please%20contact%20me.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <FaWhatsapp size={16} /> Contact on WhatsApp
            </a>
          </div>

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

function Talent() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState<any>(null);

  const firstRow = talent.slice(0, Math.ceil(talent.length / 2));
  const secondRow = talent.slice(Math.ceil(talent.length / 2));

  return (
    <section className="bg-white">
      {/* HERO SECTION - Imported */}
      <Hero />

      {/* INTRO */}
      <div className="container mx-auto px-6 mt-12 mb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto"
        >
          Our graduates are equipped with <strong>real-world skills</strong> in
          networking, cybersecurity, and cloud technologies — ready to
          contribute from day one.
        </motion.p>
      </div>

      {/* SCROLL PREVIEW - Circular Profiles */}
      {!showAll && (
        <div className="mb-20 space-y-8 overflow-hidden">
          {/* First Row */}
          <motion.div
            className="flex gap-8 items-center justify-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{ width: "fit-content" }}
          >
            {[...firstRow, ...firstRow].map((t, i) => (
              <ProfileCircle key={i} talent={t} onClick={setSelectedTalent} />
            ))}
          </motion.div>

          {/* Second Row */}
          <motion.div
            className="flex gap-8 items-center justify-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{ width: "fit-content" }}
          >
            {[...secondRow, ...secondRow].map((t, i) => (
              <ProfileCircle key={i} talent={t} onClick={setSelectedTalent} />
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button onClick={() => setShowAll(true)} className="bg-sky-500 hover:bg-sky-600">
              View All Talent
            </Button>
          </div>
        </div>
      )}

      {/* FULL GRID - Circular Profiles */}
      {showAll && (
        <div className="container mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
            {talent.map((t, i) => (
              <ProfileCircle key={i} talent={t} onClick={setSelectedTalent} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button onClick={() => setShowAll(false)} className="bg-sky-500 hover:bg-sky-600">
              Back to Preview
            </Button>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center border rounded-3xl p-10 bg-gradient-to-br from-sky-50 to-white"
        >
          <h2 className="text-2xl font-bold text-sky-900 mb-4">
            Are you a recruiter?
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Access a pool of trained networking, cloud and cybersecurity professionals ready to work.
          </p>
          <a href="https://wa.me/27672033731" target="_blank">
            <Button className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800">
              Contact BenTechHub
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Talent Modal */}
      <AnimatePresence>
        {selectedTalent && (
          <TalentModal
            talent={selectedTalent}
            onClose={() => setSelectedTalent(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Talent;