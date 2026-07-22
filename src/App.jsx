import CursorDot from "./components/CursorDot";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import CollectionSection from "./components/CollectionSection";
import Lookbook from "./components/Lookbook";
import Spotlight from "./components/Spotlight";
import Quote from "./components/Quote";
import Newsletter from "./components/Newsletter";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import { CartProvider } from "./hooks/CartProvider.jsx";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <CartProvider>
      <CursorDot />
      <ScrollProgress />
      <Navbar />
      <CartSidebar />
      <Hero />
      <Marquee />
      <Manifesto />
      <CollectionSection />
      <Lookbook />
      <Spotlight />
      <Quote />
      <Newsletter />
      <Archive />
      <Footer />
    </CartProvider>
  );
}

export default App;
