import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AgenceCarousel() {
  useGSAP(() => {
    gsap.to("body", {
      background:"black",
      color:"white",
      scrollTrigger: {
        trigger: ".carousel-container",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
      },
    });
    gsap.to("#logo-path", {
      fill:"white",
      duration: 2,
      scrollTrigger: {
        trigger: ".carousel-container",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
      },
    });
    gsap.to(".carousel-image", {
      scrollTrigger: {
        start: "top top",
        end: "bottom top",
        trigger: ".carousel-image",
        pin: true,
      },
    });
    gsap.to(".carousel-image1", {
      scrollTrigger: {
        start: "top top",
        end: "bottom top",
        trigger: ".carousel-image1",
        pin: true,
      },
    });

    gsap.to(".carousel-scroll", {
      opacity: 0,
      duration: 4,
      scrollTrigger: {
        trigger: ".carousel-scroll",
        start: "top 10%",
        end: "top top",
        scrub: true,
      },
    });
    gsap.to(".carousel-scroll1", {
      opacity: 0,
      duration: 4,
      scrollTrigger: {
        trigger: ".carousel-scroll1",
        start: "top 10%",
        end: "top top",
        scrub: true,
      },
    });
  });
  return (
    <div className="overflow-hidden carousel-container w-full">
      <div className="flex flex-col gap-2 font-[font2] uppercase">
        <div className="relative flex justify-center items-center Carousel-image-div1">
          <div className="absolute top-[25%] w-full h-full carousel-scroll">
            <div className="flex  h-fit shrink-0">
              <div className="flex justify-start w-[100vw] shrink-0 moveRight">
                <h2 className="text-[#d3fd50] text-[8vw] leading-[0.9] ">
                  camille
                </h2>
              </div>
              <div className="flex justify-start w-[100vw] shrink-0 moveRight">
                <h2 className="text-[#d3fd50] text-[8vw] leading-[0.9] ">
                  camille
                </h2>
              </div>
              <div className="flex justify-start w-[100vw] shrink-0 moveRight">
                <h2 className="text-[#d3fd50] text-[8vw] leading-[0.9] ">
                  camille
                </h2>
              </div>
            </div>
          </div>
          <img
            src="./CAMILLE.jpg"
            className="rounded-[40px] h-screen carousel-image"
          />
          <div className="absolute w-full top-1/2 carousel-scroll flex">
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                briere
              </h2>
              <p className="text-white text-[2vw]">Conceptrice-redactrice</p>
            </div>
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                briere
              </h2>
              <p className="text-white text-[2vw]">Conceptrice-redactrice</p>
            </div>
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                briere
              </h2>
              <p className="text-white text-[2vw]">Conceptrice-redactrice</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center Carousel-image-div2">
          <div className="absolute top-[25%] w-full h-full carousel-scroll1">
            <div className="flex  h-fit shrink-0">
              <div className="flex justify-start w-[100vw] shrink-0 moveRight">
                <h2 className="text-[#d3fd50] text-[8vw] leading-[0.9] ">
                  Chantal
                </h2>
              </div>
              <div className="flex justify-start w-[100vw] shrink-0 moveRight">
                <h2 className="text-[#d3fd50] text-[8vw] leading-[0.9] ">
                  Chantal
                </h2>
              </div>
              <div className="flex justify-start w-[100vw] shrink-0 moveRight">
                <h2 className="text-[#d3fd50] text-[8vw] leading-[0.9] ">
                  Chantal
                </h2>
              </div>
            </div>
          </div>
          <img
            src="./ChantalG.jpg"
            className="rounded-[40px] h-screen carousel-image1"
          />
          <div className="absolute w-full top-1/2 carousel-scroll1 flex">
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                gobeil
              </h2>
              <p className="text-white text-[2vw]">Directrice de creation</p>
            </div>
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                gobeil
              </h2>
              <p className="text-white text-[2vw]">Directrice de creation</p>
            </div>
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                gobeil
              </h2>
              <p className="text-white text-[2vw]">Directrice de creation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgenceCarousel;
