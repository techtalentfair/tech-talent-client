import { DProjectModel } from "@/types/database";

export const projectsData: DProjectModel[] = [
  {
    id: "1",
    title: "KIDZO",
    description:
      "Our team has successfully developed an advanced computer vision model using YOLOv7. Through our collaborative efforts, we have created a groundbreaking solution that significantly enhances safety measures. By harnessing the power of AI technology, our model demonstrates exceptional capabilities in detecting and classifying objects into two critical categories: 'safety' and 'danger'. This achievement underscores our commitment to developing innovative solutions that prioritize individual well-being. To ensure the accuracy and reliability of our model, we conducted extensive testing and evaluation, including real-time hazard detection using various videos. Our rigorous approach has validated the effectiveness of our solution.",
    videoUrl: "/KIDZO.mp4",
    url: "https://github.com/KidzoApp-comp-490/KidzoApp-computer-vision",
    teamMembers: [
      {
        name: "Mohamed Mabrouk",
        role: "Developer",
        imageSrc: "/assets/profile.png",
        bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
        url: "https://www.linkedin.com/in/mohamed-mabrouk-b6836121a/",
      },
      {
        name: "Rahma Mandoh",
        role: "Designer",
        imageSrc: "/assets/profile.png",
        bio: "",
        url: "https://www.linkedin.com/in/rahma-mandoh-388943215/",
      },
      {
        name: "Manar Gamal",
        role: "Developer",
        imageSrc: "/assets/profile.png",
        bio: "",
        url: "https://www.linkedin.com/in/manar-gamal-58115521a/",
      },
      {
        name: "Mohamed Hmada",
        role: "Designer",
        imageSrc: "/assets/profile.png",
        bio: "",
        url: "#",
      },
      {
        name: "Aziz Gerges",
        role: "Developer",
        imageSrc: "/assets/profile.png",
        bio: "",
        url: "https://www.linkedin.com/in/azizgerges/",
      },
    ],
    relatedEvents: ["1", "2"],
    relatedEventsTitles: "2023 Grads Project",
    technologies: ["YOLOv7", "AI Technology"],
  },
  {
    id: "2",
    title: "Blood Donation",
    description:
      "Blood Donation, an application designed to facilitate the blood donation process. It provides a platform for donors and patients, featuring an easy-to-use interface that allows donors to find nearby blood banks, view their test results, read informative articles about donation, and access a schedule service to coordinate donations with hospitals.",
    videoUrl: "/BloodDonation.mp4",
    url: null,
    teamMembers: [
      {
        name: "Habiba Mahmoud",
        role: "Developer",
        imageSrc: "/assets/profile.png",
        bio: "",
        url: "#",
      },
      {
        name: "Rahma Essam",
        role: "Designer",
        imageSrc: "/assets/profile.png",
        bio: "",
        url: "#",
      },
      {
        name: "Sondos Ahmed",
        role: "Developer",
        imageSrc: "/assets/profile.png",
        bio: "",
        url: "#",
      },
      {
        name: "Norhan Ali",
        role: "Designer",
        imageSrc: "/assets/profile.png",
        bio: "",
        url: "#",
      },
      {
        name: "Fatma Hany",
        role: "Designer",
        imageSrc: "/assets/profile.png",
        bio: "",
        url: "#",
      },
      {
        name: "Sarah Mohamed",
        role: "Designer",
        imageSrc: "/assets/profile.png",
        bio: "",
        url: "#",
      },
    ],
    relatedEvents: ["2", "3"],
    relatedEventsTitles: "2023 Grads Project",
    technologies: ["React Native", "Firebase"],
  },
];