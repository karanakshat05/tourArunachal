import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TopDestinations from "@/components/TopDestinations";
import AdventureCarousel from "@/components/Adventures";
import AITripPlanner from "@/components/AITrip";
import HowItWorks from "@/components/How";
import Footer from "@/components/Footer";
import Index from "@/components/Index";
import MapSection from "@/components/Map";


export default function Home() {
  return (
    <main className="pt-28">
      <Navbar />
      <HeroSection />
      <TopDestinations />
      <AdventureCarousel />
      <AITripPlanner />
      <HowItWorks />
      <MapSection />
      <Index />
      <Footer />

    </main>
  );
}
 