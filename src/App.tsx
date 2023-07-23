import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Layout/Footer';
import Hero from './components/Hero';

const App = () => {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default App;
