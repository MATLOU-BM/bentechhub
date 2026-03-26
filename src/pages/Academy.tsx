import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaNetworkWired,
  FaShieldAlt,
  FaLaptopCode,
  FaCloud,
  FaInfoCircle,
  FaServer,
  FaDatabase,
  FaCode,
  FaCloudUploadAlt,
  FaChartLine,
  FaGraduationCap,
  FaBookOpen,
  FaCertificate,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

const courses = [
  {
    icon: FaNetworkWired,
    title: "Networking Basics",
    description: "Routers, switches, IP addressing",
    link: "https://www.netacad.com/courses/networking-basics",
    fullDescription: "Master OSI model, IP addressing, subnetting, routing protocols, and basic network configuration.",
    duration: "8 weeks",
    level: "Beginner",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity",
    description: "Threats & protection tools",
    link: "https://www.netacad.com/courses/introduction-to-cybersecurity",
    fullDescription: "Learn about threats, vulnerabilities, security principles, and how to protect networks.",
    duration: "6 weeks",
    level: "Beginner",
  },
  {
    icon: FaLaptopCode,
    title: "Programming",
    description: "Python & JavaScript",
    link: "#",
    fullDescription: "Learn Python and JavaScript fundamentals including variables, loops, and automation.",
    duration: "10 weeks",
    level: "Intermediate",
  },
  {
    icon: FaCloud,
    title: "Cloud Fundamentals",
    description: "AWS & Azure basics",
    link: "#",
    fullDescription: "Introduction to cloud computing with AWS and Azure.",
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    icon: FaServer,
    title: "Network Security",
    description: "Firewalls & VPNs",
    link: "#",
    fullDescription: "Deep dive into firewalls, VPNs, intrusion detection, and enterprise security.",
    duration: "12 weeks",
    level: "Advanced",
  },
  {
    icon: FaDatabase,
    title: "Databases",
    description: "SQL & data management",
    link: "#",
    fullDescription: "Learn SQL, database design, and working with relational databases.",
    duration: "8 weeks",
    level: "Intermediate",
  },
];

