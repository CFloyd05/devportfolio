export const siteConfig = {
  name: "Connor Floyd",
  title: "UBC Engineering Physics Student",
  description: "Portfolio website of Connor Floyd",
  accentColor: "#2295a9ff",

  resumeUrl: "/ConnorFloyd_Resume.pdf",

  social: {
    email: "connorbfloyd@gmail.com",
    linkedin: "https://www.linkedin.com/in/connorfloyd05",
    github: "",
    twitter: "",
  },

  aboutMe:
    "A third year engineering physics student at the University of British Columbia with a passion for mechanical design and hands-on manufacturing. Experienced in CAD software, machining, and 3D printing. Seeking opportunities to apply my skills and contribute to innovative projects.",
 
    skills: [
      "SolidWorks", 
      "Machining",
      "CNC (Conversational + CAM Toolpaths)",
      "3D Printing",
      "Test Planning & Execution", 
      "Instrumentation",
      "Documentation & Technical Writing",
      "Prototyping & Iteration",
    ],

  projects: [
    {
      name: "Autonomous Pet Rescue Robot",
      description:
        "Led mechanical design and fabrication for a 4-person team, developing an autonomous robot to locate and transport stuffed animals. Created a full SolidWorks assembly of the robot, designing subsystems including the chassis, drivetrain, robotic arms, and pickup mechanism.",
      link: "/projects/ENPH253",
      image: "/projects/ENPH253/ENPH253Thumbnail.jpg",
      skills: ["SolidWorks", "Laser-Cutting", "3D Printing", "Machining", "Rapid Prototyping"],
    },
    {
      name: "Smart USB Hub",
      description:
        "Built a voice-controlled USB power hub using an ESP32 and a Raspberry Pi server. Designed switching circuitry and enclosure. Implemented messaging protocol and integrated with Google Assistant.",
      link: "/projects/SmartUsbHub",
      image: "/projects/smartUsbHub/usbThumbnail.jpg",
      skills: ["Circuit Design", "Embeded Firmware", "ESP32", "Raspberry Pi", "Soldering", "CAD", "3D Printing"],
    },
    {
      name: "Machined Aluminum and Brass Phone Stand",
      description:
        "Machined a phone stand from aluminum and brass using a mill, lathe, and water-jet cutter.",
      link: "/projects/PhoneStand",
      image: "/projects/smartphoneStand/PhoneStandNicePic.jpg",
      tallThumbnail: true,
      skills: ["Machining", "Mill", "Lathe", "Water-jet Cutter", "Bench Grinder", "Fixturing"],
    },
    {
      name: "Closed-Loop Motor Controller",
      description:
        "Built a discrete closed-loop motor speed controller through a mixed analog and digital circuit. Implemented speed sensing and an analog proportional-integral error amplifier.",
      link: "/projects/ENPH259MotorController",
      image: "/projects/ENPH259MotorController/MotorControllerThumbnail.jpg",
      tallThumbnail: true,
      skills: ["Circuit Construction", "Debugging", "Analog and Digital Circuits"],
    },
    {
      name: "Soldering Fume Extractor",
      description:
        "Designed and fabricated a compact fume extractor using a salvaged PC fan and a multi-stage filter. Modeled and 3D printed an enclosure and wired a switched power interface.",
      link: "/projects/SolderingFumeExtractor",
      image: "/projects/fumeExtractor/frontPic.jpg",
      skills: ["SolidWorks", "3D printing", "Soldering"],
    },
  ],

  experience: [
    {
      company: "Corvus Energy",
      title: "Mechanical Engineering Co-op Student",
      dateRange: "Jan 2024 - Apr 2024",
      image: "/experience/corvus/CorvusLogo.png",
      bullets: [
        "Designed and manufactured prototype parts for battery systems, involving extensive use of SolidWorks, machining, and 3D printing",
        "Executed battery system tests on thermal runaway, vibrations, adhesives, and environmental sealing tests. Required instrumentation and formal documentation (risk analyses, test plans, journals, and reports)",
        "Programmed and operated a Tormach CNC mill using conversational machining and 3D toolpaths. Documented machining procedures for future co-ops",
      ],
      link: "/experience/CorvusEnergy",
    },
    {
      company: "UBC ThunderBikes",
      title: "Engineering Design Team Co-Captain",
      dateRange: "Sep 2023 - Present",
      image: "/experience/thunderBikes/TBikesLogo.png",
      bullets: [
        "Designed and Fabricated parts for UBC's first electric race motorcycle, including a tubular subframe, battery casings, and high-voltage electronics mounts",
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
        "Transcript Avaliable Upon Request",
      ],
    },
  ],

};
