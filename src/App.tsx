import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AtelierFounder } from './components/AtelierFounder';
import { EstatesPortfolio } from './components/EstatesPortfolio';
import { MaterialitySwatches } from './components/MaterialitySwatches';
import { PrivateCommission } from './components/PrivateCommission';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dh-sand text-dh-bronze selection:bg-dh-amber/20 selection:text-dh-bronze">
      <Navbar />
      <main>
        <Hero totalFrames={60} />
        <AtelierFounder />
        <EstatesPortfolio />
        <MaterialitySwatches />
        <PrivateCommission />
      </main>
      <Footer />
    </div>
  );
}

export default App;
