import './styles.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import AboutAlt from './components/AboutAlt/AboutAlt';
import SimpleMenu from './components/SimpleMenu/SimpleMenu';
import ContactForm from './components/ContactForm/ContactForm';

function App() {

  return (
    <div className="App">
        <SimpleMenu />
        <header id="header" className="header">
          <Header />
        </header>
        <section id="section-one" className="section-one">
          <About />
        </section>
        <section id="section-two" className="section-two">
          <AboutAlt />
        </section>
        <section id="section-two" className="section-two">
          <Skills />
        </section>
        <section id="section-three" className="section-three">
          <Projects />
        </section>
        <section id="section-five" className="section-five">
          <ContactForm />
        </section>
        <footer id="footer" className="footer">
          <Footer />
        </footer>
    </div>
  );
}

export default App;
