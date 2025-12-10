import Hero from './components/Hero';
import DetailedFeatures from './components/DetailedFeatures';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <DetailedFeatures />
      <Solutions />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
