import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { FeaturesOne, FeaturesTwo } from './components/Features/Features';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Tag from './components/Tag/Tag';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

function App() {
  AOS.init({ offset: 100, duration: 1000, once: true });
  return (
    <>
      <Header>
        <Navbar />
        <Hero />
      </Header>
      <main>
        <FeaturesOne />
        <Banner />
        <FeaturesTwo />
      </main>
      <Footer />
      <Tag />
    </>
  );
}

export default App;
