import { useState } from "react";
import FormModal from "../components/FormModalFormModal"; 
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import introVideo from "@/assets/welcome.mp4";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  // Form modal states
  const [isAcademyOpen, setAcademyOpen] = useState(false);
  const [isTalentOpen, setTalentOpen] = useState(false);

  let buttonText = "Explore Services";
  let buttonAction = () => navigate("/services");

  if (location.pathname === "/academy") {
    buttonText = "Academy Application";
    buttonAction = () => setAcademyOpen(true); // open modal
  }

  if (location.pathname === "/talent") {
    buttonText = "Talent Application";
    buttonAction = () => setTalentOpen(true); // open modal
  }

  // Handle submit (replace with emailjs or Google Forms API)
  const handleSubmitAcademy = (e) => {
    e.preventDefault();
    alert("Academy form submitted!"); 
    setAcademyOpen(false);
  };

  const handleSubmitTalent = (e) => {
    e.preventDefault();
    alert("Talent form submitted!"); 
    setTalentOpen(false);
  };

  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center overflow-hidden">
      <video src={introVideo} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div className="flex flex-col items-start gap-6" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          
          <motion.button
            onClick={buttonAction}
            className="px-8 py-3 rounded-xl text-white text-base font-medium bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-sky-500/30 hover:border-sky-400/40 transition-all duration-300 hover:scale-105"
          >
            {buttonText}
          </motion.button>

          <motion.a href="https://chat.whatsapp.com/DetiTe2ZWDU3WigYD5sTr1" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 rounded-xl text-white text-base font-medium bg-white/5 backdrop-blur-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              Join Community
            </button>
          </motion.a>
        </motion.div>
      </div>

      {/* Academy Modal */}
      <FormModal isOpen={isAcademyOpen} onClose={() => setAcademyOpen(false)} title="Academy Application" onSubmit={handleSubmitAcademy}>
        <input type="text" name="fullName" placeholder="Full Name" required className="border p-2 rounded"/>
        <input type="tel" name="phone" placeholder="Phone Number" required className="border p-2 rounded"/>
        <input type="email" name="email" placeholder="Email" required className="border p-2 rounded"/>
        <input type="text" name="location" placeholder="Location" required className="border p-2 rounded"/>
        <textarea name="why" placeholder="Why do you want to join?" required className="border p-2 rounded"/>
        <select name="itBackground" required className="border p-2 rounded">
          <option value="">Do you have IT background?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <textarea name="itDetails" placeholder="If yes, explain" className="border p-2 rounded"/>
        <select name="laptop" required className="border p-2 rounded">
          <option value="">Do you have a laptop/computer?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <select name="commitment" required className="border p-2 rounded">
          <option value="">Are you committed to completing the training?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </FormModal>

      {/* Talent Modal */}
      <FormModal isOpen={isTalentOpen} onClose={() => setTalentOpen(false)} title="Talent Application" onSubmit={handleSubmitTalent}>
        <input type="text" name="fullName" placeholder="Full Name" required className="border p-2 rounded"/>
        <input type="tel" name="phone" placeholder="Phone Number" required className="border p-2 rounded"/>
        <input type="email" name="email" placeholder="Email" required className="border p-2 rounded"/>
        <input type="text" name="location" placeholder="Location" required className="border p-2 rounded"/>
        <select name="training" required className="border p-2 rounded">
          <option value="">Completed BenTechHub / Cisco training?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <div className="flex flex-col gap-2 border p-2 rounded">
          <label>Skills (check all that apply):</label>
          <label><input type="checkbox" name="skills" value="Networking"/> Networking</label>
          <label><input type="checkbox" name="skills" value="Troubleshooting"/> Troubleshooting</label>
          <label><input type="checkbox" name="skills" value="WiFi setup"/> WiFi setup</label>
          <label><input type="checkbox" name="skills" value="Cabling"/> Cabling</label>
        </div>
        <select name="fieldWork" required className="border p-2 rounded">
          <option value="">Are you available for field work?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <select name="travel" required className="border p-2 rounded">
          <option value="">Can you travel?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <textarea name="whySelect" placeholder="Why should we select you?" required className="border p-2 rounded"/>
      </FormModal>
    </section>
  );
}