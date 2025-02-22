import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageSectoin from "./Sections/ImageSection";
import CardEvents from "./Sections/CardEvents";
import EventsList from "./Sections/EventsList";

export default function EventsPage() {
  return (
    <>
    <Header />
    <main className="max-w-screen-xl mx-auto p-6 md:pl-10 pt-20 flex-col flex">
        <ImageSectoin />
        <CardEvents />
        <EventsList />
    </main>
      <Footer />
    </>
  );
}
