import React from 'react'
import EventCard from './EventCard';
import { DEventModel } from '@/types/database';


interface EventsTimeLineContainerProps {
  eventsData: DEventModel[];
}

export default function EventsTimeLineContainer({ eventsData} : EventsTimeLineContainerProps) {
  return (
    <div className="flex flex-col w-full min-h-fit border-l-4 border-[#1C1C1C] mt-4">
      {eventsData.map((event) => (
        <EventCard
          key={event.title}
          title={event.title}
          url={event.url}
          date={event.date}
          time={event.time}
          location={{
            name: event.location.name,
            url: event.location.url,
          }}
          description={event.description}
          imageUri={event.bgImage}
        />
      ))}
    </div>
  )
}
