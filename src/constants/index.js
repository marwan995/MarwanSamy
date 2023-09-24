import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    Electron,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    cpc,
    cargas,
    cairo,
    carrent,
    jobit,
    tripguide,
    postgresql,
    writeIT
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Desktop Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Electron",
      icon: Electron,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Postgresql",
      icon: postgresql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

  ];
  
  const experiences = [
    {
      title: "Process Restructuring Intrn",
      company_name: "WriteIT",
      icon: writeIT,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Sept 2022",
      points: [
        "Collaborated on the GAHC project, working on the restructure of healthcare processes in Egypt in partnership with the World Health Organization (WHO).",
        "Attended numerous training sessions to acquire knowledge about new topics and tools relevant to the project.",
        " Engaged in conversations with experts from various fields, further developing my communication skills and overall soft skills.",
      ],
    },
    {
      title: "Software Engineer Intrn",
      company_name: "cooperation petroleum co. (cpc)",
      icon: cpc,
      iconBg: "#383E56",
      date: "Jul 2023 - Aug 2023",
      points: [
        "Participated in training sessions covering computer topics, including security, networking, and databases.",
        "Gained hands-on experience in SQL database management and actively contributed to the redesign of the current database schema",
        " Developed a responsive web application using HTML, CSS, Express.js, and MSSQL, including critical features for work period tracking, holiday request management, and new employee data input, while maintaining a focus on creating clean and intuitive user interfaces",
        "Collaborated on resolving issues within an existing company application, providing valuable problem-solving assistance.",
      ],
    },
    {
      title: "Software Engineer Intrn",
      company_name: "Car gas",
      icon: cargas,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Sep 2023",
      points: [
        "Collaborated during the first week to enhance functionality in Excel sheets, particularly in the attendance and salary sheets. Added and fixed various features and implemented macros for advanced functionalities.",
        "Developed a desktop application using HTML, CSS, Eel Python during the remaining three weeks of the training period.",
        "Designed a secure login system with two password privilege and a responsive UI for employee data , holiday management and PDF generation.",
        "Developed additional screen with notifications, for the employees with expired personal card or working card and loan management.",
      ],
    },
    {
      title: "Cyber security Course",
      company_name: "Cairo University",
      icon: cairo,
      iconBg: "#383E56",
      date: "Aug 2023 - Sep 2023",
      points: [
        "Attended a comprehensive cybersecurity course consisting of 12 lectures over two days each week.",
        "Gained expertise in penetration testing using various tools and successfully solved numerous challenges on TryHackMe.",
        " Completed assignments, including a project involving RSA message encryption with a Java-based GUI.",
        "Developed an antivirus application for PDF files, using Electron and Node.js.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Detecta",
      description:
        "A pattern-based anti-PDF malware system identifies and neutralizes malicious PDF files by recognizing predefined patterns or signatures associated with known threats.",
      tags: [
        {
          name: "Electron",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "orange-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/marwan995/Detecta",
    },
    {
      name: "EmployeePro",
      description:
        "EmployeePro Desktop Manager is a Python-based employee management application with user authentication, employee data management, holidays tracking, document expiration alerts, and loan request tracking.",
      tags: [
        {
          name: "EEL pyhton",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "orange-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/marwan995/EmployeePro",
    },
    {
      name: "Discoverr",
      description:
        "Discoverr is a search engine meticulously crafted from the ground up, designed to provide fast search results across an extensive database of 8,000 websites.This project is a combination of technologies.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "orange-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/marwan995/Discoverr",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };