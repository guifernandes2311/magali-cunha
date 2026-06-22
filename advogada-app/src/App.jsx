import HeroSection from './components/HeroSection';
import AreasSection from './components/AreasSection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import FooterSection from './components/FooterSection';
import WhatsAppButton from './components/WhatsAppButton';
import SectionNav from './components/SectionNav';

export default function App() {
  return (
    <>
      <main>
        <HeroSection heroSrc="/foto-hero.jpeg" />
        <AreasSection />
        <AboutSection aboutSrc="/foto-sobre.jpeg" />
        <ReviewsSection />
      </main>
      <FooterSection />
      <SectionNav />
      <WhatsAppButton />
    </>
  );
}
