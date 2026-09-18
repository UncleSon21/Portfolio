# Hung Son Le — Portfolio

Personal portfolio of Hung Son Le, a Sydney-based software engineer working on AI products and full-stack web apps.

It covers my work experience (Earned Media, CobbyIQ, DigiWize, Amateur Florist, University of Wollongong), skills, projects and writing, with an interactive 3D scene built in React Three Fiber.

## Tech stack

- React 19 + Vite
- React Router (writing posts at `/blog/:slug`)
- Three.js, React Three Fiber and Drei for the 3D scenes
- GSAP + ScrollTrigger for scroll animations
- Tailwind CSS v4
- EmailJS for the contact form

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

### Contact form

The contact form sends through [EmailJS](https://www.emailjs.com/). Create a `.env` file in the project root (and add the same variables in Vercel):

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

Without them the form shows an error message instead of sending.

## Project structure

- `src/constants/index.js` holds all content: experience, projects, writing posts, skills and the client logo bar
- `src/sections/` has one component per page section
- `src/components/models/` has the 3D scenes; each is wrapped in `SceneErrorBoundary` so a failed model load never blanks the page
- `public/images` and `public/models` hold the images and 3D models

## Deployment

Deployed on Vercel. `vercel.json` rewrites routes to `index.html` so direct links to writing posts work.
