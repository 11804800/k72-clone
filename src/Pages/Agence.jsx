import React, { useState } from "react";
import CreativeName from "../Components/Agence/CreativeName";
import AgenceCarousel from "../Components/Agence/AgenceCarousel";
import AgenceScroll from "../Components/Agence/AgenceScroll";
import FooterComponent from "../Components/Navigation/FooterComponent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import Navbar from "../Components/Navigation/Navbar";
gsap.registerPlugin(ScrollTrigger);

const ImageArray = [
  "../Carl.jpg",
  "../Olivier.jpg",
  "../Lawrence.jpg",
  "../HugoJoseph.jpg",
  "../ChantalG.jpg",
  "../MyleneS.jpg",
  "../SophieA.jpg",
  "../Claire.jpg",
  "../Michele.jpg",
  "../MEL.jpg",
  "../CAMILLE.jpg",
  "../MAXIME.jpg",
  "../MEGGIE.jpg",
  "../joel.jpg",
];
function Agence() {
  const [Index, setIndex] = useState(0);
  useGSAP(() => {


    gsap.to(".agence-image-div", {
      scrollTrigger: {
        pin: true,
        trigger: ".agence-image-div",
        start: "top 30%",
        end: "top -130%",
        onUpdate: (elem) => {
          let index;
          if (elem.progress < 1) {
            index = Math.floor(elem.progress * ImageArray.length);
            setIndex(index);
          } else {
            setIndex(ImageArray.length - 1);
          }
        },
      },
    });
  });

  return (
    <div className="agence-container transition-all duration-75">
      <div className="py-1 ">
        <div className="flex app-div flex-col mt-[12vw] relative">
          <div className="agence-image-div overflow-hidden w-[230px] left-[28%] -z-10 h-[300px] bg-red-500 rounded-4xl">
            <img src={ImageArray[Index]} className="w-fullh-full " />
          </div>
          <h1 className="text-center text-[20vw] leading-[0.8] uppercase font-[font2]">
            Soixan7e <br />
            DOUZE
          </h1>
          <div className="self-end md:w-[62%] p-4">
            <p className="font-[font2] text-[3.3vw] leading-[1.1] ml-1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
        <div className="text-[1.3vw] h-screen font-[font2] flex flex-col gap-40 justify-start py-34 items-center">
          <div className="flex w-[80%] justify-between">
            <div>
              <h1>Expertise</h1>
            </div>
            <div className="w-[65%]">
              <p className="leading-[1.3]">Stratégie</p>
              <p className="leading-[1.3]">Publicité</p>
              <p className="leading-[1.3]">Branding</p>
              <p className="leading-[1.3]">Design</p>
              <p className="leading-[1.3]">Contenu</p>
            </div>
          </div>
          <div className="flex justify-center items-center w-[80%]">
            <div className="p-2 ">
              <p className="p-5">
                Nos projets_ naissent dans l’humilité, grandissent dans la
                curiosité et vivent grâce à la créativité sous toutes ses
                formes.
              </p>
            </div>
            <div className="p-2 ">
              <p className="p-5">
                Notre création_ bouillonne dans un environnement où le talent a
                le goût d’exploser. Où on se sent libre d’être la meilleure
                version de soi-même.
              </p>
            </div>
            <div className="p-2 ">
              <p className="p-5">
                Notre culture_ c’est l’ouverture aux autres. Point. Tout
                l’équipage participe à bâtir une agence dont on est fiers.{" "}
              </p>
            </div>
          </div>
        </div>
        <AgenceCarousel />
        <CreativeName />
      </div>
      <AgenceScroll />
      <FooterComponent />
    </div>
  );
}

export default Agence;
