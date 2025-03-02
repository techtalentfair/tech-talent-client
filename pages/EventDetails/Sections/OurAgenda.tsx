import EventCard from "@/components/EventCard";
import SectionHeading from "@/components/SectionHeading";
import { DEventTimeSlot  } from "@/types/database";

interface Events {
  eventsData: DEventTimeSlot[];
}

function OurAgenda({eventsData} : Events) {
  return (
    <section
      className="container flex flex-col min-w-full min-h-[calc(100vh-80px)] py-20"
      id="Events"
    >
      <SectionHeading title="Our Agenda" />
      <div className="flex flex-col w-full min-h-screen border-l-4 border-gray-600 mt-4">
        {eventsData.map((event) => (
            <EventCard key={event.title} {...event} />
        ))}
      </div>
    </section>
  );
}

export default OurAgenda;
