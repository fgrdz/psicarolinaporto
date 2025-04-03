import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FloatingNavbar from './components/Home/FloatingNavbar';
import { GoogleAdsConversionTracker } from './components/Script';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ScheduleRedirect from './components/ScheduleRedirect';

function App() {
  return (
    <Router>
      <GoogleAdsConversionTracker/>
      <FloatingNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendar-sessao" element={<ScheduleRedirect />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
