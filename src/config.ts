export const siteConfig = {
  name: "Connor Floyd",
  title: "UBC Engineering Physics Student",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#2295a9ff",

  resumeUrl: "/ConnorFloyd_Resume.pdf",

  social: {
    email: "connorbfloyd@gmail.com",
    linkedin: "https://www.linkedin.com/in/connorfloyd05",
  },

  aboutMe:
    "A third year engineering physics student at the University of British Columbia with a passion for mechanical design and manufacturing. Experienced in CAD software, 3D printing, and machining. Seeking opportunities to apply my skills and contribute to innovative projects.",
 
    skills: ["SolidWorks", "Machining"],

  projects: [
    {
      name: "ENPH 253 Robotics Competition",
      description:
        "",
      slug: "253",
      link: "/projects/ENPH253",
      image: "/projects/253/253MainPhoto.jpg",
      skills: ["SolidWorks", "Laser-Cutting", "3D Printing", "Machining"],
      details: `
      <p>This project is a portable equatorial mount designed...</p>
      <p>You can insert long-form writing here with HTML...</p>
    `
    },
    {
      name: "Smart USB Hub",
      description:
        "",
      link: "https://aidevroundup.com/?ref=devportfolio",
      image: "/images/projects/253PortfolioPhoto.jpg",
      skills: ["Circuit Design", "ESP32", "Raspberry Pi", "Soldering", "CAD", "3D Printing"],
    },
    {
      name: "Machined Aluminum and Brass Smartphone Stand",
      description:
        "",
      link: "https://aidevroundup.com/?ref=devportfolio",
      image: "/images/projects/253PortfolioPhoto.jpg",
      skills: ["Machining", "Mill", "Lathe"],
    },
    {
      name: "Soldering Fume Extractor",
      description:
        "",
      link: "https://aidevroundup.com/?ref=devportfolio",
      image: "/images/projects/253PortfolioPhoto.jpg",
      skills: ["SolidWorks", "3D printing", "Soldering"],
    },
  ],

  experience: [
    {
      company: "Corvus Energy",
      title: "Mechanical Engineering Co-op Student",
      dateRange: "Jan 2024 - Apr 2024",
      image: "/images/projects/corvusLogo.png",
      bullets: [
        "Machining",
        "",
        "",
      ],
      link: "/experience/CorvusEnergy",
    },
    {
      company: "Engineering Design Team",
      title: "UBC ThunderBikes - Co-Captain",
      dateRange: "Jan 2024 - Apr 2024",
      image: "/images/projects/corvusLogo.png",
      bullets: [
        "Machining",
        "",
        "",
      ],
      link: "/experience/CorvusEnergy",
    },
  ],

  education: [
    {
      school: "University of British Columbia, Faculty of Applied Science",
      degree: "Engineering Physics",
      dateRange: "2023 - 2028",
      achievements: [
        "GPA: 89.0%",
        "UBC Trek Excellence Scholarship Recipient",
      ],
    },
  ],

};
