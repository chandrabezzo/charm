import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AIChatPage from './pages/AIChatPage';
import StorePage from './pages/StorePage';
import FlowPage from './pages/FlowPage';
import FeaturesPage from './pages/FeaturesPage';
import SolutionsPage from './pages/SolutionsPage';

function App() {
  return (
    <Router basename="/charm">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-chat" element={<AIChatPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/flow" element={<FlowPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
