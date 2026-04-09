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
const myProjects = [
  {
    title: "Siamese Neural Network — Employee Verification",
    subtitle: "Face verification microservice built for CobbyIQ",
    description:
      "A Siamese neural network that verifies employee identity by comparing a live face capture against a registered reference image. Built as a microservice for CobbyIQ to ensure only authorised users can access the workspace.",
    imgPath: "/images/exp-cobbyiq.png",
    link: "https://github.com/UncleSon21/Siamese-Neural-Network",
    tags: ["Python", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Liveness Detection — Anti-Spoofing",
    subtitle: "Photo spoofing detection microservice built for CobbyIQ",
    description:
      "A liveness detection model that identifies photo spoofing attempts — catching cases where someone holds up a printed photo to bypass face verification. Works in tandem with the Siamese network as a security layer for CobbyIQ.",
    imgPath: "/images/exp-cobbyiq.png",
    link: null,
    tags: ["Python", "Computer Vision", "Security"],
  },
]
const blogPosts = [
  {
    slug: "stripe-and-resend-vaniaflorist",
    title: "Integrating Stripe and Resend into VaniaFlorist",
    subtitle: "Payments, transactional email, and what actually tripped me up",
    tag: "VaniaFlorist",
    date: "2025",
    imgPath: "/images/exp-vaniaflorist.png",
    excerpt:
      "A walkthrough of wiring up Stripe Checkout and Resend for order confirmation emails — including the edge cases and gotchas that don't show up in the docs.",
    content: `
## Why Stripe and Resend

Every e-commerce product needs two things that feel simple but aren't: taking money and confirming the order. I chose Stripe for payments because of its developer experience and Resend for email because it's clean, modern, and doesn't require you to configure an SMTP server from 2009.

## Setting Up Stripe Checkout

The basic Stripe Checkout flow looks simple — create a session on the server, redirect the client. The part that tripped me up was handling the \`success_url\` and \`cancel_url\` correctly with query parameters, and making sure the session ID was being passed through so I could verify the payment on the success page rather than just trusting the redirect.

I also had to be careful about idempotency. If a user clicks the checkout button twice quickly, you don't want two sessions created. Stripe's idempotency keys solve this but you have to actually use them.

## Webhook Handling

The real payments logic lives in webhooks, not in the redirect. I set up an endpoint to receive \`checkout.session.completed\` events, verify the signature with \`stripe.webhooks.constructEvent\`, and only then trigger the order confirmation email.

Testing webhooks locally with the Stripe CLI (\`stripe listen --forward-to localhost:3000/api/webhook\`) was genuinely good developer experience.

## Resend for Transactional Email

Resend's API is straightforward — you pass it a \`from\`, \`to\`, \`subject\`, and either \`html\` or a React component. I used a React Email template to keep the order confirmation styled and on-brand.

The one thing to watch: Resend requires a verified domain in production. For local dev you can send from \`onboarding@resend.dev\`, but it only goes to the account email. Plan for this before you try to demo it to someone.

## What I Learnt

Payments and email both require you to care about failure states more than the happy path. The happy path is five lines of code. The rest is: what if the webhook fires twice, what if the email fails to send, what if the user closes the tab mid-redirect. Thinking through those edge cases is the actual work.
    `,
  },
  {
    slug: "rag-pipeline",
    title: "Understanding RAG Pipelines from Scratch",
    subtitle: "How I built CobbyIQ's AI knowledge engine and what I learned",
    tag: "CobbyIQ",
    date: "2026",
    imgPath: "/images/exp-cobbyiq.png",
    excerpt:
      "Retrieval-Augmented Generation sounds complex until you break it down. Here is how I went from reading papers to building a working document Q&A pipeline.",
    content: `
## What RAG Actually Is

Retrieval-Augmented Generation (RAG) is a pattern where instead of asking an LLM to answer from memory, you first retrieve relevant chunks of text from your own data and pass them into the prompt as context. The model answers from what you give it, not from what it was trained on.

For CobbyIQ this matters a lot. Users upload their own company documents and expect accurate answers with page references — not hallucinated responses from the model's general knowledge.

## The Pipeline

The ingestion side: a document comes in, gets split into chunks, each chunk gets turned into an embedding (a vector of numbers representing meaning), and those embeddings get stored in a vector database.

The query side: the user's question gets embedded the same way, a similarity search finds the most relevant chunks, those chunks get assembled into a prompt, and the model answers using only that context.

## What Tripped Me Up

Chunking strategy matters far more than I expected. If chunks are too large you waste context window. If they're too small you lose the surrounding meaning that makes an answer accurate. I ended up using a sliding window approach with overlap so context doesn't get cut off at arbitrary boundaries.

Embedding model choice also matters. I started with a cheaper/faster model and the retrieval quality was noticeably worse for domain-specific content. Switching to a higher quality embedding model improved answer accuracy without changing anything else.

## The Part Nobody Talks About

Getting the retrieval to work is one thing. Getting it to cite the right source page is another. I store metadata alongside each chunk — document name, page number, section heading — and surface that in every response. That's what makes CobbyIQ feel trustworthy rather than just another chatbot.
    `,
  },
  {
    slug: "deploying-cobbyiq",
    title: "Deploying CobbyIQ: From Local to Production",
    subtitle: "The infrastructure decisions, mistakes, and tradeoffs along the way",
    tag: "CobbyIQ",
    date: "2026",
    imgPath: "/images/exp-cobbyiq.png",
    excerpt:
      "Shipping a SaaS product solo means owning every layer of deployment. This is what I learned about hosting, environment config, and keeping things stable under real traffic.",
    content: `
## Starting Point

Local dev is always clean. Everything is on your machine, env vars are in a \`.env\` file, and the only user is you. Going to production means every assumption you made locally gets tested.

## Infrastructure Decisions

For CobbyIQ I kept the stack deployable without ops overhead. Frontend on Vercel, backend on a managed platform that handles scaling, vector database on a managed cloud service. The goal was to ship fast without babysitting servers.

The tradeoff is cost. Managed everything is more expensive per unit than self-hosting. For an early SaaS where the priority is shipping and iterating, I think that's the right call.

## Environment Configuration

The thing that burned me first: environment variables that exist on my machine but not in the deployment environment. I now keep a \`.env.example\` file with every required key listed (values blank) and check it against the actual deployment env before pushing.

Secrets management is also different at scale. API keys in a \`.env\` file are fine locally. In production they should be in a secrets manager or at least in encrypted environment variables — not hardcoded anywhere near the repository.

## The First Real Bug

The first bug I hit in production was a timeout on large document uploads. Locally my test PDFs were small. A real user uploaded a 200-page handbook and the request timed out before processing finished.

The fix was moving the ingestion to a background job with a status endpoint the frontend polls. The upload returns immediately, processing happens async, and the user sees progress rather than a hanging spinner.

## What I Would Do Differently

Add observability from day one. Logs, error tracking, and basic uptime monitoring should be set up before the first real user — not after the first production incident. I added them reactively and it cost me time I could have spent building.
    `,
  },
  {
    slug: "understanding-saas-market",
    title: "Trying to Understand the SaaS Market as a Developer",
    subtitle: "What I got wrong about building a product people actually want",
    tag: "CobbyIQ",
    date: "2026",
    imgPath: "/images/exp-cobbyiq.png",
    excerpt:
      "Writing code is the easy part. Figuring out positioning, ICP, and whether anyone will pay for what you built — that is the harder lesson I am still working through.",
    content: `
## The Builder Trap

Developers build things because building is satisfying. The trap is confusing the satisfaction of building with validation that someone wants what you built. I spent weeks on CobbyIQ's features before I had a clear answer to "who exactly is this for and why would they pay for it."

## ICP: Ideal Customer Profile

The market for "AI knowledge management" is broad. Enterprise knowledge bases, internal wikis, onboarding tools, HR portals — all adjacent. I had to narrow down.

The answer came from thinking about the pain, not the product. The pain is: a manager at a 30-person company is answering the same five questions every week because the answers exist in documents nobody reads. That person is not an enterprise buyer. They don't want a six-month implementation. They want something that works in ten minutes.

Teams of 20–150, no dedicated IT, growing fast enough that informal knowledge transfer is breaking down. That's who CobbyIQ is for.

## Pricing Is Hard

My first instinct was to make it free and figure out monetisation later. That is almost always wrong. Free attracts users who will never pay. Charging from day one — even a small amount — tells you whether your ICP values the product enough to exchange money for it.

I'm still learning this. Pricing psychology, annual vs monthly, seat-based vs flat — there's a lot to get wrong and the only real feedback loop is talking to actual customers.

## What I'm Still Working Out

Distribution. Building the product is a solved problem for a developer. Getting it in front of the right people without a marketing budget is not. I'm experimenting with content (writing about the journey, like this), SEO, and direct outreach to small team operators. None of it is fast. All of it is necessary.
    `,
  },
  {
    slug: "polishing-vaniaflorist-design",
    title: "Polishing VaniaFlorist's Design",
    subtitle: "UI refinements, seasonal theming, and the details that change the feel",
    tag: "VaniaFlorist",
    date: "2025",
    imgPath: "/images/exp-vaniaflorist.png",
    excerpt:
      "A florist store should feel alive and seasonal. This post covers the design iterations I ran on VaniaFlorist — from layout tweaks to experimenting with themes that shift with the time of year.",
    content: `
## Why Design Matters for a Florist Store

A florist product sells emotion as much as flowers. The design has to do work that a commodity e-commerce template can't — it needs to feel considered, warm, and alive. Generic is the worst thing a florist site can be.

## The Seasonal Theme Experiment

The idea: the site's colour palette and hero imagery shift subtly based on the current season. Spring is soft greens and blush. Summer is saturated and warm. Autumn is deep amber and rust. Winter is cool, muted, with warm accent light.

Technically this is straightforward — detect the month, apply a CSS class to the root element, let custom properties cascade. The interesting part is getting the palette transitions to feel natural rather than jarring. I used CSS transitions on the custom properties themselves so switching seasons fades rather than snaps.

## Layout Iterations

The product grid went through four versions. The first was a standard three-column grid — fine but forgettable. I experimented with a masonry layout which looked editorial but made scanning difficult on mobile. The final version uses a two-column grid with an occasional full-width featured product — enough variation to feel curated without sacrificing usability.

Product cards took a similar journey. Too much information made them cluttered. Too little made them feel cheap. The right amount turned out to be: image, name, price, and one differentiator (arrangement size or occasion tag). Everything else goes on the product page.

## The Small Details

Typography weight hierarchy, button hover states, the speed of the cart slide-in animation, the empty state copy — none of these are individually important. Collectively they are what separates a product that feels finished from one that feels like a prototype. I spent more time on these than I expected and I think it shows.

## What's Left

The seasonal switching works but I want to push it further — different hero copy, different featured collections, maybe a subtle shift in the imagery tone. A florist shop that feels like it changes with the year is a genuinely different experience from one that looks the same in January and July.
    `,
  },
]
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
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/UncleSon21"
  },
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
  blogPosts,
  myProjects,
};