// Circular Course Card Component
const CourseCircle = ({ course, index, onClick }: any) => {
  const Icon = course.icon;
  
  return (
    <motion.button
      onClick={() => onClick(course)}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="flex flex-col items-center gap-2 group"
    >
      {/* Circular Avatar */}
      <div className="relative">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 flex flex-col items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
          <Icon className="text-white text-2xl md:text-3xl mb-1" />
          <span className="text-white text-[9px] font-medium">{course.duration}</span>
        </div>
        {/* Network indicator light */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        {/* Level badge */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
          <span className={`text-[8px] px-1.5 py-0.5 rounded-full whitespace-nowrap ${
            course.level === "Beginner" ? "bg-green-500 text-white" :
            course.level === "Intermediate" ? "bg-yellow-500 text-white" :
            "bg-red-500 text-white"
          }`}>
            {course.level}
          </span>
        </div>
      </div>
      
      {/* Title below */}
      <div className="text-center mt-2">
        <p className="font-semibold text-gray-800 text-sm">{course.title}</p>
        <p className="text-[10px] text-gray-500">{course.description}</p>
      </div>
    </motion.button>
  );
};

// Tree Node Component for Networking Program
const TreeNode = ({ level, price, description, features, expanded, onToggle }: any) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <motion.button
          onClick={onToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-sky-600 to-sky-700 flex flex-col items-center justify-center shadow-lg"
        >
          <FaGraduationCap className="text-white text-xl md:text-2xl mb-1" />
          <span className="text-white font-bold text-xs md:text-sm">{level}</span>
          <span className="text-white text-[9px] md:text-[10px]">{price}</span>
        </motion.button>

        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-gray-900 text-white rounded-lg p-3 z-30 shadow-xl"
            >
              <p className="text-[10px] text-gray-300 mb-2">{description}</p>
              <ul className="text-[9px] space-y-1">
                {features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-1">
                    <span className="text-sky-400 mt-0.5">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="text-xs text-gray-600 mt-2 max-w-[120px]">{description}</p>

      <a
        href={`https://wa.me/27672033731?text=Hi!%20I'm%20interested%20in%20the%20${level}%20Networking%20Program%20(${price}).`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-xs bg-sky-500 text-white px-3 py-1 rounded-full hover:bg-sky-600 transition"
      >
        Enroll
      </a>
    </motion.div>
  );
};

// Modal Component for Course Details
const CourseModal = ({ course, onClose }: any) => {
  if (!course) return null;
  const Icon = course.icon;

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
          <h3 className="text-xl font-bold">{course.title}</h3>
          <div className="flex gap-2 justify-center mt-2">
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/20">{course.duration}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              course.level === "Beginner" ? "bg-green-500" :
              course.level === "Intermediate" ? "bg-yellow-500" :
              "bg-red-500"
            }`}>
              {course.level}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-gray-700 mb-4">{course.fullDescription}</p>
          
          <h4 className="font-semibold text-sky-900 mb-2 flex items-center gap-2">
            <FaBookOpen className="text-sky-500 text-sm" />
            What you'll learn
          </h4>
          <ul className="space-y-1 mb-4">
            {course.title === "Networking Basics" && (
              <>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ OSI Model & TCP/IP</li>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ IP Addressing & Subnetting</li>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ Routing & Switching Basics</li>
              </>
            )}
            {course.title === "Cybersecurity" && (
              <>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ Threat Detection & Analysis</li>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ Security Best Practices</li>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ Encryption & Authentication</li>
              </>
            )}
            {course.title === "Programming" && (
              <>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ Python Fundamentals</li>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ JavaScript Basics</li>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ Automation Scripts</li>
              </>
            )}
            {course.title === "Cloud Fundamentals" && (
              <>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ AWS Core Services</li>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ Azure Basics</li>
                <li className="text-xs text-gray-600 flex items-center gap-1">✓ Cloud Deployment Models</li>
              </>
            )}
          </ul>

          {course.link !== "#" ? (
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-sky-500 hover:bg-sky-600">
                View on Cisco Academy
              </Button>
            </a>
          ) : (
            <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed">
              Coming Soon
            </Button>
          )}

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

// ================= MAIN ACADEMY COMPONENT =================
export default function Academy() {
  const [expandedNodes, setExpandedNodes] = useState({
    beginner: false,
    intermediate: false,
    advanced: false,
  });
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const toggleNode = (node: keyof typeof expandedNodes) => {
    setExpandedNodes(prev => ({ ...prev, [node]: !prev[node] }));
  };

  const programFeatures = {
    beginner: [
      "Network fundamentals & OSI model",
      "IP addressing and subnetting",
      "Basic router/switch config",
      "Hands-on lab exercises",
      "Cisco Packet Tracer training",
    ],
    intermediate: [
      "Advanced routing (OSPF, EIGRP)",
      "VLANs and inter-VLAN routing",
      "Network security fundamentals",
      "Wireless networking basics",
      "Troubleshooting methodologies",
    ],
    advanced: [
      "Enterprise network design",
      "BGP and advanced routing",
      "Network automation with Python",
      "CCNA exam preparation",
      "Capstone project",
    ],
  };

  return (
    <section className="bg-white">
      {/* HERO SECTION - Imported from Hero component */}
      <Hero />

      {/* INTRO */}
      <div className="container mx-auto px-4 mt-12 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-gray-700 max-w-2xl mx-auto">
            Welcome to <strong>BenTechHub Academy</strong> — practical training, real-world skills, 
            and a structured path into Cisco-certified careers.
          </p>
        </motion.div>
      </div>

      {/* BEGINNER NETWORKING PROGRAM - TREE TOPOLOGY with Circles */}
    <div className="container mx-auto px-4 mb-16">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-2xl font-bold text-sky-900 mb-10 text-center"
  >
    Networking Program
  </motion.h2>

  {/* MOBILE: Vertical Layout */}
  <div className="flex flex-col items-center gap-10 md:hidden">
    <TreeNode
      level="Beginner"
      price="R200"
      description="Start your networking journey"
      features={programFeatures.beginner}
      expanded={expandedNodes.beginner}
      onToggle={() => toggleNode("beginner")}
    />

    <div className="w-1 h-10 bg-sky-400" />

    <TreeNode
      level="Intermediate"
      price="R300"
      description="Build on fundamentals"
      features={programFeatures.intermediate}
      expanded={expandedNodes.intermediate}
      onToggle={() => toggleNode("intermediate")}
    />

    <div className="w-1 h-10 bg-sky-400" />

    <TreeNode
      level="Advanced"
      price="R500"
      description="Master networking"
      features={programFeatures.advanced}
      expanded={expandedNodes.advanced}
      onToggle={() => toggleNode("advanced")}
    />
  </div>

  {/* DESKTOP: Tree Layout */}
  <div className="hidden md:flex items-center justify-center relative min-h-[350px]">
    {/* Center Node */}
    <TreeNode
      level="Beginner"
      price="R200"
      description="Start your networking journey"
      features={programFeatures.beginner}
      expanded={expandedNodes.beginner}
      onToggle={() => toggleNode("beginner")}
    />

    {/* Left */}
    <div className="absolute left-10 lg:left-20 top-1/2 -translate-y-1/2">
      <TreeNode
        level="Intermediate"
        price="R300"
        description="Build on fundamentals"
        features={programFeatures.intermediate}
        expanded={expandedNodes.intermediate}
        onToggle={() => toggleNode("intermediate")}
      />
    </div>

    {/* Right */}
    <div className="absolute right-10 lg:right-20 top-1/2 -translate-y-1/2">
      <TreeNode
        level="Advanced"
        price="R500"
        description="Master networking"
        features={programFeatures.advanced}
        expanded={expandedNodes.advanced}
        onToggle={() => toggleNode("advanced")}
      />
    </div>

    {/* Lines */}
    <div className="absolute w-32 lg:w-40 h-0.5 bg-sky-400 left-1/2 -translate-x-[120%] top-1/2" />
    <div className="absolute w-32 lg:w-40 h-0.5 bg-sky-400 right-1/2 translate-x-[120%] top-1/2" />
  </div>
</div>
      {/* CISCO CERTIFICATION COURSES - Mesh Topology with Circles */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-sky-900 mb-2"
          >
            Cisco Certification Courses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs text-gray-600 max-w-2xl mx-auto"
          >
            Official Cisco Networking Academy courses via <strong>NetDreamTeam Ltd (UK)</strong>.
            BenTechHub provides mentorship and support.
          </motion.p>
        </div>

        {/* Circular Course Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
          {courses.map((course, i) => (
            <CourseCircle
              key={i}
              index={i}
              course={course}
              onClick={setSelectedCourse}
            />
          ))}
        </div>

        <p className="text-center text-[10px] text-gray-400 mt-8 flex items-center justify-center gap-1">
          <FaInfoCircle size={10} />
          Click on any course to view full details
        </p>
      </div>

      {/* SUPPORT */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center border rounded-xl p-6 bg-gradient-to-br from-sky-50 to-white max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center mx-auto mb-3">
            <FaCertificate className="text-white text-2xl" />
          </div>
          <h2 className="text-xl font-bold text-sky-900 mb-2">
            Instructor Support
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Get help with labs, assignments, and Cisco coursework.
          </p>
          <p className="font-semibold mb-4 text-sky-700 text-sm">R200 – R500</p>
          <a href="https://wa.me/27672033731" target="_blank">
            <Button className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 px-6 text-sm">
              Get Support on WhatsApp
            </Button>
          </a>
        </motion.div>
      </div>

      {/* WHY */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-sky-900 mb-6"
        >
          Why Choose BenTechHub?
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
              <FaNetworkWired className="text-sky-600 text-xl" />
            </div>
            <p className="text-xs font-medium">Cisco Guidance</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
              <FaLaptopCode className="text-sky-600 text-xl" />
            </div>
            <p className="text-xs font-medium">Hands-on Training</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
              <FaChartLine className="text-sky-600 text-xl" />
            </div>
            <p className="text-xs font-medium">Affordable</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
              <FaCloudUploadAlt className="text-sky-600 text-xl" />
            </div>
            <p className="text-xs font-medium">Career Path</p>
          </motion.div>
        </div>
      </div>

      {/* Course Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}