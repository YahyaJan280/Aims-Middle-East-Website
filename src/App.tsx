import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicyPage from "./components/PrivacyPolicy";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactPage from "./components/ContactPage";
import TermsOfServicePage from "./components/TermsOfServicePage";
import ScrollToTop from "./components/ScrollToTop";

// 🔹 About
import Overview from "./About/Overview";
import Impact from "./About/Impact";
// 🔹 Projects
import SugarHospital from "./Projects/suger-hospital";
import Camps from "./Projects/Camps";

// 🔹 Partners
import Strategic from "./Partners/Strategic";
import Mous from "./Partners/Mous";
import BecomePartner from "./Partners/BecomePartner";

// 🔹 Get Involved
import Donate from "./GetInvolved/Donate";
import Volunteer from "./GetInvolved/Volunteer";
import Membership from "./GetInvolved/Membership";
import CSR from "./GetInvolved/CSR";

// 🔹 News
import Updates from "./News/Updates";
import Research from "./News/Research";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* Static Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />

          {/* About */}
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/about/impact" element={<Impact />} />
          {/* Projects */}
          <Route path="/projects/sugar-hospital" element={<SugarHospital />} />
          <Route path="/projects/community camps" element={<Camps />} />

          {/* Partners */}
          <Route path="/partners/strategic" element={<Strategic />} />
          <Route path="/partners/mous" element={<Mous />} />
          <Route path="/partners/become" element={<BecomePartner />} />

          {/* Get Involved */}
          <Route path="/get-involved/donate" element={<Donate />} />
          <Route path="/get-involved/volunteer" element={<Volunteer />} />
          <Route path="/get-involved/membership" element={<Membership />} />
          <Route path="/get-involved/csr" element={<CSR />} />

          {/* News */}
          <Route path="/news/updates" element={<Updates />} />
          <Route path="/news/research" element={<Research />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
