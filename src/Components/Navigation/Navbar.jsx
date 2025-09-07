import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/Context";
gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const RouteName = useLocation();
  const navigate=useNavigate();
  const {setNavActive}=useContext(AppContext);

  useGSAP(() => {
    if (RouteName.pathname != "/") {
        gsap.to(".links", {
          height: 0,
          duration: 2,
          ease:"back.inOut",
          delay: 0.9,
          scrollTrigger: {
            trigger: ".app-div",
            start: "top 10%",
            end: "top 10%",
            scrub: true,
          },
        });

      gsap.to(".link-name", {
        height: 0,
        opacity:0,
        duration: 1,
        scrollTrigger: {
          trigger: ".app-div",
          start: "top 10%",
          end: "top 10%",
          scrub: true,
          invalidateOnRefresh:true
        },
      });
    }
  });



  return (
    <div className="w-full flex justify-between fixed top-0 z-[99] navbar">
      <div onClick={()=>navigate("/")} className="px-2 py-2">
        <svg
          id="logo"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="103"
          height="44"
          viewBox="0 0 103 44"
        >
          {" "}
          <path
            id="logo-path"
            fill={RouteName.pathname == "/" ? "white" : "black"}
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>{" "}
        </svg>
      </div>
      {RouteName.pathname == "/" ? (
        <div className="flex relative justify-center items-end flex-col h-14 w-[18vw] group bg-black px-4 gap-1 z-[2] ">
          <div className="bg-white w-[25%] h-[2px] group-hover:bg-black relative z-[2]"></div>
          <div className="bg-white w-[14%] h-[2px] group-hover:bg-black relative z-[2]"></div>
          <div className="absolute top-0 right-0 w-full transition-all duration-150 h-0 group-hover:h-full  bg-[#d3fd50]"></div>
        </div>
      ) : (
        <div className="flex font-[font2]  text-[14px] sm:text-[18px] lg:text-[1.2vw]">
          <div onClick={()=>navigate("/project")} className="links nav-div transition-all duration-150  min-w-[22vw] relative h-16 flex justify-start items-end bg-black text-white group">
            <p className="px-2 py-1 group-hover:text-black relative z-[2] ">
              Projets (16)
            </p>
            <div className="absolute transition-all duration-150 h-0 group-hover:h-full w-full top-0 bg-[#d3fd50]"></div>
          </div>
          <div onClick={()=>navigate("/agence")} className="links nav-div transition-all duration-150  min-w-[22vw] overflow-hidden relative h-25 flex justify-start items-end bg-black text-white group">
            <p className="px-2 py-1 group-hover:text-black relative z-[2]">
              Agence
            </p>
            <div className="absolute transition-all duration-150 h-0 group-hover:h-full w-full top-0 bg-[#d3fd50]"></div>
          </div>
          <div onClick={()=>setNavActive(true)} className="menu-link nav-div transition-all duration-150  overflow-hidden  min-w-[22vw] relative h-full flex flex-col justify-between items-end bg-black text-white group">
            <div className="flex relative justify-center items-end flex-col h-14 w-[18vw] group bg-black px-4 gap-1">
              <div className="bg-white w-[25%] h-[2px] group-hover:bg-black relative z-[2]"></div>
              <div className="bg-white w-[14%] h-[2px] group-hover:bg-black relative z-[2]"></div>
            </div>
            <div className="link-name w-full h-22 transition-all duration-150 flex justify-start items-end">
              <p className="px-2 py-1 group-hover:text-black relative z-[2]">
                Menu
              </p>
            </div>
            <div className="absolute transition-all duration-150 h-0 group-hover:h-full w-full top-0 bg-[#d3fd50]"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
