import { useState } from 'react';
import Header from './components/Header/Header';
import { FeaturesOne, FeaturesTwo } from './components/Features/Features';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Tag from './components/Tag/Tag';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

// TODO: add hamburger menu & sidebar

function App() {
  const [isActive, setIsActive] = useState(false);
  AOS.init({ offset: 100, duration: 1000, once: true });
  return (
    <>
      <Header isActive={isActive} setIsActive={setIsActive}></Header>
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
