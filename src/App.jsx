import CursorDot from './components/CursorDot';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Manifesto from './components/Manifesto';
import CollectionSection from './components/CollectionSection';
import Lookbook from './components/Lookbook';
import Spotlight from './components/Spotlight';
import Quote from './components/Quote';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <CursorDot />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Manifesto />
      <CollectionSection />
      <Lookbook />
      <Spotlight />
      <Quote />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
