"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    fullScreen: { enable: false }, 
    background: {
      color: { value: "transparent" }, 
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",  
        },
      },
      modes: {
        grab: {
          distance: 150,
          links: { opacity: 0.5 },
        },
      },
    },
    particles: {
      color: { value: "#a78bfa" }, 
      links: {
        color: "#a78bfa",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60,
      },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="h-full w-full absolute inset-0"
        options={options}
      />
    );
  }

  return null;
};

export default ParticlesBackground;