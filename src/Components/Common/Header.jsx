import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

function Header({children}) {
  const StairparentRef = useRef();
  const Appref=useRef();

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
    tl.to(StairparentRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(Appref.current,{
        opacity:0,
        scale:1.2,
        delay:1.3
    })
  }, [currentPath]);

  return (
    <div>
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
      <div ref={Appref}>
        {children}
      </div>
    </div>
  );
}

export default Header;
