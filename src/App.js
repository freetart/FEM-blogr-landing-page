import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { FeaturesOne, FeaturesTwo } from './components/Features/Features';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Tag from './components/Tag/Tag';

function App() {
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
