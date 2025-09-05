import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AgenceScroll() {
  useGSAP(() => {
    gsap.to(".Agence-scroll1", {
      scrollTrigger: {
        trigger: ".Agence-scroll1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
    gsap.to(".Agence-scroll2", {
      scrollTrigger: {
        trigger: ".Agence-scroll2",
        start: "top top",
        end: "bottom -50%",
        scrub: true,
        pin: true,
      },
    });
    gsap.to(".Agence-scroll3", {
      scrollTrigger: {
        trigger: ".Agence-scroll3",
        start: "top top",
        end: "bottom -50%",
        scrub: true,
        pin: true,
        markers:true
      },
    });
  });

  return (
    <div className="py-1  w-full mb-[50vw]">
      <div className="mt-[10vw] w-full agence-scroller flex flex-col gap-1">
        <div className="group Agence-scroll1 h-screen overflow-hidden rounded-[40px] relative ">
          <img
            src="../image10.jpg"
            className="w-full rounded-[40px] transition-all duration-400 group-hover:scale-105"
          />
          <div className="absolute text-white font-[font2] top-0 h-full group-hover:bg-black/15 z-[999] w-full flex flex-col justify-center items-center">
            <p className="text-[3vw]">Lamejure</p>
            <h1 className="text-[6vw] group-hover:underline transition-all duration-200">
              Lamejure
            </h1>
          </div>
        </div>
        <div className="group Agence-scroll2 h-screen overflow-hidden rounded-[40px] relative">
          <img
            src="../image13.jpg"
            className="w-full rounded-[40px] transition-all duration-400 group-hover:scale-105"
          />
          <div className="absolute text-white font-[font2] top-0 h-full group-hover:bg-black/15 z-[999] w-full flex flex-col justify-center items-center">
            <p className="text-[3vw]">GardaWorld</p>
            <h1 className="text-[6vw] group-hover:underline transition-all duration-200">
              Crisis24
            </h1>
          </div>
        </div>
        <div className="group Agence-scroll3 h-screen overflow-hidden rounded-[40px] relative">
          <img
            src="../image16.jpg"
            className="w-full group-hover:scale-105 rounded-[40px] transition-all duration-400 "
          />
          <div className="absolute text-white font-[font2] top-0 h-full group-hover:bg-black/15 z-[999] w-full flex flex-col justify-center items-center">
            <p className="text-[3vw]">Lassonde</p>
            <h1 className="text-[6vw] group-hover:underline transition-all duration-200">
              Fruite
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgenceScroll;
