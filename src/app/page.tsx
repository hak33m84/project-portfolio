import About from './home/partials/about';
import ContactMe from './home/partials/contact-me';
import Experiences from './home/partials/experiences';
import FAQ from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Projects from './home/partials/projects';
import Services from './home/partials/services';
import Skills from './home/partials/skills';
import Testimonials from './home/partials/testimonials';
import Working from './home/partials/working';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Skills />
      <Working />
      <Experiences />
      <Projects />
      <Testimonials />
      <FAQ />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
