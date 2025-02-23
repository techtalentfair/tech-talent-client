import Header from "@/components/Header"
import Footer from "@/components/Footer";
import HeroSection from "@/pages/Home/Sections/HeroSection"
import UpcomingEventsSection from "@/pages/Home/Sections/UpcomingEventsSection";
import OurPartnersSection from "@/pages/Home/Sections/OurPartnersSection";
import ProjectsSection from "@/pages/Home/Sections/ProjectsSection";


export default function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto p-6 md:pl-10 pt-20 flex-col flex">
        <HeroSection />
        <UpcomingEventsSection />
        <OurPartnersSection />
        <ProjectsSection />
      </main>
      <Footer/>
    </>
  );
}
