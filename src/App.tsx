import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Layout/Footer';
import Hero from './components/Hero';
import Header from './components/Layout/Header';
import { Route, Routes, useLocation } from 'react-router';
import Store from './components/Store';
import GoToTop from './components/GoToTop';
import ErrorPage from './error-page';

const App = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-[100vh] min-h-[100vh]">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main className="flex-1">
              <section id="hero">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </main>
          }
        />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {location.pathname === '/' && <GoToTop />}
      <Footer />
    </div>
  );
};

export default App;
