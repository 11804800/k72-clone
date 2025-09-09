import React, { useContext, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AppContext } from "../Context/Context";

function HoverEffect() {
  const StairParent = useRef();

  const { isLoading } = useContext(AppContext);

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.to(".loading", {
      height: "8px",
      repeat: -1,
      delay: 0.2,
      ease: "power2.inOut",
      yoyo: true,
    });
    gsap.to(".loading1", {
      height: "4px",
      repeat: -1,
      ease: "power2.inOut",
      delay: 0.4,
      yoyo: true,
    });
    gsap.to(".loading2", {
      height: "12px",
      repeat: -1,
      ease: "power2.inOut",
      delay: 0.6,
      yoyo: true,
    });
    gsap.to(".loading3", {
      height: "10px",
      repeat: -1,
      ease: "power2.inOut",
      delay: 0.8,
      yoyo: true,
    });
    gsap.to(".loading4", {
      height: "9px",
      repeat: -1,
      ease: "power2.inOut",
      delay: 1.1,
      yoyo: true,
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: 0.5,
      },
      duration: 1,
    });
  });

  return (
      <div className="relative z-[999]">
        <div className="w-fit py-2 px-2 h-fit fixed top-0 left-1 z-[9999]">
          <svg
            id="logo"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="113"
            height="50"
            viewBox="0 0 103 44"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
        <div ref={StairParent} className="fixed h-screen w-full top-0 z-[999]">
          <div className="w-full h-full flex">
            <div className="stair w-1/5 h-full bg-black"></div>
            <div className="stair w-1/5 h-full bg-black"></div>
            <div className="stair w-1/5 h-full bg-black"></div>
            <div className="stair w-1/5 h-full bg-black"></div>
            <div className="stair w-1/5 h-full bg-black"></div>
          </div>
        </div>
        <div className="z-[9999] w-17 self-end items-end h-9 flex fixed bottom-5 right-4">
          <span className="w-[25%]  loading h-full bg-white "></span>
          <span className="w-[25%]  loading1 h-full bg-white "></span>
          <span className="loading2  w-[25%] h-full bg-white"></span>
          <span className="loading3  w-[25%] h-full bg-white "></span>
          <span className="loading4  w-[25%] h-full bg-white"></span>
        </div>
      </div>
  );
}

export default HoverEffect;
