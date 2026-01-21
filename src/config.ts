export const siteConfig = {
  name: "Connor Floyd",
  title: "UBC Engineering Physics Student",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#2295a9ff",

  resumeUrl: "/ConnorFloyd_Resume.pdf",

  social: {
    email: "connorbfloyd@gmail.com",
    linkedin: "https://www.linkedin.com/in/connorfloyd05",
    github: "",
    twitter: "",
  },

  aboutMe:
    "A third year engineering physics student at the University of British Columbia with a passion for mechanical design and manufacturing. Experienced in CAD software, 3D printing, and machining. Seeking opportunities to apply my skills and contribute to innovative projects.",
 
    skills: ["SolidWorks", "Machining"],

  projects: [
    {
      name: "ENPH 253 Robotics Competition",
      description:
        "",
      link: "/projects/ENPH253",
      image: "/projects/ENPH253/ENPH253Thumbnail.jpg",
      skills: ["SolidWorks", "Laser-Cutting", "3D Printing", "Machining"],
    },
    {
      name: "Smart USB Hub",
      description:
        "",
      link: "/projects/SmartUsbHub",
      image: "/projects/smartUsbHub/SmartUsbHubThumbnail.jpg",
      skills: ["Circuit Design", "ESP32", "Raspberry Pi", "Soldering", "CAD", "3D Printing"],
    },
    {
      name: "Machined Aluminum and Brass Smartphone Stand",
      description:
        "",
      link: "/projects/SmartphoneStand",
      image: "/projects/smartphoneStand/SmartphoneStandThumbnail.jpg",
      tallThumbnail: true,
      skills: ["Machining", "Mill", "Lathe"],
    },
    {
      name: "Soldering Fume Extractor",
      description:
        "",
      link: "/projects/SolderingFumeExtractor",
      image: "/projects/solderingFumeExtractor/SolderingFumeExtractorThumbnail.jpg",
      skills: ["SolidWorks", "3D printing", "Soldering"],
    },
    {
      name: "Closed-Loop Motor Controller",
      description:
        "",
      link: "/projects/ENPH259MotorController",
      image: "/projects/ENPH259MotorController/MotorControllerThumbnail.jpg",
      tallThumbnail: true,
      skills: ["Circuit Construction", "Debugging"],
    },
  ],

  experience: [
    {
      company: "Corvus Energy",
      title: "Mechanical Engineering Co-op Student",
      dateRange: "Jan 2024 - Apr 2024",
      image: "/experience/corvus/CorvusLogo.png",
      bullets: [
        "Designed and manufactured prototype parts for battery systems, involving extensive use of SolidWorks, thorough documentation, and mechanical aptitude",
        "Performed various battery system tests, including tests on thermal runaway, vibrations, adhesives, and environmental sealing. Required instrumentation, and writing test plans, risk analyses, test journals, and test reports",
        "Gained aptitude with a Tormac CNC mill and other CNC machines. Utilized conversational machining and 3D toolpaths",
      ],
      link: "/experience/CorvusEnergy",
    },
    {
      company: "Engineering Design Team",
      title: "UBC ThunderBikes - Co-Captain",
      dateRange: "Sep 2023 - Present",
      image: "/experience/thunderBikes/TBikesLogo.png",
      bullets: [
        "Designed and Fabricated parts for UBC’s first electric race motorcycle, including a tubular subframe, battery casings, and high-voltage electronics mounts for a 400A, 110V battery",
        "Created CAD designs and drawings in SolidWorks, emphasizing design for manufacturability, such as jigging, weldability, and ease of assembly",
        "Performed finite element analyses and hand calculations to ensure the safety of designs",
      ],
      link: "/experience/ThunderBikes",
    },
  ],

  education: [
    {
      school: "University of British Columbia, Faculty of Applied Science",
      degree: "Engineering Physics",
      dateRange: "2023 - 2028",
      achievements: [
        "GPA: 89.6%",
        "UBC Trek Excellence Scholarship Recipient",
      ],
    },
  ],

};
