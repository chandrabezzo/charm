import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AIChatPage from './pages/AIChatPage';
import StorePage from './pages/StorePage';
import FlowPage from './pages/FlowPage';
import FeaturesPage from './pages/FeaturesPage';
import SolutionsPage from './pages/SolutionsPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BroadcastPage from './pages/BroadcastPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename="/charm">
      <ScrollToTop />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<StorePage />} />
        {/* <Route path="/ai-chat" element={<AIChatPage />} /> */}
        {/* <Route path="/store" element={<StorePage />} /> */}
        <Route path="/broadcast" element={<BroadcastPage />} />
        <Route path="/flow" element={<FlowPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
