  // Event Model Type Definition

  export interface DEventLocation {
    name: string;
    url?: string | null; // Optional URL for location link
  }

  export interface DEventTimeSlot {
    id?: string;
    title: string;
    url?: string | null;
    date: string; // Format: "2 July 2025 "
    time: string; // Format: "09:00 AM"
    location: DEventLocation;
    description: string;
    imageUri?: string | null;
    images?: string[] | null;
  }


  export interface DEventModel extends DEventTimeSlot {
    id: string; // Unique event ID
    bgImage: string; // Background image for the event
    images: string[]; // List of images from the camera team
    content: string; // Markdown content for MDX rendering
    agenda: DEventTimeSlot[]; // List of time slots (sessions in the agenda)
    relatedProjects: string[]; // List of related project IDs
  }

  // Project Model Type Definition

  export interface DProjectMember {
    name: string;
    role: string;
    imageSrc: string;
    url?: string | null;
  }

  export interface DProjectModel {
    id: string; // Unique project ID
    title: string;
    description: string;
    videoUrl: string | null; // URL for project video
    url: string | null; // URL for project link
    teamMembers: DProjectMember[];
    relatedEvents: string[] | null; // List of related event IDs
    relatedEventsTitles: string ; // Title for related events section
    technologies: string[] | null; // List of technologies used in the project
  }

  // Partner Model Type Definition
  export interface DPartnerModel {
    name: string;
    url: string;
    imageURL: string;
  }
