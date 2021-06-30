import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { FeaturesOne, FeaturesTwo } from './components/Features/Features';
import Banner from './components/Banner/Banner';

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
    </>
  );
}

export default App;
