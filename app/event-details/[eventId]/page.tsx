import EventDetailsPage from "@/pages/EventDetails/EventDetailsPage";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EventDetails(props: { params: { eventId: any } }) {
  const eventId = props.params.eventId;

  return (
    <EventDetailsPage eventId={eventId} />
  );
}
