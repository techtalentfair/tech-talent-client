'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { agendaData } from "@/data/eventsData";

interface EventDetailsPageProps {
  eventId: string;
}

const cn = (...classes: (string | boolean | undefined)[]) => clsx(...classes);

export default function CustomSlider({ eventId }: EventDetailsPageProps) {
    const event = agendaData.find(event => event.id === eventId);
    const images = event?.images || [];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (images.length === 0) return;
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }, [images]);
  
    return (
      <>

      <div className="relative flex flex-col items-center justify-center w-full h-screen bg-black overflow-hidden mt-6">
      <div className="relative flex items-center justify-center w-full max-w-3xl z-10">
        <AnimatePresence>
          {images.map((src, i) => {
            const isActive = i === index;
            const isLeft = (i + 1) % images.length === index;
            const isRight = (i - 1 + images.length) % images.length === index;
            const isFarLeft = (i + 2) % images.length === index;
            const isExtraLeft = (i + 3) % images.length === index;

            return (
              <motion.img
                key={src}
                src={src}
                alt="slide"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: isActive ? 1 : 0.5,
                  scale: isActive ? 1 : 0.85,
                  x: isLeft ? '-110%' : isRight ? '110%' : isFarLeft ? '-100%' : isExtraLeft ? '-0%' : '0%',
                }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  'absolute rounded-lg shadow-lg',
                  isActive ? 'z-20 w-[800px] h-[800px]' : 'z-10 w-[650px] h-[650px] opacity-50'
                )}
              /> 
            );
          })}
        </AnimatePresence>
      </div>
        </div>

        <div className="hidden sm:flex mt-5 space-x-8 z-50">
              {images.map((_, i) => (
              <span
                key={i}
                className={cn(
                  'h-5 w-32 rounded-full bg-purple-700 transition-all',
                  index === i ? 'opacity-100' : 'opacity-50'
                )}
              />
            ))}
          </div>
          
          </>
    );
}