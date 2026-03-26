import { motion, AnimatePresence } from "framer-motion";
import { 
  FaNetworkWired, 
  FaRoute, 
  FaExchangeAlt, 
  FaEthernet,
  FaServer,
  FaCloud,
  FaDatabase,
  FaEnvelope,
  FaPaperPlane
} from "react-icons/fa";

interface LoadingIndicatorProps {
  isLoading: boolean;
  emailData?: {
    to: string;
    from: string;
    subject: string;
  } | null;
}

export default function LoadingIndicator({ isLoading, emailData }: LoadingIndicatorProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-900 via-gray-500 to-white flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Animated Gradient Background */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(14,165,233,0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(14,165,233,0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(14,165,233,0.15) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Email Notification - Top */}
            {emailData && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-24 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-cyan-400/30 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <FaEnvelope className="text-cyan-400 text-xl" />
                  </motion.div>
                  <div className="text-white text-sm">
                    <p className="font-mono text-cyan-300">SENDING EMAIL...</p>
                    <p className="text-xs text-white/70">To: {emailData.to}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Main Container */}
            <div className="relative w-[450px] h-[450px] md:w-[500px] md:h-[500px]">
              {/* Outer Ring with Data Flow */}
              <motion.svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Central Core - Network Hub */}
              {/* <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex flex-col items-center justify-center shadow-2xl z-20 border border-cyan-400/30"
                animate={{
                  scale: [1, 1.02, 1],
                  boxShadow: [
                    "0 0 20px rgba(6,182,212,0.3)",
                    "0 0 40px rgba(6,182,212,0.5)",
                    "0 0 20px rgba(6,182,212,0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              > */}
                {/* <FaServer className="text-white text-3xl mb-1" />
                <span className="text-white text-[8px] font-mono tracking-wider">CORE HUB</span>
                <div className="flex gap-1 mt-1">
                  <motion.div
                    className="w-1 h-1 bg-green-400 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-1 h-1 bg-green-400 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-1 h-1 bg-green-400 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                  />
                </div> */}
              {/* </motion.div> */}

              {/* Pulse Waves */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-cyan-400/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border border-cyan-400/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />

              {/* Network Devices - Top */}
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg border border-white/20"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaNetworkWired className="text-white text-2xl" />
                </motion.div>
                <p className="text-white text-[9px] mt-1 font-mono">NETWORK</p>
                <motion.div
                  className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent mt-1"
                  animate={{ height: [8, 12, 8], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>

              {/* Network Devices - Bottom */}
              <motion.div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg border border-white/20"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <FaRoute className="text-white text-2xl" />
                </motion.div>
                <p className="text-white text-[9px] mt-1 font-mono">ROUTER</p>
                <motion.div
                  className="w-0.5 h-8 bg-gradient-to-t from-cyan-400 to-transparent mt-1"
                  animate={{ height: [8, 12, 8], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>

              {/* Network Devices - Left */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 flex flex-col items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg border border-white/20"
                  animate={{ x: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <FaExchangeAlt className="text-white text-2xl" />
                </motion.div>
                <p className="text-white text-[9px] mt-1 font-mono">SWITCH</p>
                <motion.div
                  className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mt-2"
                  animate={{ width: [8, 14, 8], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 1 }}
                />
              </motion.div>

              {/* Network Devices - Right */}
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 flex flex-col items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg border border-white/20"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  <FaCloud className="text-white text-2xl" />
                </motion.div>
                <p className="text-white text-[9px] mt-1 font-mono">CLOUD</p>
                <motion.div
                  className="w-8 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent mt-2"
                  animate={{ width: [8, 14, 8], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 1.5 }}
                />
              </motion.div>

              {/* Email Icons Floating */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`email-${i}`}
                  className="absolute"
                  initial={{ 
                    x: Math.cos(i * 60 * Math.PI / 180) * 100,
                    y: Math.sin(i * 60 * Math.PI / 180) * 100,
                    opacity: 0,
                    scale: 0
                  }}
                  animate={{
                    x: [
                      Math.cos(i * 60 * Math.PI / 180) * 100,
                      Math.cos((i * 60 + 15) * Math.PI / 180) * 120,
                      Math.cos((i * 60 + 30) * Math.PI / 180) * 100,
                    ],
                    y: [
                      Math.sin(i * 60 * Math.PI / 180) * 100,
                      Math.sin((i * 60 + 15) * Math.PI / 180) * 120,
                      Math.sin((i * 60 + 30) * Math.PI / 180) * 100,
                    ],
                    opacity: [0, 1, 0.5, 0],
                    scale: [0, 1, 0.8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <FaPaperPlane className="text-cyan-400 text-sm" />
                </motion.div>
              ))}

              {/* Floating Data Packets */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg"
                  animate={{
                    x: [
                      Math.cos(i * 45 * Math.PI / 180) * 80,
                      Math.cos((i * 45 + 30) * Math.PI / 180) * 80,
                    ],
                    y: [
                      Math.sin(i * 45 * Math.PI / 180) * 80,
                      Math.sin((i * 45 + 30) * Math.PI / 180) * 80,
                    ],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>

            {/* Loading Text with Progress */}
            <div className="mt-12 text-center">
              <motion.p
                className="text-white text-sm font-mono tracking-wider mb-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                INITIALIZING NETWORK SECURE CONNECTION...
              </motion.p>
              
              {/* Progress Bar - 10 seconds duration */}
              <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 10, ease: "linear" }}
                />
              </div>
              
              {/* Progress Percentage */}
              <motion.div
                className="text-cyan-400 text-xs font-mono mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    LOADING...
                  </motion.span>
                </motion.span>
              </motion.div>
              
              <div className="flex gap-1 justify-center mt-4">
                {["EMAIL", "TRANSFER", "IN", "PROGRESS"].map((word, i) => (
                  <motion.span
                    key={i}
                    className="text-[8px] text-cyan-400/70 font-mono"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}