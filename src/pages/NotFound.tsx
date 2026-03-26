import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-slate-50 overflow-hidden">

      {/* 🔵 BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center bg-white p-10 rounded-3xl border max-w-md w-full"
      >
        {/* 👤 AVATAR */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-2xl font-bold">
          BT
        </div>

        {/* 404 */}
        <h1 className="text-5xl font-bold text-sky-900 mb-2">
          404
        </h1>

        <p className="text-lg text-gray-700 mb-2">
          Page not found
        </p>

        <p className="text-sm text-gray-500 mb-6">
          The page <span className="font-medium">{location.pathname}</span> doesn’t exist or was moved.
        </p>

        {/* ACTIONS */}
        <div className="flex gap-3 justify-center">
          <Link
            to="/"
            className="bg-sky-500 text-white px-5 py-2 rounded-full text-sm hover:bg-sky-600 transition"
          >
            Go Home
          </Link>

          <Link
            to="/services"
            className="border border-sky-500 text-sky-600 px-5 py-2 rounded-full text-sm hover:bg-sky-50 transition"
          >
            View Services
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;