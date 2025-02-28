import EventDetailsPage from "@/pages/EventDetails/EventDetailsPage";
import React from "react";

type Params = Promise<{ eventId: string }>;

export default async function EventDetails(props: {params : Params}) {
  const params = await props.params;
  const eventId = params.eventId;

  return <EventDetailsPage eventId={eventId} />;
}
