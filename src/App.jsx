import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FloatingNavbar from './components/Home/FloatingNavbar/index';
import { GoogleAdsConversionTracker } from './components/Script/index';
import WhatsAppButton from './components/WhatsAppButton/index';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <GoogleAdsConversionTracker/>
      <FloatingNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
