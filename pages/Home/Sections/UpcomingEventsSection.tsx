"use client";

import React from 'react'
import EventsTimeLineContainer from '@/components/EventsTimeLineContainer'
import SectionHeading from '@/components/SectionHeading'
import { exampleEvent } from '@/data/eventsData'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes';

export default function UpcomingEventsSection() {

  const router = useRouter();


  return (
    <section
      className="container flex flex-col min-w-full min-h-[calc(100vh-80px)] py-20"
      id="Upcoming-Events"
    >
      <div className='flex justify-between items-center'>
        <SectionHeading title="Upcoming events" />
        <CustomButton
          className='uppercase italic font-bold'
          variant="secondary"
          onClick={() => router.push(ROUTES.OUR_EVENTS)}>
          View all
        </CustomButton>
      </div>
      <EventsTimeLineContainer eventsData={[exampleEvent]} />
    </section>
  )
}