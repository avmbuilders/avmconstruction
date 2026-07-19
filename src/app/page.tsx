import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Packages from "@/components/home/Packages";
import OurWorks from "@/components/portfolio/OurWorks";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden flex flex-col selection:bg-yellow-600 selection:text-white">
      <Hero />
      <Services />
      <Packages />
      <OurWorks />
      <Footer />
    </main>
  );
}
