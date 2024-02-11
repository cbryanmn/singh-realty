import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/HomePage/Home';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Contact from './components/pages/Contact/Contact';
import TeamTable from './components/pages/Team/Team';
import Bio from './components/pages/Team/TeamBios/Bio';
import Testimonials from './components/pages/Testimonials/Testimonials';
import Navbar from './components/Navbar';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Properties from './components/pages/Portfolio/Properties/Properties';
import WhySingh from './components/pages/WhySingh/WhySingh';
import Services from './components/pages/Services/Services';
import AvailableProperties from './components/pages/AvailableProperties/AvailableProperties';
import IntakeForm from './components/pages/IntakeForm/IntakeForm';
import ImageModal from './components/pages/AvailableProperties/ImageModal';
import Footer from './components/Footer/Footer';
import FooterFormSuccess from './components/Footer/FooterFormSuccess';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path="/team" element={<TeamTable />} />
        <Route path="/whysingh" element={<WhySingh />} />
        <Route path="/availableproperties" element={<AvailableProperties />} />
        <Route path="/intakeform" element={<IntakeForm />} />
        <Route path="/bio/:memberName" element={<Bio />} />
        <Route path="/properties/:propertyName" element={<Properties />} />
        <Route path="/imagemodal" element={<ImageModal />} />
        <Route path="/footerformsuccess" element={<FooterFormSuccess />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
