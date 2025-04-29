import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop'; // <-- Import here

import Home from './pages/Home';
import ITManagedServices from './pages/services/ITManagedServices';
import ITEndUserSupport from './pages/services/ITEndUserSupport';
import ITInfrastructureServices from './pages/services/ITInfrastructureServices';
import WirelessSurvey from './pages/services/WirelessSurvey';
import ITOutsourcing from './pages/services/ITOutsourcing';
import SecurityServices from './pages/services/SecurityServices';
import ITAssets from './pages/services/ITAssets';
import FlexibleOnSite from './pages/services/FlexibleOnSite';
// import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/IT-managed-services" element={<ITManagedServices />} /> 
        <Route path="/services/IT-end-user-support" element={<ITEndUserSupport />} />
        <Route path="/services/IT-infrastructure-management" element={<ITInfrastructureServices />} /> 
        <Route path="/services/wireless-survey" element={<WirelessSurvey />} />
        <Route path="/services/IT-outsourcing" element={<ITOutsourcing />} /> 
        <Route path="/services/managed-security" element={<SecurityServices />} />
        <Route path="/services/IT-assets-disposition" element={<ITAssets />} />
        <Route path="/services/flexible-on-support" element={<FlexibleOnSite />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
