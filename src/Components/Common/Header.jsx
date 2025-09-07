import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navigation/Navbar";

function Header({ children }) {
  const StairparentRef = useRef();
  const Appref = useRef();
  const RouteName = useLocation();

  const currentPath = useLocation().pathname;

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(StairparentRef.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.from(".navbar", {
      scale: 1.2,
      opacity: 0,
    });

    // if (RouteName.pathname != "/") {
    //   tl.from(".nav-div", {
    //     height: 0,
    //     stagger: {
    //       amount: -0.1,
    //     },
    //     duration: 0.59,
    //     delay: 0.2,
    //   });

    // }
    tl.from(Appref.current, {
      opacity: 0,
    });

    // if (RouteName.pathname != "/") {
    //   tl.from(".nav-div", {
    //     height: 0,
    //     stagger: {
    //       amount: -0.1,
    //     },
    //     duration: 0.89,
    //     delay: 0.12,
    //   });
    // }

    tl.to(StairparentRef.current, {
      display: "none",
    });

    tl.to(".stair", {
      y: "0%",
    });
  }, [currentPath]);

  return (
    <div className="relative z-[1] ">
      <div
        ref={StairparentRef}
        className="h-screen fixed top-0 w-full z-[9999]"
      >
        <div className="flex w-full h-full">
          <div className="w-1/5 stair h-full bg-black"></div>
          <div className="w-1/5 stair h-full bg-black"></div>
          <div className="w-1/5 stair h-full bg-black"></div>
          <div className="w-1/5 stair h-full bg-black"></div>
          <div className="w-1/5 stair h-full bg-black"></div>
        </div>
      </div>
      <Navbar />
      <div ref={Appref}>{children}</div>
    </div>
  );
}

export default Header;
