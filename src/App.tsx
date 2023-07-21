import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
	return (
		<main>
			<section></section>
			<Header />

			<section id='hero'>
				<Hero />
			</section>

			<section id='about'>
				<About />
			</section>

			<section id='contact'>
				<Contact />
			</section>

			<section id='footer'>
				<Footer />
			</section>
		</main>
	);
};

export default App;
