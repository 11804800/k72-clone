import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

const ImageArray = [
  "/Carl.jpg",
  "/Olivier.jpg",
  "/Lawrence.jpg",
  "/HugoJoseph.jpg",
  "/ChantalG.jpg",
  "/MyleneS.jpg",
  "/SophieA.jpg",
  "/Claire.jpg",
  "/Michele.jpg",
  "/MEL.jpg",
  "/CAMILLE.jpg",
  "/MAXIME.jpg",
  "/MEGGIE.jpg",
  "/joel.jpg",
];
function Agence() {
  const [imageCount, setImageCount] = useState(0);
  const ImageRef = useRef();

  useGSAP(() => {
    gsap.to(ImageRef.current, {
      x: 10,
      duration: 1,
      scrollTrigger: {
        trigger: ImageRef.current,
        start: "top 28%",
        end: "top -130%",
        pin: true,
        pinType: "transform",
        pinSpacing: true,
        pinReparent: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let index;
          if (elem.progress < 1) {
            index = Math.floor(elem.progress * ImageArray.length);
          } else {
            index = ImageArray.length - 1;
          }
          setImageCount(index);
        },
      },
    });
  });

  return (
    <div>
      <div className="section1 py-1">
        <div>
          <div
            ref={ImageRef}
            className="h-[20vw] w-[15vw] absolute top-40 left-[30%] overflow-hidden bg-amber-800 rounded-2xl"
          >
            <img src={ImageArray[imageCount]} />
          </div>
          <div className="z-[999] relative">
            <div className="mt-[55vh]">
              <h1 className="font-[font2] text-[20vw] text-center uppercase leading-[15vw]">
                Soixan7e
                <br /> Twelve{" "}
              </h1>
            </div>
            <div className="pl-[40%] mt-20 h-screen">
              <p className="text-[4vw] tracking-tighter leading-[4vw] font-[font2]">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Our curiosity feeds our creativity. We remain humble and
                we say No to big egos, even yours. A brand is alive. She has
                values, a personality, a story. If we forget that, we can make
                good numbers in the short term, but we kill it in the long term.
                That's why we're committed to giving perspective, to build
                influential brands.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">
        <div className="flex justify-between">
          <div>
            <p>Expertise</p>
          </div>
          <div>
            <p>Stratégie</p>
            <p>Publicité</p>
            <p>Branding</p>
            <p>Design</p>
            <p>Contenu</p>
          </div>
        </div>
        <div className="w-full flex ">
          <div>
            <p>
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes.
            </p>
          </div>
          <div>
            <p>
              Notre création_ bouillonne dans un environnement où le talent a le
              goût d’exploser. Où on se sent libre d’être la meilleure version
              de soi-même.
            </p>
          </div>
          <div>
            <p>
              Notre culture_ c’est l’ouverture aux autres. Point. Tout
              l’équipage participe à bâtir une agence dont on est fiers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agence;
