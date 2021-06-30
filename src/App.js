import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { FeaturesOne } from './components/Features/Features';
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
      </main>
    </>
  );
}

export default App;
