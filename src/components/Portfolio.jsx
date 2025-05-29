import { useState } from 'react';
import '../assets/portfolio.css';
import Modal from './Modal';


export const skillCategories = [
    {
      title: '💻 Programming Languages',
      skills: [
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'SQL', icon: '/src/assets/images/sql-database.svg', isLocalImage: true },
        { name: 'Assembly', icon: '/src/assets/images/asm.png', isLocalImage: true }
      ]
    },
    {
      title: '🎨 Frontend Development and UI',
      skills: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' }
      ]
    },
    {
      title: '🛠 Backend Development',
      skills: [
        { name: '.NET Framework', icon: '/src/assets/images/netFramework.png', isLocalImage: true },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
        { name: 'Spring MVC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
        { name: 'Jakarta EE', icon: '/src/assets/images/jakarta_ee.svg', isLocalImage: true }
      ]
    },
    {
      title: '🗄 Databases & Cloud Services',
      skills: [
        { name: 'MySQL', icon: '/src/assets/images/mysql_logo.svg', isLocalImage: true },
        { name: 'SQLite', icon: '/src/assets/images/sqlite.svg', isLocalImage: true },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' }
      ]
    },
    {
      title: '📱 Mobile Development',
      skills: [
        { name: 'Capacitor (Ionic)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/capacitor/capacitor-original.svg' }
      ]
    },
    {
      title: '🔌 IoT & Embedded Systems',
      skills: [
        { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg' },
        { name: 'ESP32', icon: '/src/assets/images/ESP32.png', isLocalImage: true },
        { name: 'Blynk', icon: '/src/assets/images/blynk.png', isLocalImage: true }
      ]
    },
    {
      title: '🧰 Tools & Platforms',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'GitHub', icon: '/src/assets/images/github.png', isLocalImage: true },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
        { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg' },
        { name: 'Eclipse IDE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg' },
        { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
        { name: 'XAMPP', icon: '/src/assets/images/xampp.svg', isLocalImage: true },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
        { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
        { name: 'Microsoft Office', icon: '/src/assets/images/Microsoft_Office.svg', isLocalImage: true }
      ]
    },
    {
      title: '⚙️ Build Tools',
      skills: [
        { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg' },
        { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
        { name: 'Gradle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg' },
        { name: 'Maven', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg' }
      ]
    }
  ];

function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects');
  const [activeProject, setActiveProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
  {
    id: 1,
    title: "PokeHall",
    subtitle: "Mobile App for Building Pokémon Teams",
    image: "/src/assets/images/PokeHall-Logo.svg",
    features: [
      "Choose from Pokémon in Gen 1–5 mainline games",
      "Team-building interface with visual previews",
      "Strengths and weaknesses checker",
      "Firebase-authenticated save/load team options",
    ],
    techStack: "React · Vite · Capacitor · Firebase · VS Code · Android Studio",
    role: "Solo full-stack developer — built the entire app, from design mockups to API handling and Firebase backend integration.",
    challenges: [
      "Migrating from React Native to Capacitor due to persistent backend issues",
      "Mapping complex PokeAPI data into a structured, readable format for end users",
    ],
    github: "https://github.com/CHASE-404/pokehall-prototype",
  },
  {
    id: 2,
    title: "Hydroponics Monitoring App",
    subtitle: "Thesis IoT-based Plant Monitoring System",
    image: "/src/assets/images/Hydroponics_Project.png",
    summary: "This mobile app serves as the frontend interface for an IoT hydroponics system built as a thesis project. It helps users monitor and manage key plant health indicators for Pechay in real time.",
    features: [
      "Live readings of air temp, water temp, humidity, pH, and TDS",
      "Historical data visualized in chart format",
      "Out-of-range alerts with notifications",
      "Remote water pump control from app via LoRa communication",
    ],
    techStack: "React · Vite · Capacitor · Firebase · ESP32 · LoRa · Android Studio · Arduino IDE",
    role: "Lead full-stack and hardware integration developer — implemented the UI, API logic, firmware behavior, and cloud database sync.",
    challenges: [
      "Designing a LoRa-based signal flow that reliably controls water pumps through database triggers",
      "Handling real-time sensor data and alert logic without delay",
    ],
    github: "https://github.com/CHASE-404/Hydroponics-Monitoring-app",
  },
  {
    id: 3,
    title: "TeknoyMart",
    subtitle: "E-Commerce Platform for CIT-U Students",
    summary: "TeknoyMart is a modern e-commerce platform developed for the CIT-U community, offering product listings, secure payments, and user reviews. Designed with a robust Spring Boot backend, it ensures smooth transactions and easy inventory management.",
    features: [
      "Users can list, update, delete, and restock products",
      "Students can buy products and pay via Stripe",
      "Product reviews and feedback system",
      "Admin dashboard for backend control",
    ],
    techStack: "Spring MVC · Jakarta EE · Java · MySQL · XAMPP · VS Code",
    role: "Team member responsible for manual testing and debugging. Also handled key backend fixes in CRUD operations within the admin panel.",
    challenges: [
      "Agile iteration delays resolved by proactive daily reviews",
      "Learned Java & Spring by leveraging AI tools to understand the codebase",
    ],
    github: "https://github.com/Kurtqttt/teknoymart",
  },
  {
    id: 4,
    title: "Laravel User Management",
    subtitle: "User Registration and Profile Management System",
    summary: "A foundational web application developed as an introduction to Laravel, focused on managing users and their profiles.",
    features: [
      "User registration and login",
      "CRUD operations for user data",
      "Clean UI with Bootstrap styling",
    ],
    techStack: "PHP · Laravel · MySQL · Bootstrap · XAMPP · VS Code",
    role: "Full-stack developer responsible for the entire application — from setup to backend logic.",
    challenges: [
      "Overcame the learning curve of Laravel through documentation and experimentation",
    ],
    github: "https://github.com/CHASE-404/Laravel-User_Management",
  },
  {
    id: 5,
    title: "PHP Grocery List",
    subtitle: "Simple Grocery Tracker with Price Calculation",
    summary: "A beginner PHP web application that lets users manage grocery items and calculate total expenses. Created to practice CRUD operations and basic PHP scripting.",
    features: [
      "Add, edit, and delete grocery items",
      "Compute total grocery cost in real-time",
    ],
    techStack: "PHP · MySQL · XAMPP · Canva · VS Code",
    role: "Full-stack developer — built UI, logic, and database handling",
    challenges: [
      "Learned PHP fundamentals by building from scratch and debugging common issues",
    ],
    github: "https://github.com/CHASE-404/php-crud-grocery-list",
  },
  {
    id: 6,
    title: "CIT-U Room Tracker",
    subtitle: "Real-Time Room Availability & School Scheduling App",
    summary: "A web-based system to monitor room availability across the GLE building at CIT-U. It highlights room statuses in real-time and facilitates event bookings, class schedules, and updates for students and faculty.",
    features: [
      "Real-time room tracking with color-coded availability (green for available, red for in-use)",
      "School event scheduling & current class display",
      "Newsfeed system",
      "Dark mode toggle",
      "User authentication",
    ],
    techStack: "Next.js · React · Tailwind CSS · Firebase · VS Code",
    role: "UI/UX front-end developer. I was responsible for the dark mode toggle feature and general UI polishing across all pages.",
    challenges: [
      "Troubleshooting inconsistent dark mode behavior across pages",
      "Overcoming React/Next.js unfamiliarity, as it was my first time using the framework",
    ],
    github: "https://github.com/CHASE-404/SD2_CIT-ROOM-TRACKER",
  },
  {
    id: 7,
    title: "TicketEase",
    subtitle: "Desktop-Based Concert Ticketing System",
    image: "/src/assets/images/Ticket_Ease.svg",
    summary: "TicketEase is a concert ticketing and management desktop application tailored for both artists hosting concerts and fans purchasing seats. Designed for the Philippine concert scene.",
    features: [
      "Artist and fan registration/login",
      "Seat selection with visual availability",
      "Event creation & concert details management",
      "Ticket purchasing flow with real-time seat availability",
    ],
    techStack: "C# · .NET Framework · SQLite",
    role: "Backend developer focusing on seat availability logic and purchase transaction flow.",
    challenges: [
      "Complex seat selection logic and handling real-time availability",
      "Coordinating seat selection logic with purchasing transactions",
    ],
    github: "https://github.com/CHASE-404/MSAD_TicketEase",
  },
  {
    id: 8,
    title: "DK’s Petshop",
    subtitle: "E-Commerce Desktop Application for Pet Inventory Management",
    image: "/src/assets/images/DK-Petshop_Logo.svg",
    summary: "An inventory management desktop application for a pet shop, offering both admin-level product control and user-level purchasing functionality. This project marked my first complete full-stack experience.",
    features: [
      "Admin: Add, update, delete, restock products",
      "Users: Browse and purchase products",
      "Inventory overview and product categorization",
    ],
    techStack: "C# · .NET Framework · SQLite",
    role: "Full-stack developer — designed both UI and backend logic",
    challenges: [
      "Implementing an effective stock restocking system",
      "Managing incomplete financial reports",
      "Designing the front-end UI from scratch",
    ],
    github: "https://github.com/CHASE-404/Project-OOP2-DK-s-Petshop",
  },];

  

  const softSkills = [
    { name: 'Problem Solving', icon: 'fas fa-lightbulb' },
    { name: 'Team Collaboration', icon: 'fas fa-users' },
    { name: 'Communication', icon: 'fas fa-comments' },
    { name: 'Time Management', icon: 'fas fa-clock' },
    { name: 'Adaptability', icon: 'fas fa-sync-alt' },
    { name: 'Attention to Detail', icon: 'fas fa-search' }
  ];

  const openProjectModal = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  return (
    <div data-aos="fade-up">
      <h2 className="section-title">Portfolio Showcase</h2>
      <p className="section-subtitle text mb-4">
        Explore my journey through projects, certifications, and technical expertise. Each section
        represents a milestone in my continuous learning path.
      </p>

      <div className="about-tabs mt-4">
        <div className="tab-buttons d-flex justify-content-start mb-4">
          <button className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
            Projects
          </button>
          <button className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
            Skills
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'projects' && (
            <div className="projects-container">
              {projects.map((proj, index) => (
                <div className="project-card" key={index} onClick={() => openProjectModal(proj)}>
                  <div className="project-card-inner">
                    <div className="project-image">
                      {proj.image ? (
                        <img src={proj.image} alt={proj.title} />
                      ) : (
                        <div className="project-image-placeholder">{proj.title.charAt(0)}</div>
                      )}
                    </div>
                    <div className="project-title">{proj.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div>
              <div className="mb-5">
                {skillCategories.map((category, index) => (
                  <div className="mb-4" key={index}>
                    <h4 className="skill-category-title">{category.title}</h4>
                    <div className="tech-card-container">
                      {category.skills.map((skill, idx) => (
                        <div className="tech-card" key={idx}>
                          <div className="tech-card-icon">
                            {skill.isLocalImage ? (
                              <img src={skill.icon} alt={skill.name} className={`tech-local-icon ${skill.customClass || ''}`} />
                            ) : (
                              <img src={skill.icon} alt={skill.name} className={`tech-svg-icon ${skill.customClass || ''}`} />
                            )}
                          </div>
                          <div className="tech-card-label">{skill.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="mb-3 mt-4">Soft Skills</h4>
              <div className="row">
                {softSkills.map((skill, index) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={index}>
                    <div className="value-card">
                      <div className="value-card-icon">
                        <i className={skill.icon}></i>
                      </div>
                      <div className="value-card-content">
                        <h6>{skill.name}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal project={activeProject} showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Portfolio;