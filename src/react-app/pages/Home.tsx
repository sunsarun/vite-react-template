import { Hero } from '../components/Hero';
import { Arsenal } from '../components/Arsenal';
import { Work } from '../components/Work';
import { Certifications } from '../components/Certifications';
import { History } from '../components/History';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <Arsenal />
      <Work />
      <Certifications />
      <History />
      <Contact />
    </>
  );
};
