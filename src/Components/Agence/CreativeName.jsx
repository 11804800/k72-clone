import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

function CreativeName() {
  
  const [hovering, setHovering] = useState(false);
  const [ImageIndex, setImage] = useState("../SophieA.jpg");

  const ImageDivRef = useRef();
  const ImageRef = useRef();

  useGSAP(() => {
    gsap.to(ImageDivRef.current, {
      scrollTrigger: {
        trigger: ImageDivRef.current,
        start: "top 20%",
        end: "bottom -15%",
        pin: true,
      },
    });
  });

  useGSAP(() => {
    if (ImageDivRef.current) {
      gsap.to(ImageDivRef.current, {
        width: hovering ? "320px" : 0,
        duration: 0.3,
      });
    }
  }, [hovering]);

  useGSAP(() => {
    if (ImageRef.current) {
      gsap.set(ImageRef.current, { transformOrigin: "left" });
      gsap.fromTo(
        ImageRef.current,
        {
          width: "0",
        },
        {
          width: "100%",
          duration: 0.25,
        }
      );
    }
  }, [ImageIndex]);

  function MouseEnter() {
    setHovering(true);
  }

  function MouseLeave() {
    setHovering(false);
  }
  return (
    <div className="flex flex-col bg-black text-white py-1 relative">
      <div
        onMouseLeave={MouseLeave}
        onMouseEnter={MouseEnter}
        className="font-[font2] mt-[10vw] relative"
      >
        <div
          ref={ImageDivRef}
          className="image-div overflow-hidden drop-shadow-2xl origin-left w-[320px] h-[500px] rounded-4xl absolute left-1/3  text-3xl bg-image bg-cover bg-center bg-[url('blank.jpg')] z-[9999]"
        >
          <img
            ref={ImageRef}
            src={ImageIndex}
            className="w-full origin-left h-full object-cover"
            alt=""
          />
        </div>
        <div onMouseEnter={() => setImage("../SophieA.jpg")} className="flex justify-between border-y border-zinc-500 py-2 relative z-[99] group hover:text-black" >
          <p className="text-[1.25vw] px-2 relative z-[99] ">Conseillere</p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99] ">
            shophie auger
          </p>
          <div  className="bg-[#d3fd50] w-full absolute transition-all duration-200 group-hover:h-full h-0 top-0 z-[9]" ></div>
        </div>
        <div  onMouseEnter={() => setImage("../Carl.jpg")} className="flex justify-between border-b border-zinc-500  py-2 relative group hover:text-black  z-[99]" >
          <p className="text-[1.25vw] px-2 relative z-[99]">
            Directeur principal
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            carl godbout
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../CAMILLE.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]" >
          <p className="text-[1.25vw] px-2 relative z-[99]">
            Conceptrice-redactrice
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            camille briere
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../Pierre.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]" >
          <p className="text-[1.25vw] px-2 relative z-[99]">
            VPP et directeur general
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            pierre-luc paiment
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../Michele.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">
            Directrice artistique
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            michele riendeau
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../MEGGIE.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">
            Directrice de la strategie
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            meggie lavoie
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../MAXIME.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">
            Directrice conseil
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            alex sauvageau
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../Roy.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">
            Directeur artistique
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            philippe
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../MEL.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">Conseiller</p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            beatrice roussin
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../MyleneS.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">Stratege</p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            Lou gravel-jean
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage(  "../Claire.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">Conseillere</p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            Helene conti
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../Lawrence.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">Coordonatrice</p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            lawrence meunier
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../Isabelle.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">
            Directrice principale
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            isabelle beauchemin
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../HugoJoseph.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">
            Directeur de creation ajdoint
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            hugo joseph
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../Olivier.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">
            Designer graphique
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            olivier duclos
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../joel.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">
            Directeur de creation adjoint
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            Joel letarte
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
        <div onMouseEnter={() => setImage("../ChantalG.jpg")} className="flex justify-between border-b border-zinc-500 py-2 relative group hover:text-black z-[99]">
          <p className="text-[1.25vw] px-2 relative z-[99]">
            Directrice de creation
          </p>
          <p className="text-[2.5vw] uppercase px-2 relative z-[99]">
            Chantal gobeil
          </p>
          <div className="bg-[#d3fd50] w-full absolute transition-all duration-200 top-0 group-hover:h-full h-0 z-[9]"></div>
        </div>
      </div>
    </div>
  );
}

export default CreativeName;
