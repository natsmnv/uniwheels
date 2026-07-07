import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Impressum from './components/pages/Impressum';
import AccessibilityStatement from './components/pages/AccessibilityStatement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/impressum" element={<Impressum/>} />
          <Route path="/accessibility" element={<AccessibilityStatement/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

