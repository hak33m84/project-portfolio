import Navbar from '@/app/home/partials/navbar';

import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Projects from './home/partials/projects';
import Testimonials from './home/partials/testimonials';
import Working from './home/partials/working';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Working />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
