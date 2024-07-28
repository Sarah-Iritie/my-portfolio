import { useState, useEffect } from 'react';
import './App.scss';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Loading delay
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    // Clear timeout
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Work />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
