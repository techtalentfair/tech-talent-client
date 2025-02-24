import EventCard from "@/components/EventCard";
import SectionHeading from "@/components/SectionHeading";

interface Event {
  title: string ;
  url: string | null;
  date: string;
  time: string;
  location: {
    name: string;
  };
  description: string;
  imageUri: string | null;
}

const eventsData: Event[] = [
    {
      title: "Smart College Management System (SCMS)",
      url: null,
      date: "July 2",
      time: "09:30 AM",
      location: {
        name: "Mosharafa Hall",
      },
      description:
        '"Smart College Management System (SCMS)" is an innovative online platform designed to streamline and enhance all academic and administrative processes within a college operating under the credit hour system. The system provides an easy-to-use interface for student and faculty registration, scheduling of course registrations and timetables, management of grades and academic reports, and effective communication among all stakeholders. The system aims to simplify daily operations within the college and improve the academic management and educational experience',
      imageUri: "/assets/SCMS.png",
    },
    {
      title: "Scholar Sync",
      url: null,
      date: "July 2",
      time: "09:50 AM",
      location: {
        name: "Mosharafa Hall",
      },
      description:
        "the project goal is to make it easy for college admins to check and manage professors information for fast reporting whenever needed.",
      imageUri: "/assets/ScholarSync.png",
    },
    {
      title: "Petopia",
      url: null,
      date: "July 2",
      time: "10:10 AM",
      location: {
        name: "Mosharafa Hall",
      },
      description:
        '"Petopia" is website and mobile app, It is concerned with caring for pets, solving the problems they face in life, share feeds with others, selling the necessary products they need, and ways to communicate together, and thus this program is considered a complete community for pets.',
      imageUri: "/assets/Petopia.jpg",
    },
    {
      title: "UpLearn",
      url: null,
      date: "July 2",
      time: "10:30 AM",
      location: {
        name: "Mosharafa Hall",
      },
      description:
        "The project aims to create an efficient system for managing course registration and facilitating communication between the board and students. The goal is to streamline enrollment processes and ensure clear, timely exchanges of information and updates.",
      imageUri: "/assets/LMS.jpg",
    },
    {
      title: "Edusphere",
      url: null,
      date: "July 2",
      time: "10:50 AM",
      location: {
        name: "Mosharafa Hall",
      },
      description:
        "An educational platform for all fields and uploading a course for any field.",
      imageUri: "/assets/Edusphere.png",
    },
    {
      title: "Rescue Wheels",
      url: null,
      date: "July 2",
      time: "11:10 AM",
      location: {
        name: "Mosharafa Hall",
      },
      description:
        "1. Provide an SOS service for broken vehicles \n2. Connect vehicle owners with repair centers to do regular checkups and maintenance",
      imageUri: "/assets/RescueWheels.jpg",
    },
    {
      title: "Hospital Management System",
      url: null,
      date: "July 2",
      time: "11:30 AM",
      location: {
        name: "Mosharafa Hall",
      },
      description:
        "This hospital management system allows patients to reserve clinic appointments and make payments. \nPatients can upload their medical records and view their reservation history. \nDoctors can see their list of patients and choose to take or ignore cases. The HR department can assign doctors and nurses to clinics and create accounts for both doctors and nurses. It is designed to manage the entire hospital efficiently.",
      imageUri: "/assets/hms.jpg",
    },
    {
      title: "Live Sign Language Translation",
      url: null,
      date: "July 2",
      time: "11:50 AM",
      location: {
        name: "Mosharafa Hall",
      },
      description:
        "The main goal of our project is to make communication easier between people who use sign language and others who don't understand it.",
      imageUri: "/assets/lslt.jpg",
    },
    {
      title: "TAMEIT",
      url: null,
      date: "July 2",
      time: "12:10 PM",
      location: {
        name: "Mosharafa Hall",
      },
      description:
        "Someone beloved once told me, “Name it to tame it”, and he was right indeed.\nOur application is the one that will help you do it. Mental illness is serious and can control everything in our lives every day, so it’s important and necessary to check our mental health very often just as important to check our physical health, mental and physical health are equally important components of overall health.\nOur application will help you to name your mental illness, get to know the symptoms, and reach highly rated doctors, you can also take tests to know which mental illness is the closest to your symptoms. We also provide a trained and experienced chatbot to tell you more about mental health, illness, symptoms and can tell you what to do to start your mental health journey.",
      imageUri: "/assets/tameit.jpeg",
    },
    {
      title: "Break 🍕",
      url: null, // this means no link
      date: "July 2",
      time: "01:00 PM",
      location: {
        name: "Mosharafa Hall",
      },
      description: `Enjoy a short break and grab some snacks before the next session!`,
      imageUri: null, // this means no image for this event card
    },
    {
      title: "Be Green",
      url: null,
      date: "July 2",
      time: "01:30 PM",
      location: {
        name: "Mosharafa Hall",
      },
      description:
        "Problem :\nMany people waste valuable materials such as glass, paper,plastic, compost,and oil by throwing them in the trash or burn it, often unaware of their significance. these materials, individuals can not only contribute to environmental preservation but also generate income\nSolution:\n To address this problem, we propose developing a mobile application It enables people to sell these valuable materials to other people who can benefit from them and earn money.Additionally, the app will allow users to buy any items that can be used While enhancing environmental sustainability.",
      imageUri: "/assets/Be_Green1.png", 
    },
    {
      title: "AToZ",
      url: null,
      date: "July 2",
      time: "01:50 PM",
      location: {
        name: "Mosharafa Hall",
      },
      description:
        "The goal of the project is to create an integrated platform for buying and selling clothes online, combining both new and used fashion items. The app allows users to sell their used clothes, promoting the concept of recycling and contributing to environmental sustainability. Additionally, the app features a commission system that encourages users to participate in recycling clothes, helping to reduce waste and provide economic benefits",
      imageUri: "/assets/Atoz.jpg",
    },
  ];

function EventsList() {
  return (
    <section
      className="container flex flex-col min-w-full min-h-[calc(100vh-80px)] py-20"
      id="Events"
    >
      <SectionHeading title="Our Events" />
      <div className="flex flex-col w-full min-h-screen border-l-4 border-gray-600 mt-4">
        {eventsData.map((event) => (
            <EventCard key={event.title} {...event} />
        ))}
      </div>
    </section>
  );
}

export default EventsList;
