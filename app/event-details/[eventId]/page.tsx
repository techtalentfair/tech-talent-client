import EventDetailsPage from "@/pages/EventDetails/EventDetailsPage";
import { NextPage } from "next";
import React from "react";

interface EventDetailsProps {
  params: {
    eventId: string;
  };
}

const EventDetails: NextPage<EventDetailsProps> = ({ params }) => {
  return <EventDetailsPage eventId={params.eventId} />;
};

export default EventDetails;
