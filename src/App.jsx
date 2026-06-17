import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SimpleLayout from "./components/layout/SimpleLayout";
import ConditionalWrapper from "./components/layout/ConditionalWrapper";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Providers from "./pages/Providers";
import ContactUs from "./pages/ContactUs";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import Terms from "./pages/Terms";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Pages with Header/Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>

        {/* Legal pages – choose layout via query param */}
        <Route path="/refund" element={<Refund />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
