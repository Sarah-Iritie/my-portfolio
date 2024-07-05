import './App.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../About/Footer/Footer';
import { DarkModeProvider } from '../DarkModeContext/DarkModeContext';

function App() {
  return (
    <div>
      <DarkModeProvider>
        <Header />
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </div>
  );
}

export default App;
