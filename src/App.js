import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { FeaturesOne } from './components/Features/Features';

function App() {
  return (
    <>
      <Header>
        <Navbar />
        <Hero />
      </Header>
      <main>
        <FeaturesOne />
      </main>
    </>
  );
}

export default App;
