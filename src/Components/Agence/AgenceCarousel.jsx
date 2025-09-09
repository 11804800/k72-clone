import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function AgenceCarousel() {
  useGSAP(() => {
    gsap.to("body", {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: ".Carousel-Container",
        start: "top 80%",
        end: "top 80%",
        scrub: true,
      },
    });
    gsap.to("#logo-path", {
      fill: "white",
      scrollTrigger: {
        trigger: ".Carousel-Container",
        start: "top 80%",
        end: "top 80%",
        scrub: true,
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

    gsap.to(".Carousel-image-1", {
      scrollTrigger: {
        trigger: ".Carousel-image-1",
        pin: true,
        scrub: true,
        start: "top top",
        end: "bottom top",
      },
    });
    gsap.to(".Carousel-image-2", {
      scrollTrigger: {
        trigger: ".Carousel-image-2",
        pin: true,
        scrub: true,
        start: "top top",
        end: "bottom top",
      },
    });
  });

  return (
    <div className="Carousel-Container mt-[10vw] overflow-hidden">
      <div className="flex flex-col gap-1 w-full h-full uppercase font-[font2]">
        <div className="flex relative justify-center ">
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
          <div className="Carousel-image-1 overflow-hidden rounded-[40px] sm:h-screen w-[55vw] md:w-[500px] object-cover h-[400px] bg-image bg-[url('blank.jpg')]">
            <img
              src="./CAMILLE.jpg"
              className="w-[55vw] md:w-[500px] h-full object-contain"
            />
          </div>
          <div className="absolute w-full top-1/2 carousel-scroll flex">
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                briere
              </h2>
              <p className="text-white text-[14px] md:text-[2vw]">
                Conceptrice-redactrice
              </p>
            </div>
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                briere
              </h2>
              <p className="text-white text-[14px] md:text-[2vw]">
                Conceptrice-redactrice
              </p>
            </div>
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                briere
              </h2>
              <p className="text-white text-[14px] md:text-[2vw]">
                Conceptrice-redactrice
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
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
          <div className="Carousel-image-2 rounded-[40px] sm:h-screen w-[55vw] md:w-[500px] object-cover h-[400px] bg-image bg-[url('blank.jpg')]">
            <img
              src="./ChantalG.jpg"
              className="w-[55vw] md:w-[500px] h-full object-contain"
            />
          </div>
          <div className="absolute w-full top-1/2 carousel-scroll1 flex">
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                gobeil
              </h2>
              <p className="text-white text-[14px] md:text-[2vw]">
                Directrice de creation
              </p>
            </div>
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                gobeil
              </h2>
              <p className="text-white text-[14px] md:text-[2vw]">
                Directrice de creation
              </p>
            </div>
            <div className="flex items-end gap-24 shrink-0 w-[100vw] moveLeft">
              <h2 className="text-[#d3fd50] text-[8vw] leading-[0.8]">
                gobeil
              </h2>
              <p className="text-white text-[14px] md:text-[2vw]">
                Directrice de creation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgenceCarousel;
