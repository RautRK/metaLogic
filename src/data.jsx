import { WiDayCloudyGusts } from "react-icons/wi";
import { BsShieldLock, BsBarChartLine } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaCode,
  FaHandshake,
} from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { IoGitNetworkSharp } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GrSync } from "react-icons/gr";
import {
  headsetImage,
  pencilImage,
  shieldImage,

  //Portfolio images import
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,

} from "./assets";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export const navRoutes = [
  {
    id: "hero",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "portfolio",
    name: "Portfolio",
  },
  {
    id: "blog",
    name: "Blog",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export const whyChooseUs = [
  {
    title: "Proven Expertise",
    imageIcon: shieldImage,
    description: `With years of experience across multiple industries, our team
                brings deep knowledge and technical expertise to every project,
                ensuring solutions that are both innovative and reliable.`,
  },
  {
    title: "Customized Solutions",
    imageIcon: pencilImage,
    description: `We understand that every business is unique. Our solutions are
                tailored to fit each client's specific needs, providing maximum
                flexibility and scalability for the future.`,
  },
  {
    title: "Exceptional Support",
    imageIcon: headsetImage,
    description: `Our commitment doesn’t end at project delivery. We provide
                dedicated, ongoing support to ensure your business continues to
                succeed with our solutions.`,
  },
];


export const ourApproaches = [
  {
    title: "Client-Centered Collaboration",
    icon: FaHandshake,
    description: `We prioritize close collaboration, working directly with
                  clients to fully understand their vision and challenges. This
                  partnership ensures each solution is perfectly aligned with
                  their business goals.`,
  },
  {
    title: "Innovation-Driven Solutions",
    icon: HiOutlineLightBulb,
    description: `Innovation is at the heart of everything we do. We apply the
                  latest technologies and creative problem-solving to develop
                  solutions that drive long-term growth and competitiveness.`,
  },
  {
    title: "Agile and Adaptive",
    icon: GrSync,
    description: `Our agile approach keeps us flexible and ready to adapt to
                  changing needs. This method allows us to deliver scalable
                  solutions that grow alongside your business.`,
  },
];

export const services = [
  {
    title: "Cloud Computing Services",
    description:
      "Secure and scalable cloud solutions tailored to fit your business needs, enabling seamless data access and collaboration from anywhere.",
    icon: WiDayCloudyGusts,
  },
  {
    title: "Quality Assurance",
    description:
      "Protect your business with robust cybersecurity solutions that safeguard data and prevent unauthorized access, ensuring peace of mind.",
    icon: BsShieldLock,
  },
  {
    title: "Custom Software Development",
    description:
      "Develop custom software solutions that enhance efficiency and align perfectly with your business processes and goals.",
    icon: FaCode,
  },
  {
    title: "IT Consulting",
    description:
      " Leverage our expertise to make strategic IT decisions that drive growth and optimize your technology investments.",
    icon: FaRegLightbulb,
  },
  {
    title: "Quality Assurance",
    description:
      "Turn raw data into actionable insights with advanced analytics that inform smarter business decisions.",
    icon: BsBarChartLine,
  },
  {
    title: "Dev Ops",
    description:
      "Optimize your business connectivity with reliable, high-speed network infrastructure solutions designed to keep your operations seamless and resilient.",
    icon: IoGitNetworkSharp,
  },
];

export const portfolio = [
  {
    title: "Secure E-Commerce Platform",
    description:
      "Developed a high-performance e-commerce platform with advanced security features, enabling safe and seamless transactions for customers worldwide.",
    image: portfolio1,
  },
  {
    title: "Cloud Migration for a Global Company",
    description:
      "Successfully migrated a global company’s data to a secure, scalable cloud environment, improving access and reducing costs.",
    image: portfolio2,
  },
  {
    title: "Block Chaining",
    description:
      "Created a real-time analytics dashboard that provides actionable insights, helping businesses make data-driven decisions quickly.",
    image: portfolio3,
  },
  {
    title: "Custom CRM Solution for Client Management",
    description:
      "Designed a custom CRM system to improve client interactions, streamline workflows, and manage leads effectively.",
    image: portfolio4,
  },
  {
    title: "App Development",
    description:
      "Built an App for security monitoring system that detects and responds to threats in real time, ensuring robust protection for client data.",
    image: portfolio5,
  },
  {
    title: "High-Speed Network Infrastructure for Corporate Office",
    description:
      "Implemented a high-speed network infrastructure to boost productivity and connectivity in a large corporate office.",
    image: portfolio6,
  },
];

export const contactInfo = [
  {
    title: "Email Us",
    description: "Fast and Reliable Support",
    value: "info@metalogic.com.np",
    icon: MdOutlineAlternateEmail,
  },
  {
    title: "Our Address",
    description: "Come visit us in our office",
    value: "Saptakhel, Lalitpur (Head office)",
    icon: FaLocationCrosshairs,
  },
  {
    title: "Phone number",
    description: "Give Us a call",
    value: "+977-9851353599",
    icon: FiPhoneCall,
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com",
  },

];
export const blogPost = [
  {
    title:
      "Transforming BlockChain: How MetaLogic is Empowering Better Patient Outcomes",
    content:
      "This blog post explores metaLogic impact on blockchain through AI-powered solutions, such as predictive analytics and machine learning tools that help medical professionals make data-driven decisions and optimize patient care.",
    image: blog1,
  },
  {
    title:
      "Protecting Businesses from Cyber Threats:MetaLogic Approach to Modern Cybersecurity",
    content:
      "Discuss TechSolution cybersecurity solutions, highlighting advanced threat detection, machine learning in threat analysis, and proactive defense strategies that businesses can adopt to secure their data in an increasingly digital landscape.",
    image: blog2,
  },
  {
    title:
      "Building  Better App: MetaLogic Vision for Smart App Development",
    content:
      "This blog post dives into how MetaLogic is leveraging IoT to enable smart APP infrastructure. Discuss App’s role in making cities more efficient, sustainable, and data-centric, with examples of how MetaLogic solutions have been implemented in app development projects.",
    image: blog3,
  },
];




export const technologyUsed = [
  {
    content:
      "HTML is the foundation of our web development projects, enabling the creation of well-structured web pages and applications.",
    name: "HTML",
    jobTitle: "Markup Language",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    content:
      "CSS is used to design the look and feel of our web projects, providing the layout, colors, fonts, and overall style of the page.",
    name: "CSS",
    jobTitle: "Style Sheet Language",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    content:
      "JavaScript allows us to create dynamic and interactive elements on our websites, enhancing user experience through real-time updates and interactivity.",
    name: "JavaScript",
    jobTitle: "Programming Language",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    content:
      "React.js is a powerful JavaScript library used to build user interfaces, helping us create fast and efficient web applications with reusable components.",
    name: "React.js",
    jobTitle: "JavaScript Library",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    content:
      "Express.js is a web application framework for Node.js, allowing us to build scalable and efficient back-end solutions for our web applications.",
    name: "Express.js",
    jobTitle: "Web Framework",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    content:
      "Node.js powers the server-side functionality of our applications, enabling non-blocking, event-driven architecture for scalable network applications.",
    name: "Node.js",
    jobTitle: "JavaScript Runtime",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
];


export const footer = [
  {
    title: "Go to",
    subRoutes: [
      {
        title: "About Us",
        id: "about",
      },
      {
        title: "Services",
        id: "services",
      },
      {
        title: "Testimonials",
        id: "testimonials",
      },
      {
        title: "Portfolio",
        id: "portfolio",
      },
    ],
  },
  {
    title: "Services",
    subRoutes: [
      {
        title: "Cloud Solutions",
        id: "",
      },
      {
        title: "Cybersecurity",
        id: "",
      },
      {
        title: "Software Development",
        id: "",
      },
      {
        title: "IT Consulting",
        id: "",
      },
    ],
  },
];
