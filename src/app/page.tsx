import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMission from '@/components/AboutMission';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutMission />
        <Services />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
