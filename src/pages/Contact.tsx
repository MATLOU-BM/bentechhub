import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaClock, FaBuilding, FaUserTie, FaPaperPlane } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Hero from "@/components/Hero";

// Add the interface for props
interface ContactProps {
  setLoading?: (loading: boolean, email?: { to: string; from: string; subject: string }) => void;
}

function Contact({ setLoading }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Set loading with email data
    if (setLoading) {
      setLoading(true, {
        to: "info@bentechhub.co.za",
        from: formData.email,
        subject: formData.subject
      });
    }

    // Simulate form submission with 10 second delay to match loading indicator
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // The loading indicator will automatically close after 10 seconds in App.tsx
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    { 
      icon: FaEnvelope, 
      label: "Email", 
      value: "info@bentechhub.co.za", 
      href: "mailto:info@bentechhub.co.za",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: FaEnvelope, 
      label: "Support", 
      value: "support@bentechhub.co.za", 
      href: "mailto:support@bentechhub.co.za",
      color: "from-cyan-500 to-cyan-600"
    },
    { 
      icon: FaEnvelope, 
      label: "Admin", 
      value: "admin@bentechhub.co.za", 
      href: "mailto:admin@bentechhub.co.za",
      color: "from-sky-500 to-sky-600"
    },
    { 
      icon: FaUserTie, 
      label: "Founder", 
      value: "benediction@bentechhub.co.za", 
      href: "mailto:benediction@bentechhub.co.za",
      color: "from-indigo-500 to-indigo-600"
    },
    { 
      icon: FaPhone, 
      label: "Call Us", 
      value: "+27 67 203 3731", 
      href: "tel:+27672033731",
      color: "from-green-500 to-green-600"
    },
    { 
      icon: FaWhatsapp, 
      label: "WhatsApp", 
      value: "+27 67 203 3731", 
      href: "https://wa.me/27672033731",
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      icon: FaMapMarkerAlt, 
      label: "Location", 
      value: "Johannesburg, South Africa",
      color: "from-red-500 to-red-600"
    },
    { 
      icon: FaClock, 
      label: "Business Hours", 
      value: "Mon-Fri: 9:00 AM - 5:00 PM",
      color: "from-purple-500 to-purple-600"
    },
  ];

  return (
    <>
      {/* HERO SECTION - Imported */}
      <Hero />

      {/* CONTACT CARD */}
      <section className="relative -mt-20 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2"
          >
            {/* LEFT - Contact Info */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-slate-50 to-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-sky-900 mb-2">
                  Get in touch
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  We'd love to hear from you. Reach out for any inquiries or support.
                </p>
              </motion.div>

              <div className="space-y-5">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <item.icon className="text-sm" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          target={item.label === "WhatsApp" ? "_blank" : undefined}
                          rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                          className="font-medium text-gray-800 hover:text-sky-600 transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-gray-800 text-sm">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Location Note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-6 border-t border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-sky-500 text-xs" />
                  <p className="text-[10px] text-gray-400">
                    Physical meetings by appointment only
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT - Contact Form */}
            <div className="p-8 md:p-10 bg-white">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-sky-900 mb-2">
                  Send us a message
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-sky-500"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-sky-500"
                    />
                  </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-200 focus:border-sky-500"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                  >
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-sky-500"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Textarea
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-gray-200 focus:border-sky-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white py-2.5 transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                        Sending...
                      </span>
                    ) : submitted ? (
                      <span className="flex items-center gap-2">
                        <FaPaperPlane /> Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <FaPaperPlane /> Send Message
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-center"
                  >
                    <p className="text-green-700 text-sm">✓ Message sent successfully! We'll get back to you soon.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-[400px]"
      >
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Johannesburg%20South%20Africa&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </motion.section>

      {/* Quick Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-sky-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-sky-900 mb-2">
              Need immediate assistance?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Reach out to us directly on WhatsApp for quick responses
            </p>
            <a
              href="https://wa.me/27672033731"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-sm"
            >
              <FaWhatsapp size={16} />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;