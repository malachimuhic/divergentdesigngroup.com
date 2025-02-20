// App.jsx
import styles from './App.module.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Topblur } from './components/Topblur/Topblur';
import { About } from './components/About/About';
import { Capabilities } from './components/Capabilities/Capabilities';
// import { Dfo } from './components/Dfo/Dfo';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.App}> 
      <Navbar />
      <Hero />
      <Topblur />
      <About />
      {/* <Dfo /> */}
      <Capabilities />
      <Footer />
    </div>
  );
}

export default App;
