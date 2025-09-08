import React from "react";
import { Link } from "react-router-dom";

function HomeBottom() {
  return (
    <div className="font-[font2] flex items-center justify-center gap-2 ">
      <p className="absolute lg:w-[310px] w-64 right-0 bottom-20 md:bottom-35   lg:bottom-38 font-[font1] lg:text-[15px] text-xs leading-tight">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        K72 est une agence qui pense chaque action pour nourrir la marque.
        Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
        l’étincelle pour générer de l’émotion. Pour assurer une relation
        honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui
        doit être fait.
      </p>
      <div className="w-full flex justify-center font-[font2]">
        <div className="flex gap-0 md:gap-2 uppercase relative bottom-0 pb-2">
          <div className="lg:border-3 border-2  hover:text-yellow-300 hover:border-yellow-300  h-10 sm:h-12 lg:h-24 text-[6vw] px-3 md:px-8 rounded-full uppercase flex items-center">
            <Link to="/project" className="mt-1 sm:mt-2 lg:mt-6">Projects</Link>
          </div>
          <span className="px-1"></span>
          <div className="lg:border-3 border-2  hover:text-yellow-300 hover:border-yellow-300  h-10 sm:h-12 lg:h-24 text-[6vw] px-3 md:px-8 rounded-full uppercase flex items-center">
            <Link to="/agence" className="mt-1 sm:mt-2 lg:mt-6">Agence</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBottom;
