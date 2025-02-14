import Header from "@/components/Header"
import Footer from "@/components/Footer";
import HeroSection from "@/pages/Home/HeroSection"


export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:px-10 md:px-5 sm:px-5 px-5 flex-col flex">
        <HeroSection />
      </main>
      <Footer/>
    </>
  );
}
