import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Tools from '@/components/Tools';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Pricing />
        <Tools />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
