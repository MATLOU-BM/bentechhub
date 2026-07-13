import { useState } from "react";
import FormModal from "../components/FormModalFormModal";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ShieldCheck,
  Wifi,
  Server,
  Headphones,
  ArrowRight,
} from "lucide-react";

// import introVideo from "@/assets/welcome.mp4";
// Replace this with the image I'll generate later
 import heroImage from "@/assets/hero.png";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isAcademyOpen, setAcademyOpen] = useState(false);
  const [isTalentOpen, setTalentOpen] = useState(false);

  let buttonText = "View Managed Services";
  let buttonAction = () => navigate("/services");

  if (location.pathname === "/academy") {
    buttonText = "Academy Application";
    buttonAction = () => setAcademyOpen(true);
  }

  if (location.pathname === "/talent") {
    buttonText = "Talent Application";
    buttonAction = () => setTalentOpen(true);
  }

  const handleSubmitAcademy = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Academy Application Submitted");
    setAcademyOpen(false);
  };

  const handleSubmitTalent = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Talent Application Submitted");
    setTalentOpen(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#071A33] min-h-screen flex items-center">

      {/* Background Video */}

     <img
              src={heroImage}
              alt="Enterprise Networking"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#071A33]/45 via-[#071A33]/50 to-[#071A33]/60" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-36 pb-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            {/* Small Heading */}

            <p className="uppercase tracking-widest text-green-400 font-semibold mb-5">
              Powering Smarter Businesses
            </p>

            {/* Heading */}

            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-white">

              Enterprise Networking,
              <br />

              CCTV &
              <br />

              Infrastructure
              <span className="text-green-400"> Solutions</span>

            </h1>

            {/* Description */}

            <p className="text-gray-300 text-lg mt-8 leading-8 max-w-xl">

              We design, deploy and manage secure,
              reliable and scalable ICT infrastructure
              solutions for businesses across South Africa.
              From enterprise networking and business WiFi
              to CCTV surveillance and managed IT services,
              we help organizations stay connected,
              protected and productive.

            </p>

            {/* Features */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

              <div className="flex flex-col items-center text-center">

                <ShieldCheck className="text-green-400 w-8 h-8 mb-2" />

                <h3 className="text-white font-semibold">
                  Secure
                </h3>

                <p className="text-sm text-gray-400">
                  Enterprise Protection
                </p>

              </div>

              <div className="flex flex-col items-center text-center">

                <Wifi className="text-green-400 w-8 h-8 mb-2" />

                <h3 className="text-white font-semibold">
                  Reliable
                </h3>

                <p className="text-sm text-gray-400">
                  Maximum Uptime
                </p>

              </div>

              <div className="flex flex-col items-center text-center">

                <Server className="text-green-400 w-8 h-8 mb-2" />

                <h3 className="text-white font-semibold">
                  Scalable
                </h3>

                <p className="text-sm text-gray-400">
                  Built for Growth
                </p>

              </div>

              <div className="flex flex-col items-center text-center">

                <Headphones className="text-green-400 w-8 h-8 mb-2" />

                <h3 className="text-white font-semibold">
                  Support
                </h3>

                <p className="text-sm text-gray-400">
                  24/7 Assistance
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-12">

              <button
                className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-md text-white font-semibold flex items-center gap-2"
                onClick={() => navigate("/contact")}
              >
                Request Infrastructure Assessment

                <ArrowRight size={18} />

              </button>

              <button
                onClick={buttonAction}
                className="border border-white/30 hover:bg-white hover:text-black transition px-8 py-4 rounded-md text-white font-semibold"
              >
                {buttonText}
              </button>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .9 }}
            className="relative hidden lg:flex justify-end"
          >

            {/* Glow */}

            <div className="absolute w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[130px]" />

           

          </motion.div>

        </div>

      </div>

            {/* ===========================
          Academy Modal
      ============================ */}

      <FormModal
        isOpen={isAcademyOpen}
        onClose={() => setAcademyOpen(false)}
        title="Academy Application"
        onSubmit={handleSubmitAcademy}
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="border p-3 rounded-lg"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="border p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="location"
          placeholder="Current Location"
          required
          className="border p-3 rounded-lg"
        />

        <textarea
          name="why"
          rows={4}
          placeholder="Why do you want to join the Academy?"
          required
          className="border p-3 rounded-lg"
        />

        <select
          name="itBackground"
          required
          className="border p-3 rounded-lg"
        >
          <option value="">Do you have an IT background?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <textarea
          name="itDetails"
          rows={3}
          placeholder="If yes, briefly describe your experience"
          className="border p-3 rounded-lg"
        />

        <select
          name="laptop"
          required
          className="border p-3 rounded-lg"
        >
          <option value="">Do you own a laptop?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <select
          name="commitment"
          required
          className="border p-3 rounded-lg"
        >
          <option value="">
            Are you committed to completing the programme?
          </option>

          <option>Yes</option>
          <option>No</option>
        </select>
      </FormModal>

      {/* ===========================
          Talent Modal
      ============================ */}

      <FormModal
        isOpen={isTalentOpen}
        onClose={() => setTalentOpen(false)}
        title="Talent Application"
        onSubmit={handleSubmitTalent}
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="border p-3 rounded-lg"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="border p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="location"
          placeholder="Current Location"
          required
          className="border p-3 rounded-lg"
        />

        <select
          name="training"
          required
          className="border p-3 rounded-lg"
        >
          <option value="">
            Completed BenTechHub / Cisco Training?
          </option>

          <option>Yes</option>
          <option>No</option>
        </select>

        <div className="border rounded-lg p-4">

          <p className="font-semibold mb-3">
            Select your skills
          </p>

          <div className="grid grid-cols-2 gap-3">

            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                value="Networking"
                name="skills"
              />
              Networking
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                value="Troubleshooting"
                name="skills"
              />
              Troubleshooting
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                value="WiFi"
                name="skills"
              />
              WiFi Installation
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                value="Cabling"
                name="skills"
              />
              Structured Cabling
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                value="CCTV"
                name="skills"
              />
              CCTV Installation
            </label>

            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                value="Fiber"
                name="skills"
              />
              Fibre Optics
            </label>

          </div>

        </div>

        <select
          name="fieldWork"
          required
          className="border p-3 rounded-lg"
        >
          <option value="">
            Available for field work?
          </option>

          <option>Yes</option>
          <option>No</option>
        </select>

        <select
          name="travel"
          required
          className="border p-3 rounded-lg"
        >
          <option value="">
            Can you travel across South Africa?
          </option>

          <option>Yes</option>
          <option>No</option>
        </select>

        <textarea
          name="why"
          rows={4}
          required
          placeholder="Why should we choose you?"
          className="border p-3 rounded-lg"
        />
      </FormModal>

    </section>
  );
}