import Header from "./components/header";
import HeroSection from "./components/Home/heroSection";
import AboutUs from "./components/Home/aboutus";
import "./globals.css";
import TechnologiesMarquee from "./components/Home/technologiesMarquee";
import Services from "./components/Home/serviceItem";
import ProjectSection from "./components/Home/ProjectsSection";
import CanvasBackground from "./components/ui/CanvasBackground";
import WhyChooseUs from "./components/Home/WhyChooseUs";
import Contact from "./components/Home/ContactSection";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-black">
      <CanvasBackground />
      <Header />
      <main id="top" className="relative z-10 w-full flex-1">
        <HeroSection />
        <TechnologiesMarquee />
        <Services />
        <AboutUs />
        <ProjectSection />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
