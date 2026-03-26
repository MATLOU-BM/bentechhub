import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTiktok,
} from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      window.location.href = `mailto:info@bentechhub.co.za?subject=Newsletter Subscription&body=Please subscribe me: ${email}`;
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Subscription failed");
    } finally {
      setLoading(false);
    }
  };

  return (
<footer className="relative text-black backdrop-blur-xl bg-white/70 border-t border-black/10 overflow-hidden">

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-400/10 pointer-events-none" />

  <div className="container mx-auto px-6 py-16 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

      {/* BRAND */}
      <div className="md:col-span-2">
        <h3 className="text-2xl font-bold mb-4">
          BenTech<span className="text-sky-500">Hub</span>
        </h3>

        <h4 className="text-lg font-semibold text-sky-500 mb-4">
          Strategic Partnerships
        </h4>

        <div className="space-y-4">
          <div>
            <h5 className="text-sm font-semibold text-black">
              Strategic Support
            </h5>
            <p className="text-sm text-black/60 mt-1">
              BenTechHub acknowledges the strategic support of NetDreamTeam Ltd.
            </p>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-black">
              Global Collaboration
            </h5>
            <p className="text-sm text-black/60 mt-1">
              We collaborate globally to build innovation and career opportunities.
            </p>
          </div>
        </div>

        <p className="text-xs text-black/40 mt-6">
          Founded by{" "}
          <span className="text-black font-medium">
            Benediction Matlou
          </span>
        </p>

        <div className="flex items-center gap-2 text-sm text-black/60 mt-3">
          <FaMapMarkerAlt className="text-sky-500" />
          South Africa • Global Reach
        </div>
      </div>

      {/* NAVIGATION */}
      <div>
        <h4 className="text-sm font-semibold uppercase mb-4 text-black/50">
          Navigation
        </h4>

        <div className="space-y-2">
          {["Home", "Services", "Academy", "Talent", "About", "Contact"].map((page) => (
            <Link
              key={page}
              to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
              className="block text-sm text-black/60 hover:text-sky-500 transition"
            >
              {page}
            </Link>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div>
        <h4 className="text-sm font-semibold uppercase mb-4 text-black/50">
          Contact
        </h4>

        <div className="space-y-3 text-sm">
          <a
            href="mailto:info@bentechhub.co.za"
            className="flex items-center gap-2 text-black/60 hover:text-sky-500 transition"
          >
            <FaEnvelope className="text-xs text-sky-500" />
            info@bentechhub.co.za
          </a>

          <a
            href="mailto:support@bentechhub.co.za"
            className="flex items-center gap-2 text-black/60 hover:text-sky-500 transition"
          >
            <FaEnvelope className="text-xs text-sky-500" />
            support@bentechhub.co.za
          </a>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div>
        <h4 className="text-sm font-semibold uppercase mb-4 text-black/50">
          Stay Connected
        </h4>

        <div className="flex gap-2 mb-4">
          <Input
            className="bg-white/50 border-black/20 text-black placeholder:text-black/40"
            placeholder="Your email"
          />
          <Button className="bg-sky-500 hover:bg-sky-600 text-white">
            Join
          </Button>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/benediction-matlou"
            target="_blank"
            className="w-10 h-10 rounded-xl bg-white/40 border border-black/10 flex items-center justify-center hover:bg-sky-500/30 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.facebook.com/BenTechHub"
            target="_blank"
            className="w-10 h-10 rounded-xl bg-white/40 border border-black/10 flex items-center justify-center hover:bg-sky-500/30 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.tiktok.com/@bentechhub?is_from_webapp=1&sender_device=pc"
            target="_blank"
            className="w-10 h-10 rounded-xl bg-white/40 border border-black/10 flex items-center justify-center hover:bg-sky-500/30 transition"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>

    {/* BOTTOM */}
    <div className="border-t border-black/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-xs text-black/40 text-center md:text-left">
        <p>© 2026 BenTechHub. All rights reserved.</p>
        <p className="mt-1">
          Registered as K2026222882 (Pty) Ltd • B-BBEE Certified
        </p>
        <p className="mt-2 text-black/60">
          Developed by <span className="text-sky-500 font-medium">Media21</span>
        </p>
      </div>

      <div className="flex gap-4 text-xs text-black/40">
        <span className="hover:text-black cursor-pointer">Privacy Policy</span>
        <span className="hover:text-black cursor-pointer">Terms of Service</span>
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer;