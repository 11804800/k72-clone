import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Header({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smooth: true,
      duration: 1.2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }, []);

  const Appref = useRef();

  const currentPath = useLocation().pathname;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".navbar", {
      scale: 1.2,
      opacity: 0,
    });
    tl.from(Appref.current, {
      opacity: 0,
    });
  }, [currentPath]);

  return (
    <div className="relative z-[1] ">
      <Navbar />
      <div ref={Appref}>{children}</div>
    </div>
  );
}

export default Header;
