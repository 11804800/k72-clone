import React from "react";
import Video from "../Components/home/Video";
import HomeBottom from "../Components/home/HomeBottom";
import HomeHero from "../Components/home/HomeHero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navbar from "../Components/Navigation/Navbar";


function Home() {
  useGSAP(() => {
    gsap.from(".home-container", {
      opacity: 0,
      scale: 1.2,
      delay: 1.3,
    });
  });

  return (
    <div className="home-container h-screen overflow-hidden">
      <div className="flex flex-col relative">
        <div className="fixed top-0 left-0 h-screen w-full">
          <Video />
        </div>
        <div className="relative z-50 text-white h-screen w-full flex flex-col justify-between">
          <HomeHero />
          <HomeBottom />
        </div>
      </div>
    </div>
  );
}

export default Home;
