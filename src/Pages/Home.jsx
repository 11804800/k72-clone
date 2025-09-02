import React from "react";
import Video from "../Components/home/Video";
import HomeBottom from "../Components/home/HomeBottom";
import HomeHero from "../Components/home/HomeHero";

function Home() {
  return (
    <div className="flex flex-col relative">
      <div className="fixed top-0 left-0 h-screen w-full">
        <Video/>
      </div>
      <div className="relative z-50 text-white h-screen w-full flex flex-col justify-between">
        <HomeHero />
        <HomeBottom />
      </div>
    </div>
  );
}

export default Home;
