import Header from "@/components/Header"
import Footer from "@/components/Footer";
import HeroSection from "@/pages/Home/HeroSection/HeroSection"


export default function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto p-6 md:pl-10 pt-20 flex-col flex">
        <HeroSection />
      </main>
      <Footer/>
    </>
  );
}
