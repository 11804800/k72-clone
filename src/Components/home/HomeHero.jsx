import React from "react";
import Video from "./Video";

function HomeHero() {
  return (
    <div className="relative flex font-[font2] justify-center text-center mt-[20vw] md:mt-[10vw] lg:mt-0 pt-5 w-full">
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
        L'étincelle
        <div className="lg:text-[9.5vw] text-[12vw] flex items-center">
          qui
          <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden">
            <Video/>
          </div>
          génère
        </div>
        la créativité
      </div>
      <div></div>
    </div>
  );
}

export default HomeHero;
