import React from "react";

interface EventDetailsPageProps {
  eventId: string;
}

export default function EventDetailsPage({ eventId }: EventDetailsPageProps) {

  return (
    <div className="flex justify-center items-center h-screen">
      event details page with Id = {eventId}
    </div>
  );
}
