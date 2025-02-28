import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EventsList from "@/components/EventsList";
import { agendaData } from '@/data/eventsData'
import NewsletterFooter from "@/components/NewsletterFooter";

export default function EventsDetailsPage() {
  return (
    <>
    <Header />
    <main className="max-w-screen-xl mx-auto p-6 md:pl-10 pt-20 flex-col flex">
      
    <EventsList  eventsData={agendaData}/>
    </main>
        <NewsletterFooter/>
      <Footer />
    </>
  );
}
