import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/Context";

function FullScreenNav() {
  const FullNavRef = useRef();
  const navigate = useNavigate();
  const { NavActive, setNavActive } = useContext(AppContext);

  function gsapAnimation() {
    const tl = gsap.timeline();

    tl.to("#fullscreennav", {
      display: "block",
    });

    tl.to(".stairing", {
      height: "100%",
      delay:0.2,
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(FullNavRef.current, {
      opacity: 1,
      height: "100%",
    });

    tl.to(".link", {
      rotateX: 0,
      opacity: 1,
      stagger: {
        amount: 0.2,
      },
    });

    tl.to(".nav-link", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      rotateX: 90,
      opacity: 0,
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(FullNavRef.current, {
      opacity: 0,
      height: 0,
    });

    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(".nav-link", {
      opacity: 0,
    });

    tl.to("#fullscreennav", {
      display: "none",
    });
  }

  useGSAP(() => {
    if (NavActive ) {
      gsapAnimation();
    } else {
      gsapAnimationReverse();
    }
  }, [NavActive]);

  return (
    <div
      id="fullscreennav"
      className="h-screen transition-all duration-200 fixed w-full no-scrollbar z-[9]"
    >
      <div className="h-screen fixed w-full">
        <div className="flex w-full h-full">
          <div className="w-1/5 stairing h-full bg-black"></div>
          <div className="w-1/5 stairing h-full bg-black"></div>
          <div className="w-1/5 stairing h-full bg-black"></div>
          <div className="w-1/5 stairing h-full bg-black"></div>
          <div className="w-1/5 stairing h-full bg-black"></div>
        </div>
      </div>
      <div
        ref={FullNavRef}
        className="relative bg-black h-full navigation-container py-1"
      >
        <div className="flex w-full  justify-between items-start p-4 nav-link">
          <div
            onClick={() => {
              navigate("/"), setNavActive(false);
            }}
          >
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            id="close-btn"
            className="w-10 h-10 md:w-18 md:h-18 lg:w-25 lg:h-25 relative overflow-hidden"
            onClick={() => setNavActive(false)}
          >
            <div className="h-44 w-[2px] bg-white absolute -rotate-45 origin-top"></div>
            <div className="h-44 w-[2px] bg-white right-0 absolute rotate-45 origin-top"></div>
          </div>
        </div>
        <div id="all-links" className="text-white py-0 flex flex-col  h-full justify-center sm:justify-normal -mt-[20vw] sm:mt-[20vw] md:mt-[10vw] lg:mt-0">
          <div className="group link origin-top border-b border-t uppercase relative">
            <h1 className="font-[font2] leading-[0.8] pt-3 text-[8vw] text-center cursor-pointer">
              Projects
            </h1>
            <div
              onClick={() => {
                navigate("/project");
                setNavActive(false);
              }}
              className="cursor-pointer group-hover:h-full h-0 transition-all duration-150 origin-center overflow-hidden absolute flex bg-[#d3fd50] top-0 w-full text-black font-[font2]"
            >
              <div className="flex items-center gap-2 shrink-0 moveX">
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
              </div>
              <div className="flex items-center gap-2 shrink-0 moveX">
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="  group link origin-top border-b uppercase relative">
            <h1 className="font-[font2] leading-[0.8] pt-3 text-[8vw] text-center cursor-pointer">
              Agence
            </h1>
            <div
              onClick={() => {
                navigate("/agence");
                setNavActive(false);
              }}
              className="cursor-pointer group-hover:h-full h-0 transition-all duration-150 origin-center overflow-hidden absolute flex bg-[#d3fd50] top-0 w-full text-black font-[font2]"
            >
              <div className="flex items-center gap-2 shrink-0 moveX">
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
              </div>
              <div className="flex items-center gap-2 shrink-0 moveX">
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="group link origin-top border-b uppercase relative">
            <h1 className="font-[font2] leading-[0.8] pt-3 text-[8vw] text-center cursor-pointer">
              Contact
            </h1>
            <div className="cursor-pointer group-hover:h-full h-0 transition-all duration-150 origin-center overflow-hidden absolute flex bg-[#d3fd50] top-0 w-full text-black font-[font2]">
              <div className="flex items-center gap-2 shrink-0 moveX">
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
              </div>
              <div className="flex items-center gap-2 shrink-0 moveX">
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="group link origin-top border-b uppercase relative">
            <h1 className="font-[font2] leading-[0.8] pt-3 text-[8vw] text-center cursor-pointer">
              Blogue
            </h1>
            <div className="cursor-pointer group-hover:h-full h-0 transition-all duration-150 origin-center overflow-hidden absolute flex bg-[#d3fd50] top-0 w-full text-black font-[font2]">
              <div className="flex items-center gap-2 shrink-0 moveX">
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
              </div>
              <div className="flex items-center gap-2 shrink-0 moveX">
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
                <p className="text-[8vw] text-nowrap leading-[0.8] pt-3">
                  Pour Tout voir
                </p>
                <img
                  src="./nav-thumbnail.jpg"
                  className="h-[6vw] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;
