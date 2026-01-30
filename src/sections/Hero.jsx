import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const intros = [
  { hi: "Hi, I'm", name: "Hung Son Le", role: "Software Engineer" },
  { hi: "Xin chào, mình là", name: "Lê Hùng Sơn", role: "Kỹ sư phần mềm" },
  { hi: "Halo, saya", name: "Le Hung Son", role: "Insinyur Perangkat Lunak" },
];

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="flex items-start gap-4 w-full">
              {/* avatar */}
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full blur-md bg-white-50/30" />
                <div className="relative rounded-full p-[2px] bg-[#070B14] ring-1 ring-[#070B14] overflow-hidden">
                  <img
                    src="/images/profile.png"
                    alt="Hung Son Le"
                    className="xl:size-80 md:size-20 size-16 rounded-full object-cover scale-110 object-[30%_50%]"
                  />
                </div>

              </div>
              <div className="intro-slide">
                <div className="intro-wrapper">
                  {intros.map((item, idx) => (
                    <div key={idx} className="intro-item">
                      <p className="text-white-50 text-sm md:text-base">{item.hi}</p>
                      <p className="text-white font-semibold text-lg md:text-xl">{item.name}</p>
                      <p className="text-white-50/70 text-xs md:text-sm">{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Son, a software developer based in Sydney with a passion for
              code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      {/*<AnimatedCounter />*/}
    </section>
  );
};

export default Hero;
