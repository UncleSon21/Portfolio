const navLinks = [
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Blog",
    link: "#blog"
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 36, suffix: "%", label: "Completed KPI" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "TypeScript",
    modelPath: "/models/ts-logo.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];
const blogPosts = [
  {
    title: "Integrating Stripe and Resend into VaniaFlorist",
    subtitle: "Payments, transactional email, and what actually tripped me up",
    tag: "VaniaFlorist",
    date: "2025",
    imgPath: "/images/exp-vaniaflorist.png",
    link: "#",
    excerpt:
      "A walkthrough of wiring up Stripe Checkout and Resend for order confirmation emails — including the edge cases and gotchas that don't show up in the docs.",
  },
  {
    title: "Understanding RAG Pipelines from Scratch",
    subtitle: "How I built CobbyIQ's AI knowledge engine and what I learned",
    tag: "CobbyIQ",
    date: "2026",
    imgPath: "/images/exp-cobbyiq.png",
    link: "#",
    excerpt:
      "Retrieval-Augmented Generation sounds complex until you break it down. Here is how I went from reading papers to building a working document Q&A pipeline.",
  },
  {
    title: "Deploying CobbyIQ: From Local to Production",
    subtitle: "The infrastructure decisions, mistakes, and tradeoffs along the way",
    tag: "CobbyIQ",
    date: "2026",
    imgPath: "/images/exp-cobbyiq.png",
    link: "#",
    excerpt:
      "Shipping a SaaS product solo means owning every layer of deployment. This is what I learned about hosting, environment config, and keeping things stable under real traffic.",
  },
  {
    title: "Trying to Understand the SaaS Market as a Developer",
    subtitle: "What I got wrong about building a product people actually want",
    tag: "CobbyIQ",
    date: "2026",
    imgPath: "/images/exp-cobbyiq.png",
    link: "#",
    excerpt:
      "Writing code is the easy part. Figuring out positioning, ICP, and whether anyone will pay for what you built — that is the harder lesson I am still working through.",
  },
  {
    title: "Polishing VaniaFlorist's Design",
    subtitle: "UI refinements, seasonal theming, and the details that change the feel",
    tag: "VaniaFlorist",
    date: "2025",
    imgPath: "/images/exp-vaniaflorist.png",
    link: "#",
    excerpt:
      "A florist store should feel alive and seasonal. This post covers the design iterations I ran on VaniaFlorist — from layout tweaks to experimenting with themes that shift with the time of year.",
  },
];
const expCards = [
    {
    review:
      "CobbyIQ is a clean, well-executed SaaS product. The AI integration is smooth, the UX is thoughtful, and it solves a real problem for growing teams. Strong founder execution from concept to launch.",
    imgPath: "/images/exp-cobbyiq.png",
    logoPath: "/images/logo-cobbyiq.png",
    title: "Founder / AI Full Stack Developer",
    date: "2025 - Present",
    responsibilities: [
      "Founded and built CobbyIQ — an AI-powered knowledge management SaaS that lets teams upload docs and get instant, sourced answers from an AI teammate.",
      "Architected and developed the full product: AI document ingestion pipeline, semantic search, and Q&A engine with accurate page-level citations.",
      "Designed and built the full frontend, branding, and landing page with a focus on clean UX and clear product storytelling.",
    ],
  },
  {
    review:
      "Son was reliable and quick to ship. He helped deliver key dashboard features and made the metrics easier to understand with clean UI and clear data presentation.",
    imgPath: "/images/DigiWizeLogo.svg",
    logoPath: "/images/DigiWizeLogo.svg",
    title: "Software Engineer Intern (Full Stack)",
    company: "DigiWize",
    link: "https://digiwize.solutions",
    date: "2024 - 2025",
    responsibilities: [
      "Built features for an engineering analytics dashboard, including key DORA metrics visualizations.",
      "Worked in a small team using TypeScript/React and backend services to deliver end-to-end functionality.",
      "Collaborated with teammates to implement reusable components and improve overall UI consistency.",
    ],
  },
    {
    review:
      "Son built a modern florist e-commerce site with strong attention to UI detail and user experience. The project shows real product thinking and strong front-end skills.",
    imgPath: "/images/exp-vaniaflorist.png",
    logoPath: "/images/logo-vaniaflorist.png",
    title: "Founder / Full Stack Developer",
    date: "2025 - Present",
    responsibilities: [
      "Designed and built a full florist e-commerce web app with product search, filter, cart, and clean product pages.",
      "Implemented a scalable TypeScript codebase with reusable UI components and smooth animations.",
      "Completed full build and preparing for deployment as a real business launch.",
    ],
  },
  {
    review:
      "Son handled support requests calmly and professionally, resolving issues quickly and communicating clearly with users. He was dependable and easy to work with.",
    imgPath: "/images/exp_uow.png",
    logoPath: "/images/exp_uow.png",
    title: "IT Support Technician",
    date: "2023 - 2024",
    responsibilities: [
      "Provided technical support for staff and students, troubleshooting hardware, software, and connectivity issues.",
      "Managed tickets, documented fixes, and escalated complex issues when required.",
      "Helped improve support efficiency by standardizing common troubleshooting steps and notes.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/sonnyl__/"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "https://www.facebook.com/son.hung.3538039/"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://linkedin.com/in/son-le-9b8546266"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  blogPosts
};
