// Event Model Type Definition

export interface DEventLocation {
  name: string;
  url?: string | null; // Optional URL for location link
}

export interface DEventTimeSlot {
  title: string;
  url?: string | null;
  date: string; // Format: "2 July 2025 "
  time: string; // Format: "09:00 AM"
  location: DEventLocation;
  description: string;
  imageUri?: string | null;
}


export interface DEventModel extends DEventTimeSlot {
  id: string; // Unique event ID
  bgImage: string; // Background image for the event
  images: string[]; // List of images from the camera team
  content: string; // Markdown content for MDX rendering
  agenda: DEventTimeSlot[]; // List of time slots (sessions in the agenda)
  relatedProjects: string[]; // List of related project IDs
}
