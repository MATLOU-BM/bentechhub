import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingIndicator from "@/components/LoadingIndicator";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Academy from "@/pages/Academy";
import Talent from "@/pages/Talent";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

interface EmailData {
  to: string;
  from: string;
  subject: string;
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailData, setEmailData] = useState<EmailData | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSetLoading = (loading: boolean, email?: EmailData) => {
    setIsLoading(loading);
    if (email) {
      setEmailData(email);
    }
    if (loading) {
      // Auto-hide loading after 10 seconds
      setTimeout(() => {
        setIsLoading(false);
        setEmailData(null);
      }, 10000);
    }
  };

  return (
    <>
      <LoadingIndicator isLoading={isLoading} emailData={emailData} />
      <div className="flex flex-col min-h-screen">
        <Navbar setLoading={handleSetLoading} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact setLoading={handleSetLoading} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;